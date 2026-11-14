import { describe, it, expect, mock, beforeEach } from "bun:test";

// 1. Mock category-service so validation passes without needing a real category file setup
mock.module("../category-service.js", () => {
  return {
    getCategoryIDs: () => ["cat-1", "cat-2"],
    findCategory: (id) => {
      if (id === "cat-1") return { id: "cat-1", type: "income" };
      if (id === "cat-2") return { id: "cat-2", type: "expense" };
      return null;
    }
  };
});

// Import functions after mocking
import { isValidTransaction, addTransaction } from "../transaction-service.js";

describe("Transaction Service", () => {
  
  describe("isValidTransaction", () => {
    it("should return true for a valid income transaction", () => {
      const validTx = {
        title: "Freelance",
        amount: 1000,
        type: "income",
        categoryId: "cat-1",
        date: "2026-11-01"
      };

      expect(isValidTransaction(validTx)).toBe(true);
    });

    it("should return false if the amount is negative or zero", () => {
      const invalidTx = {
        title: "Bad Amount",
        amount: -50,
        type: "expense",
        categoryId: "cat-2",
        date: "2026-11-01"
      };

      expect(isValidTransaction(invalidTx)).toBe(false);
    });

    it("should return false if type and category type do not match", () => {
      const mismatchTx = {
        title: "Mismatch",
        amount: 100,
        type: "income", // Mismatched! cat-2 is expense
        categoryId: "cat-2",
        date: "2026-11-01"
      };

      expect(isValidTransaction(mismatchTx)).toBe(false);
    });
  });

});