var bodyWrapper = document.querySelector("body")
var openBtn = document.querySelector("#open-icon")
var navSection = document.querySelector(".header__navigation")
var closeBtn = document.querySelector(".header__menu-icon-close")




openBtn.addEventListner("click", function () {
    bodyWrapper.classList.add("huh")
    navSection.classList.add("open-nav")
});

closeBtn.addEventListner("click", function () {
    navSection.classList.remove("open-nav")
});