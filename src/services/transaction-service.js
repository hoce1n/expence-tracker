import { transactions } from "../data/transactions.js"
import { findCategory, getCategoryIDs } from "./category-service.js"

function getNextId() {
  if (transactions.length === 0) return "tx-1"
  const maxId = transactions.reduce((max, tx) => {
    const parts = tx.id.split("-")
    const num = Number(parts[1])
    return !isNaN(num) && num > max ? num : max
  }, 0)

  return `tx-${maxId + 1}`
}

export function isValidTransaction(tx) {
  if (!tx || typeof tx !== "object") return false

  const { title, amount, type, categoryId, date } = tx

  if (typeof title !== "string" || title.trim() === "") return false
  if (typeof categoryId !== "string" || categoryId.trim() === "") return false
  if (!getCategoryIDs().includes(categoryId)) return false
  if (type !== findCategory(categoryId).type) return false
  if (typeof amount !== "number" || isNaN(amount) || amount <= 0) return false
  if (type !== "income" && type !== "expense") return false

  if (typeof date !== "string" || isNaN(Date.parse(date))) return false

  return true
}

export function getTransactions() {
  return structuredClone(transactions)
}

export function getTransactionById(id) {
  const items = getTransactions()
  const item = items.find((item) => item.id === id)
  return item
}

export function addTransaction(txData) {
  const transaction = {
    ...txData,
    id: getNextId(),
  }

  if (!isValidTransaction(transaction)) {
    throw new Error("Validation failed: Please check ur transaction property")
  }

  transactions.push(transaction)
  return transaction
}

export function updateTransaction(id, updatedData) {
  const index = transactions.findIndex((tx) => tx.id === id)
  if (index === -1) {
    throw new Error(`Transaction with id "${id}" not found!`)
  }

  const candidate = {
    ...transactions[index],
    ...updatedData, //overwrite with new properties
    id: id, // lock in the original ID.
  }

  if (!isValidTransaction(candidate)) {
    throw new Error("Validation failed: Please check ur transaction property")
  }

  transactions[index] = candidate
  return candidate
}

export function deleteTransaction(id) {
  const index = transactions.findIndex((tx) => tx.id === id)
  if (index === -1) {
    throw new Error(`Transaction with id "${id}" not found!`)
  }

  transactions.splice(index, 1)
  return getTransactions()
}
