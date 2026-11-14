import { test, expect, describe } from "bun:test";
import { getTransactions } from "./transaction-service";

describe("getTransactions", () => {
    test("give empty obj and expect to return an empty obj too", () => {
        expect(getTransactions([])).toBe({});
    })
})