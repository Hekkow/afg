window.toggleMenu = function() {
    document.getElementById("header").classList.toggle("active");
    for (let e of document.getElementsByClassName("contact-info")) {
        e.classList.toggle("active");
    }
    document.getElementById("header-contact-info").classList.toggle("active");
}
let sectionSize = parseInt(getComputedStyle(document.body).getPropertyValue('--header-height'));
window.scrollToSection = function(section) {
    window.scrollTo({
        top: (section * 100 - sectionSize) * window.innerHeight / 100,
        behavior: "smooth"
    })
}