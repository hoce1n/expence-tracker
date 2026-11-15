import { createIcons, Settings, SunMoon, Wallet } from "lucide";

const body = document.querySelector("body");
body.appendChild(navbar());


function navbar() {
    const element = document.createElement("nav");
    element.style.width = "90%";
    element.style.margin = "0 auto";
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
