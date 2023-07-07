var bodyWrapper = document.querySelector("body")
var overlay = document.querySelector(".overlay")
var navSection = document.querySelector(".header__navigation")
var openBtn = document.querySelector(".header__menu-icon-open")
var closeBtn = document.querySelector(".header__menu-icon-close")


openBtn.addEventListener('click', function() {
    overlay.classList.add("active");
    navSection.classList.add("open-nav");
});

closeBtn.addEventListener('click', function() {
    overlay.classList.remove("active");
    navSection.classList.remove("open-nav");
});

overlay.addEventListener("click", function() {
    overlay.classList.remove("active");
    navSection.classList.remove("open-nav");
})