const btnMobile = document.querySelector("[data-menu='button']");
const listMobile = document.querySelector("[data-menu='list']");
const html = document.documentElement;

function handleClickOutside(event) {
  if (!listMobile.contains(event.target) && !btnMobile.contains(event.target)) {
    listMobile.classList.remove("active");
    btnMobile.classList.remove("active");
    html.removeEventListener("click", handleClickOutside);
  }
}

function openMenu() {
  listMobile.classList.toggle("active");
  btnMobile.classList.toggle("active");
  if (listMobile.classList.contains("active")) {
    html.addEventListener("click", handleClickOutside);
  } else {
    html.removeEventListener("click", handleClickOutside);
  }
}

btnMobile.addEventListener("click", openMenu);