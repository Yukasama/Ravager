
//IMPLEMENTING COOKIES -> DARKMODE
Cookies.set("mode", "false", {expires: 7});
var mode = Cookies.get("mode");
const nav_icon = document.querySelector(".nav_icon");
const side_icon_dark = document.querySelector(".side_icon_dark");

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
side_icon_dark.onclick = function() {
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
const contact = document.querySelector("#contact");
const contactx2 = document.querySelector("#contactx2");
const side_icon_contact = document.querySelector(".side_icon_contact");
const contact_page1 = document.querySelector(".contact_page1");
const contact_page2 = document.querySelector(".contact_page2");
contact.onclick = function() {
    contact_page1.classList.toggle("swoosh");
    contact_page2.classList.toggle("swoosh");
}
contactx2.onclick = function() {
    contact_page1.classList.toggle("swoosh");
    contact_page2.classList.toggle("swoosh");
}
side_icon_contact.onclick = function() {
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

    if (hamburger.classList.contains("show")) {
        document.body.style.overflowY = "hidden";
    } else {  document.body.style.overflowY = "scroll";  }
}



// Functions you might need down the road //

//AUTOMATIC REPLACING FUNCTION (use it when needed)
const writer = document.querySelector(".main_writer");
function writing() {
    setTimeout(() => {
        writer.innerHTML = "Elements";
    }, 0000);
    setTimeout(() => {
        writer.innerHTML = "Containers";
    }, 4000);   //Time when item gets replaced
    setTimeout(() => {
        writer.innerHTML = "Wrappers";
    }, 8000);
    setTimeout(() => {
        writer.innerHTML = "Vision";
    }, 12000);
}
setInterval(writing, 16000);
writing();


//SIDEBAR CLICK
const side_item1 = document.querySelector(".side_item1");
const side_item2 = document.querySelector(".side_item2");
const side_item3 = document.querySelector(".side_item3");
const side_item4 = document.querySelector(".side_item4");
side_item4.onclick = function() {
    side_item1.classList.toggle("open");
    side_item2.classList.toggle("open");
    side_item3.classList.toggle("open");
}


// DRAGABLE ELEMENTS
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//BUTTON CLICK FOR WEBSITE SCROLL
const main_icon = document.querySelector(".main_wave_icon");
main_icon.onclick = function() {
    window.style.transform = translateY( + window.scrollY + 1000);
};