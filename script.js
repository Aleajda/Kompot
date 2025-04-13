const burger = document.querySelector(".headerMenu");
const nav = document.querySelector(".mobileNav");
burger.addEventListener("click", (e) => {
    nav.style.display = "block";
})

nav.addEventListener("click", (e) => {
    nav.style.display = "none";
})