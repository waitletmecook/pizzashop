import { db } from "../db";
import { products } from "../db/schema";
import { count } from "drizzle-orm";

export async function getProducts(page: number, limit: number = 8) {
  const offset = (page - 1) * limit;
  
  const data = await db.query.products.findMany({
    limit: limit,
    offset: offset,
  });

  const totalRes = await db.select({ value: count() }).from(products);
  const total = totalRes[0].value;

  return {
    items: data,
    totalPages: Math.ceil(total / limit)
  };
}