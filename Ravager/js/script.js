const nav_icon = document.querySelector(".nav_icon");

nav_icon.onclick = function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        nav_icon.innerHTML = "light_mode";
    } else {
        nav_icon.innerHTML = "dark_mode";
    }
}


const contact = document.querySelector("#contact");
const contact_page1 = document.querySelector(".contact_page1");
const contact_page2 = document.querySelector(".contact_page2");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const contact_button = document.querySelector(".contact_button");
contact.onclick = function() {
    contact_page1.classList.toggle("swoosh");
    contact_page2.classList.toggle("swoosh");
    circle1.classList.toggle("swoosh");
    circle2.classList.toggle("swoosh");
    contact_button.classList.toggle("swoosh");
}


const hamburger2 = document.querySelector(".hamburger_2");
hamburger2.onclick = function() {
    contact_page1.classList.remove("swoosh");
    contact_page2.classList.remove("swoosh");
    circle1.classList.remove("swoosh");   
    circle2.classList.remove("swoosh");
    contact_button.classList.remove("swoosh");
}

var navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
    navbar.classList.toggle("scroll", window.scrollY > 50);
})
