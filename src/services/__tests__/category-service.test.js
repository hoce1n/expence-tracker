import { describe, it, expect, mock } from "bun:test";

// 1. Match the exact relative string path used in category-service.js: "../data/categories.js"
mock.module("../data/categories.js", () => {
  return {
    categories: [
      { id: "cat-1", name: "Salary", type: "income" },
      { id: "cat-2", name: "Groceries", type: "expense" },
    ],
  };
});

// 2. Import functions after mock definition
import {
  getCategories,
  getCategoryIDs,
  findCategory,
} from "../category-service.js";

describe("Category Service", () => {
  it("should return all categories", () => {
    const result = getCategories();
    expect(result.length).toBe(2);
    expect(result[0].name).toBe("Salary");
  });

  it("should return an array of category IDs", () => {
    const ids = getCategoryIDs();
    expect(ids).toEqual(["cat-1", "cat-2"]);
  });

  it("should find an existing category by ID", () => {
    const category = findCategory("cat-2");
    expect(category).toBeDefined();
    expect(category.name).toBe("Groceries");
    expect(category.type).toBe("expense");
  });

  it("should return undefined if the category ID does not exist", () => {
    const category = findCategory("invalid-id");
    expect(category).toBeUndefined();
  });
});
