
//IMPLEMENTING COOKIES -> DARKMODE
Cookies.set("mode", "false", {expires: 7});
var mode = Cookies.get("mode");
const nav_icon = document.querySelector(".nav_icon");

nav_icon.onclick = function() {
    if (mode == "false") {
        mode = "true";
        darkMode(mode);
    }
    else {
        mode = "false";
        darkMode(mode);
    }
}
function darkMode(mode) {
    if (mode == "true") {
        document.body.classList.add("dark");
    } else if (mode == "false") {
        document.body.classList.remove("dark");
    }

    if (document.body.classList.contains("dark")) {
        nav_icon.innerHTML = "light_mode";
    } else {
        nav_icon.innerHTML = "dark_mode";
    }
}


//CONTACT PAGE
const contact = document.querySelector(".contactshowup");
const contact_page1 = document.querySelector(".contact_page1");
const contact_page2 = document.querySelector(".contact_page2");
contact.onclick = function() {
    contact_page1.classList.toggle("swoosh");
    contact_page2.classList.toggle("swoosh");
}
const hamburger2 = document.querySelector(".hamburger_2");
hamburger2.onclick = function() {
    contact_page1.classList.remove("swoosh");
    contact_page2.classList.remove("swoosh");
}


//STICKY NAVBAR
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function() {
    navbar.classList.toggle("scroll", window.scrollY > 50);
})


//RESPONSIVE NAVBAR
const hamburger = document.querySelector(".hamburger");
const nav_hidden = document.querySelector(".nav_container_hidden");
hamburger.onclick = function() {
    hamburger.classList.toggle("show");
    nav_hidden.classList.toggle("show");
}
