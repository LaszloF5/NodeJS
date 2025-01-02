import {
  getDarkOrLight,
  getToggleMenu,
  toggleHamburgerMenu,
  resize,
} from "./function.js";
getDarkOrLight();
getToggleMenu();
toggleHamburgerMenu();
resize();

let api_url = "http://localhost:8000/api/etelek";

fetch(api_url)
  .then((data) => data.json())
  .then((foods) => {
    let now = new Date();
    let day = now.getDay().toString();
    const container = document.querySelector(".js-daily-container");
    const dailyMenu = foods.filter((daily) => daily.id[0] === day);
    dailyMenu.forEach((recipe) => {
      const recpieHTML = `
                <section class="recipe-container js-recipe-container">
                    <h2 class="recipe-name">${recipe.name}</h2>
                        <p class="italic-p">Konyha típusa: ${
                          recipe.kitchenType
                        }</p>
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
      container.innerHTML += recpieHTML;
    });
  })
  .catch((error) => {
    const errorContainer = document.querySelector(".js-daily-container");
    const errorMessage = `<p class="error-p">Error: ${error.message}</p>`;
    errorContainer.innerHTML = errorMessage;
  });
