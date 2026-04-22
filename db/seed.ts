import { db } from "./index";
import { products } from "./schema";

async function seed() {
  console.log("🌱 Начинаем посев данных...");

  const pizzaVariants = [
    "С креветками и трюфелями", "Маргарита", "Пепперони", "Четыре сыра", 
    "Мясная", "Гавайская", "Диабло", "Барбекю", "Вегетарианская", 
    "Грибная", "Ветчина и сыр", "Морская"
  ];

  const dummyProducts = Array.from({ length: 48 }).map((_, i) => ({
    name: `${pizzaVariants[i % pizzaVariants.length]} ${Math.floor(i / 12) + 1}`,
    description: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
    price: 450 + (i * 10),
    image: `pizza-${(i % 4) + 1}.png`, // Убедись, что есть pizza-1.png ... pizza-4.png в public
    category: "pizza",
    isNew: i % 7 === 0 // Каждая 7-я пицца будет с бейджем NEW
  }));

  try {
    await db.insert(products).values(dummyProducts);
    console.log("✅ База успешно заполнена (48 товаров)!");
  } catch (error) {
    console.error("❌ Ошибка при заполнении:", error);
  }
}

seed();