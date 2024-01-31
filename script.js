const btnMobile = document.querySelector("[data-menu='button']");
const listMobile = document.querySelector("[data-menu='list']");

function openMenu() {
  listMobile.classList.toggle("active");
  btnMobile.classList.toggle("active");
}

btnMobile.addEventListener("click", openMenu);