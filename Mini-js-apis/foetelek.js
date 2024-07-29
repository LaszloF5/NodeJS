import {getDarkOrLight, getToggleMenu} from './function.js';
getDarkOrLight();
getToggleMenu();

let api_url = "http://localhost:8000/api/etelek";

fetch(api_url)
  .then((data) => data.json())
  .then((foods) => {
    const container = document.querySelector(".js-lunch-container");
    const lunchRecipes = foods.filter((lunch) => lunch.dishType === "Főétel");
    lunchRecipes.forEach((recipe) => {
      const recipeHTML = `
       <section class="recipe-container js-recipe-container">
                <h2 class="recipe-name">${recipe.name}</h2>
                    <p class="italic-p">Konyha típusa: ${recipe.kitchenType}</p>
                    <p class="italic-p">Fogás típusa: ${recipe.dishType}</p>
                <h3 class="recipe-ingredients">Hozzávalók</h3>
                    <ul class = "recipe-ul">
                        ${Object.values(recipe.ingredients)
                          .map((ingredient) => `<li>${ingredient}</li>`)
                          .join("")}
                    </ul>
                <h3 class="recipe-preparation">Elkészítés</h3>
                    <p>${recipe.preparation}</p>
      </section>
            `;
      container.innerHTML += recipeHTML;
    });
  })
  .catch((error) => {
    const errorContainer = document.querySelector(".js-lunch-container");
    const errorMessage = `<p class="error-p">Error: ${error.message}</p>`;
    errorContainer.innerHTML = errorMessage;
  });