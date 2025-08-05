
import type {Product} from './types'

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}
