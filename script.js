const btnMobile = document.querySelector("[data-menu='button']");
const listMobile = document.querySelector("[data-menu='list']");
const html = document.documentElement;
const linksMenu = document.querySelectorAll("[data-menu='list'] li a");
const accordion = document.querySelectorAll("[data-accordion='dt']");

function initMenuMobile() {
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

  function closeMenu() {
    listMobile.classList.remove("active");
    btnMobile.classList.remove("active");
    html.removeEventListener("click", handleClickOutside);
  }

  btnMobile.addEventListener("click", openMenu);
  linksMenu.forEach((link) => {
    link.addEventListener("click", closeMenu);
  })
}

function initAccordion() {
  accordion[0].classList.add("active");
  accordion[0].nextElementSibling.classList.add("active");

  function handleAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordion.forEach((item) => {
    item.addEventListener("click", handleAccordion);
  })
}

initMenuMobile();
initAccordion();