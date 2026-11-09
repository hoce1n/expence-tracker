# Step 1: Data modeling

## 1. What this application manages

Application has three main concepts:

1. Transactions: Money coming in or going out.
2. Categories: Groups used to organize transactions.
3. Financial calculations: Income, expenses, and balance.

```
const transaction = {
  id: "1",
  title: "Groceries",
  amount: 150,
  type: "expense",
  category: "food",
  date: "2026-11-08",
  description: "Weekly shopping"
};
```


| Property    | Purpose                           |
| ----------- | --------------------------------- |
| id          | Uniquely identifies a transaction |
| title       | Transaction name                  |
| amount      | Money involved                    |
| type        | Income or expense                 |
| category    | Transaction category              |
| date        | When it happened                  |
| description | Additional information            |

## 2. Design categories

```
const categories = [
  {
    id: "1",
    name: "Food",
    type: "expense"
  },
  {
    id: "2",
    name: "Salary",
    type: "income"
  }
];
```

Something important: categories have types too.

Because having an expense category called `Salary` doesn't make much sense.

Think about whether categories should be predefined, user-created, or both.

## 3.The relationships

Application has two collections:

- Transactions
- Categories

A transaction belongs to a category.
Each transaction references a category.

Should store the category ID inside the transaction.

## 4. The operations

Transactions

- Add a transaction.
- Edit a transaction.
- Delete a transaction.
- Find a transaction by ID.
- Filter transactions by category.
- Filter transactions by type.
- Sort transactions by date.
- Search transactions by title.

Calculations

- Calculate total income.
- Calculate total expenses.
- Calculate current balance.

The formulas:

\\[ Income = \sum IncomeTransactions \\]

\\[ Expenses = \sum ExpenseTransactions \\]

\\[ Balance = Income - Expenses \\]

One important rule: calculate these values from the transactions. Don't maintain a separate balance that you manually increment and decrement.


JavaScript modules.

```
src/
├── data/
│   ├── transactions.js
│   └── categories.js
│
├── services/
│   ├── transaction-service.js
│   ├── category-service.js
│   └── calculation-service.js
│
└── main.js
```

```
addTransaction()
updateTransaction()
deleteTransaction()
getTransactions()
filterTransactions()
calculateTotalIncome()
calculateTotalExpenses()
calculateBalance()
```

No DOM. No UI. Just JavaScript.