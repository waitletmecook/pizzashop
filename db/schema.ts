import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  price: integer('price').notNull(),
  image: text('image').notNull(),
  category: text('category').notNull(),
  isNew: integer('is_new', { mode: 'boolean' }).default(false),
});