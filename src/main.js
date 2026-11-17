import { 
    ArrowDown, 
    ArrowUp, 
    createIcons, 
    Settings, 
    SunMoon, 
    Wallet 
} from "lucide";

import { 
    calculateBalance, 
    calculateTotalExpenses, 
    calculateTotalIncome 
} from "./services/calculation-service.js";
import { getCategories } from "./services/category-service.js";

const body = document.querySelector("body");
body.style.width = "90%";
body.style.margin = "0 auto";
body.appendChild(navbar());
body.appendChild(totalCards());
body.appendChild(addTransaction());


function navbar() {
    const element = document.createElement("nav");
    element.innerHTML = `
        <header class="header">
            <div class="header__brand-group">
                <span class="header__brand">
                    <i class="header__icon" data-lucide="wallet"></i>
                </span>
                <strong class="header__title">expence tracker</strong>
            </div>
            <div class="header__actions">
                <i class="header__icon" data-lucide="sun-moon"></i>
                <i class="header__icon" data-lucide="settings"></i>
            </div>
        </header>
    `

    createIcons({
        icons: {
            Wallet,
            SunMoon,
            Settings
        },
        root: element
    })

    return element;
}

function totalCards() {

    const statCard = [
        {
            title: "Balance",
            icon: "wallet",
            total: calculateBalance(),
            class: ""
        },
        {
            title: "Income",
            icon: "arrow-up",
            total: calculateTotalIncome(),
            class: "income"
        },
        {
            title: "Expenses",
            icon: "arrow-down",
            total: calculateTotalExpenses(),
            class: "expense"
        }
    ]

    function createCards(card) {
        return `
            <article class="stat-card ${card.class ? `stat-card--${card.class}` : ''}">
                <div class="stat-card__head">
                    <span class="stat-card__title">Total ${card.title}</span>
                    <i class="stat-card__icon" data-lucide="${card.icon}"></i>
                </div>
                <span class="stat-card__body">$ ${card.total}</span>
            </article>
        `
    }

    function renderCards() {
        return statCard.map(createCards).join("")
    }

    const element = document.createElement("section");
    
    
    element.style.display = "flex";
    element.style.justifyContent = "space-between"
    element.innerHTML = `
        ${renderCards(statCard)}
    `

    createIcons({
        icons: {
            Wallet,
            ArrowUp,
            ArrowDown
        },
        root: element
    })

    return element;
}

function addTransaction() {
    const categories = getCategories();

    function createSelect(category) {
        return `
            <option value="${category.name}">${category.name}</option>
        `
    }

    function renderOptions() {
        return categories.map(createSelect).join("")
    }
    
    const element = document.createElement("section");
    element.style.width = "50%";
    element.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.1)";
    element.style.margin = "25px";
    element.innerHTML = `
        <form class="form">
            <h3 class="form__title">Add Transaction</h3>
            <div class="form__body">
                <div class="form__wrapper">
                    <div class="form__date">
                        <label for="date">Date</label>
                        <input type="date" name="date" id="">
                    </div>
                    <div class="form__amount">
                        <label for="amount">Amount</label>
                        <input type="text">
                    </div>
                </div>
                <div class="form__type">
                    <fieldset>
                        <legend>Type: </legend>

                        <div>
                            <input type="radio" id="income" name="income" value="income" checked />
                            <label for="income">Income</label>
                        </div>

                        <div>
                            <input type="radio" id="expense" name="expense" value="expense" />
                            <label for="expense">Expense</label>
                        </div>
                    </fieldset>
                </div>
                <div class="form__wrapper">
                    <div class="form__category">
                        <label for="category">Category</label>
                        <select name="category" id="category-select">
                            <option value="">--Please choose an option--</option>
                            ${renderOptions()}
                        </select>
                    </div>
                    <button type="submit" class="form__submit">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    `

    return element;
}
