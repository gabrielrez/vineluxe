const btnMobile = document.querySelector("[data-menu='button']");
const listMobile = document.querySelector("[data-menu='list']");
const html = document.documentElement;
const linksMenu = document.querySelectorAll("[data-menu='list'] li a");
const accordion = document.querySelectorAll("[data-accordion='dt']");
const mainImg = document.querySelector(".main-img img");
const imgsArray = [
  "img/main-img-1.jpg",
  "img/main-img-2.jpg",
  "img/main-img-3.jpg"
];
const dataAnimes = document.querySelectorAll("[data-anime]");
const windowHalf = window.innerHeight * 0.9;

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

function initMainImgChange() {
  let i = 0;

  function changeImage() {
    mainImg.setAttribute("src", imgsArray[i]);
    i++;

    if (i === imgsArray.length) {
      i = 0;
    }

    setTimeout(changeImage, 5000);
  }

  changeImage();
}

function initAnimeScroll() {
  for (let i = 0; i < 2; i++) {
    dataAnimes[i].classList.add("animate");
  }

  if (dataAnimes) {
    function animeScroll() {
      dataAnimes.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top - windowHalf;
        if (itemTop < 0) {
          item.classList.add("animate");
        }
      })
    }
  }

  window.addEventListener("scroll", animeScroll);
}

window.onload = function () {
  initMenuMobile();
  initAccordion();
  initMainImgChange();
  initAnimeScroll();
}