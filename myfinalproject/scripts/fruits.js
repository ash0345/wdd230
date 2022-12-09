// fruit maker selection

const requestURL = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const fruits = document.getElementById("#fruit");

async function getFruits() {
    const response = await fetch(requestURL);
    const data = await response.json();
    data.forEach(name => {
        displayFruit(name);
        console.log(name);
    });
}

function displayFruit(fruit) {
    // Create element to add
    let option = document.createElement('option');

    // set content
    option.textContent = `${fruit.name}`;

    // append content
    fruits.appendChild(option);
}

getFruits();
