const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please check your class names, there is no class called ${selector} 🤔`
  );
};

const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

const pages = [
  "/index.html",
  "/about.html",
  "/contact.html",
  "/recipes.html",
  "/single-recipe.html",
  "/tag-template.html",
  "/tags.html",
];

function UrlExists() {
  if (pages.includes(window.location.pathname))
    console.log(`right link`);
  else window.location.pathname = `/404.html`;
}
window.addEventListener("hashchange", function () {
  console.log(`url change`);
  UrlExists();
});
