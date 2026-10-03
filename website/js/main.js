const toggle = document.querySelector("[data-menu]");
const links = document.querySelector("[data-links]");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
}
