"use strict";

function hideLoader() {
  const loader = document.getElementById("loader");
  const contents = document.querySelectorAll(".hidden-content");

  setTimeout(() => {
    loader.classList.add("hidden");
    contents.forEach((el) => el.classList.add("show"));
  }, 1);
}

function updateScrollProgressBar() {
  const scrollProgressBar = document.getElementById("scrollProgressBar");

  window.addEventListener("scroll", () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    scrollProgressBar.style.width = `${scrollPercent}%`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  hideLoader();
  updateScrollProgressBar();
});

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const links = document.querySelectorAll(".header__menu-list a");

burger.addEventListener("click", () => {
  const isActive = menu.classList.toggle("active");
  burger.classList.toggle("active");
  burger.setAttribute("aria-expanded", isActive.toString());
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.remove("active");
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    const targetId = link.getAttribute("href");
    if (targetId === "./index.html") {
      window.location.href = targetId;
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("active");
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
  }
});
