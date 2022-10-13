import { fetchJson } from "./api";

const CMS_URL = 'http://localhost:1337'

function stripProduct(product) {
  return {
    id: product.id,
    title: product.attributes.title,
    description: product.attributes.description,
  };
}

export async function getProduct(id) {
  const response = await fetchJson(`${CMS_URL}/api/products/${id}`);

  const product = await response.data;
  return stripProduct(product);
}

export async function getProducts() {
  const response = await fetchJson(`${CMS_URL}/api/products`);

  const products = await response.data;

  return products.map(stripProduct);
}
