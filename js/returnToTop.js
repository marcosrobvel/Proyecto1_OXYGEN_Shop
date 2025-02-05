
const returnTop = document.querySelector(".returnTop");

window.addEventListener("scroll", () => {
    
    if (window.scrollY >= (0.25 * document.body.scrollHeight)) {
        returnTop.classList.add("active");
        navMenu.classList.remove("visible");
    } else {
        returnTop.classList.remove("active");
    }
})
