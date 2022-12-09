// fruit maker selection

const requestURL = "https://api.npoint.io/bf7022b1cf30803ba0fd";
const fruit1 = document.querySelector("#fruit1");
const fruit2 = document.querySelector("#fruit2");
const fruit3 = document.querySelector("#fruit3");
let fruits = [];

async function getFruits() {
    const response = await fetch(requestURL);
    fruits = await response.json();
    fruits.forEach(fruit => {
        displayFruit(fruit, fruit1);
        displayFruit(fruit, fruit2);
        displayFruit(fruit, fruit3);
    });
}

function displayFruit(fruit, parent) {
    // Create element to add
    let option = document.createElement('option');

    // set content
    option.textContent = `${fruit.name}`;

    // append content
    parent.appendChild(option);
}

getFruits();

// form submitted message

function generateDrink(event) {
    // get form results 
    // loop through 3 fruits to calculate
    // calculate nutrition value
    // fill in drink result feilds
    // remove hide class from div 
    // add hide class to form 
}
