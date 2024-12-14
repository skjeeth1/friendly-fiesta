gridSize = 4;

const container = document.querySelector(".container");

for (let i = 0; i < gridSize * gridSize; i++) {
    let element = document.createElement("div");
    element.classList.add("grid-box");
    container.appendChild(element);
}