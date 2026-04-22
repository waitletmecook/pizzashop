import { db } from "./index";
import { products } from "./schema";

async function seed() {
  console.log("База заполняется");

  const pizzaVariants = [
    "С креветками и трюфелями", "Маргарита", "Пепперони", "Четыре сыра", 
    "Мясная", "Гавайская", "Диабло", "Барбекю", "Вегетарианская", 
    "Грибная", "Ветчина и сыр", "Морская"
  ];

  const dummyProducts = Array.from({ length: 48 }).map((_, i) => ({
    name: `${pizzaVariants[i % pizzaVariants.length]} ${Math.floor(i / 12) + 1}`,
    description: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
    price: 450 + (i * 10),
    image: `pizza-${(i % 4) + 1}.png`,
    category: "pizza",
  }));

  try {
    await db.insert(products).values(dummyProducts);
    console.log("База успешно заполнена");
  } catch (error) {
    console.error("Ошибка при заполнении:", error);
  }
}

seed();