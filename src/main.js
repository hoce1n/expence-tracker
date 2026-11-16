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

const body = document.querySelector("body");
body.style.width = "90%";
body.style.margin = "0 auto";
body.appendChild(navbar());
body.appendChild(totalCards());


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
            <div class="stat-card ${card.class ? `stat-card--${card.class}` : ''}">
                <div class="stat-card__head">
                    <span class="stat-card__title">Total ${card.title}</span>
                    <i class="stat-card__icon" data-lucide="${card.icon}"></i>
                </div>
                <span class="stat-card__body">$ ${card.total}</span>
            </div>
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
