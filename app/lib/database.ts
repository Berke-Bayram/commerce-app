import { sql } from '@vercel/postgres'

export async function fetchProducts() {
  const products = await sql `SELECT * FROM products`
  return products
}