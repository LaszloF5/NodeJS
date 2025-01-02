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

  // Menü megjelenítése és elrejtése kattintáskor
  toggle.addEventListener("click", function () {
    list.classList.toggle("hide");
    list.classList.toggle("show");
  });

  // Menü automatikus elrejtése, amikor a kurzor elhagyja
  list.addEventListener("mouseleave", function () {
    list.classList.remove("show");
    list.classList.add("hide");
  });

  // Menü láthatóvá tétele, ha a kurzor fölé kerül
  list.addEventListener("mouseover", function () {
    list.classList.remove("hide");
    list.classList.add("show");
  });
}


function toggleHamburgerMenu() {
  let visibleBox = document.querySelector(".js-mobile-view");
  let hamburgerIcon = document.querySelector(".js-hamburger-icon");

  hamburgerIcon.addEventListener("click", function () {
    if (visibleBox.classList.contains("invisibleMenu")) {
      visibleBox.classList.remove("invisibleMenu");
    } else {
      visibleBox.classList.add("invisibleMenu");
    }
  });
}

function resize() {
  window.addEventListener("resize", function() {
    const width = window.innerWidth;
    if (width > 768) {
      document.querySelector(".js-mobile-view").classList.remove("invisibleMenu");
    } else {
      document.querySelector(".js-mobile-view").classList.add("invisibleMenu");
    }
  })
}


export { getDarkOrLight, getToggleMenu, toggleHamburgerMenu, resize };
