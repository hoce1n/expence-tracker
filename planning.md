# Personal Expense Tracker

## 1. Project Overview

A personal expense tracker that allows users to manage income, expenses, categories, and balances.

### Main Features

- Add, edit, and delete transactions.
- Manage income and expense categories.
- Calculate total income and expenses.
- Calculate the current balance.
- Filter transactions by category and type.
- Search transactions by title.
- Sort transactions by date.
- Generate monthly summaries.

---

## 2. Data Models

### Transaction

A transaction represents either income or an expense.

```js
const transaction = {
  id: "1",
  title: "Groceries",
  amount: 150,
  type: "expense",
  categoryId: "1",
  date: "2026-11-08",
  description: "Weekly shopping",
}
```

**Transaction fields:**

| Field       | Description                     |
| ----------- | ------------------------------- |
| id          | Unique transaction identifier   |
| title       | Transaction title               |
| amount      | Transaction amount              |
| type        | Income or expense               |
| categoryId  | ID of the associated category   |
| date        | Transaction date                |
| description | Optional additional information |

### Category

Categories organize transactions.

```js
const categories = [
  { id: "1", name: "Food", type: "expense" },
  { id: "2", name: "Salary", type: "income" },
]
```

**Category fields:**

| Field | Description                |
| ----- | -------------------------- |
| id    | Unique category identifier |
| name  | Category name              |
| type  | Income or expense          |

Categories can be predefined or created by users.

---

## 3. Business Rules

### Transaction Rules

1. Transaction amounts cannot be negative.
2. Every transaction must have a category.
3. An expense transaction must use an expense category.
4. An income transaction must use an income category.
5. Every transaction must have a unique ID.

### Category Rules

1. Categories can be predefined.
2. Users can create their own categories.
3. Categories must have a type: income or expense.
4. A category must have a unique ID.
5. Category deletion behavior is not decided yet.

---

## 4. Relationships

- Every transaction belongs to exactly one category.
- A transaction stores the category's ID through `categoryId`.
- A category can be associated with multiple transactions.
- A transaction's type must match its category's type.

---

## 5. Transaction Operations

The application should support:

- Add a transaction.
- Update a transaction.
- Delete a transaction.
- Find a transaction by ID.
- Get all transactions.
- Filter transactions by category.
- Filter transactions by type.
- Search transactions by title.
- Sort transactions by date.

---

## 6. Category Operations

The application should support:

- Get all categories.
- Add a category.
- Update a category.
- Delete a category.
- Find a category by ID.
- Filter categories by type.

---

## 7. Financial Calculations

All financial totals should be calculated from the transactions.

### Total Income

The sum of all income transactions.

### Total Expenses

The sum of all expense transactions.

### Balance

Balance = Total Income - Total Expenses

The balance should be calculated when needed rather than stored and manually updated.

---

## 8. Project Structure

```text
src/
├── assets/
│   ├── styles/
│   └── images/
│
├── services/
│   ├── transaction-service.js
│   ├── category-service.js
│   └── calculation-service.js
│
├── data/
│   ├── transactions.js
│   └── categories.js
│
└── main.js

index.html
planning.md
package.json
```

---

## 9. Planned Development Steps

1. Data modeling and business rules.
2. Core JavaScript logic without DOM manipulation.
3. DOM integration and user interface.
4. Local storage for data persistence.
5. Monthly summaries and reports.
6. Filtering, searching, and sorting.
7. Testing and improvements.

---

## 10. Core Functions

### Transaction Service

- `addTransaction()`
- `updateTransaction()`
- `deleteTransaction()`
- `getTransactions()`
- `getTransactionById()`
- `filterTransactions()`

### Category Service

- `addCategory()`
- `updateCategory()`
- `deleteCategory()`
- `getCategories()`
- `getCategoryById()`

### Calculation Service

- `calculateTotalIncome()`
- `calculateTotalExpenses()`
- `calculateBalance()`
