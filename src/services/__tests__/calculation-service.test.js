import { describe, it, expect, mock } from "bun:test";

// 1. Mock the transaction-service so it returns predictable test data
mock.module("../transaction-service.js", () => {
  return {
    getTransactions: () => [
      { id: 1, type: "income", amount: 1000 },
      { id: 2, type: "income", amount: 500 },
      { id: 3, type: "expense", amount: 200 },
      { id: 4, type: "expense", amount: 100 },
    ],
  };
});

// 2. Import the functions *after* mocking the dependency
import { 
  calculateTotalIncome, 
  calculateTotalExpenses, 
  calculateBalance 
} from "../calculation-service.js";

describe("Calculation Service", () => {
  it("should calculate total income correctly", () => {
    const totalIncome = calculateTotalIncome();
    expect(totalIncome).toBe(1500); // 1000 + 500
  });

  it("should calculate total expenses correctly", () => {
    const totalExpense = calculateTotalExpenses();
    expect(totalExpense).toBe(300); // 200 + 100
  });

  it("should calculate the correct balance", () => {
    const balance = calculateBalance();
    expect(balance).toBe(1200); // 1500 - 300
  });
});