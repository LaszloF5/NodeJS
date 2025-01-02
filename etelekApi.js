let api_url = "http://localhost:8000/api/etelek";

fetch(api_url)
  .then((data) => data.json())
  .then((etelek) => {
    const Items = etelek
      .sort((etel1, etel2) => etel1.id - etel2.id)
      .map((etel) => {
        const ingredientsList = Object.values(etel.ingredients)
          .map((ingredients) => `<li>${ingredients}</li>`)
          .join("");
        return `
        <div>
            <h2>${etel.name}</h2>
            <p>${etel.type}</p>
            <ul>${ingredientsList}</ul>
            <p>${etel.preparation}</p>
          </div>
        `;
      })
      .join("");
    document.querySelector(".js-root").innerHTML = Items;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
