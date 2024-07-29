function getDarkOrLight() {
  let toggleLight = document.querySelector(".js-darkAndLight");
  let sunIcon = document.querySelector(".js-sun-icon");
  let moonIcon = document.querySelector(".js-moon-icon");

  toggleLight.addEventListener("click", function () {
    moonIcon.classList.toggle("hide-img");
    sunIcon.classList.toggle("hide-img");
    if (moonIcon.classList.contains("hide-img")) {
      document.body.style.backgroundColor = "rgb(73, 72, 72)";
      document
        .querySelectorAll(".js-recipe-container")
        .forEach((el) => (el.style.backgroundColor = "black"));
      document
        .querySelectorAll("h1")
        .forEach((el) => (el.style.color = "whitesmoke"));
      document
        .querySelectorAll("h3")
        .forEach((el) => (el.style.color = "whitesmoke"));
      document
        .querySelectorAll("p")
        .forEach((el) => (el.style.color = "whitesmoke"));
      document
        .querySelectorAll("li")
        .forEach((el) => (el.style.color = "whitesmoke"));
      document.querySelector(".copy").style.color = "black";
    } else {
      document.body.style.backgroundColor = "white";
      document
        .querySelectorAll(".js-recipe-container")
        .forEach((el) => (el.style.backgroundColor = "#ffffff"));
      document
        .querySelectorAll("h1")
        .forEach((el) => (el.style.color = "black"));
      document
        .querySelectorAll("h3")
        .forEach((el) => (el.style.color = "black"));
      document
        .querySelectorAll("p")
        .forEach((el) => (el.style.color = "black"));
      document
        .querySelectorAll("li")
        .forEach((el) => (el.style.color = "black"));
    }
  });
}

// Toggle menü kezelése

function getToggleMenu() {
  let toggle = document.querySelector(".js-receptek-toggle");
  let list = document.querySelector(".js-recipe-list");

  toggle.addEventListener("click", function () {
    list.classList.toggle("hide");
    list.classList.toggle("show");
  });

  list.addEventListener("mouseleave", function () {
    list.classList.remove("show");
    list.classList.add("hide");
  });
}

export { getDarkOrLight, getToggleMenu };