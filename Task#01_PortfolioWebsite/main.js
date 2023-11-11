var typed = new Typed(".text", {
    strings: [" Web Developer,", " UI/UX Designer,", " App Developer,"],
    typeSpeed: 85,
    backSpeed: 85,
    backDelay: 700,
    loop: true,
});

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})