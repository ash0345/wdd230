const recipe = window.localStorage.getItem('smoothieRecipes');
const message = 'You have no recipes yet';
window.localStorage.setItem('smoothieRecipes', message);

const myrecipes = document.querySelector('#recipes');
let recipeList = [];

window.localStorage.setItem(recipeList, 'smoothieRecipes');

// if (myrecipes) {
//     message = '';
//     recipeList = ;
// }
// if (myrecipes) {
//     if (!message) {
//         myrecipes.textContent = recipe;
//     } else {
//         myrecipes.textContent = 
//     }
// }
