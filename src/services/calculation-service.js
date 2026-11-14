import { getTransactions } from "./transaction-service";

export function calculateTotalIncome() {
    const incomes = getTransactions()
        .filter(item => item.type === "income")
        .map(item => item.amount);

    const initialValue = 0;
    const totalIncomes = incomes.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );

    return totalIncomes;
}


export function calculateTotalExpenses() {
    const expenses = getTransactions()
        .filter(item => item.type === "expense")
        .map(item => item.amount);

    const initialValue = 0;
    const totalExpenses = expenses.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );

    return totalExpenses;
}

export function calculateBalance() {
    const totalIncomes = calculateTotalIncome();
    const totalExpenses = calculateTotalExpenses();

    return totalIncomes - totalExpenses;
}
