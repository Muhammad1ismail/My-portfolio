const hamBurger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

hamBurger.addEventListener("click",function(){
    links.classList.toggle("show-links")
})