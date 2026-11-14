import { categories } from "../data/categories.js";

export function getCategories() {
  return structuredClone(categories);
}

export function getCategoryIDs() {
  const IDs = getCategories().map((item) => item.id);
  return IDs;
}

export function findCategory(id) {
  const category = getCategories().find((item) => item.id === id);
  return category;
}
