window.toggleMenu = function() {
    document.getElementById("header").classList.toggle("active");
    for (let e of document.getElementsByClassName("contact-info")) {
        e.classList.toggle("active");
    }
    document.getElementById("header-contact-info").classList.toggle("active");
}