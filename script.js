const nav = document.getElementById("nav-menu");

function myFunction() {
    if (nav.className === "nav-menu") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-menu";
    }
}