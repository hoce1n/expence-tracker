const body = document.querySelector("body");
body.appendChild(navbar());


function navbar() {
    const element = document.createElement("nav");
    element.innerHTML = `
        <div>
            
        </div>
    `

    return element;
}
