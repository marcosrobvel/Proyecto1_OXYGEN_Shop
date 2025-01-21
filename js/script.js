// ------------------------------------------ Funcionalidad menú ------------------------------------------

const navMenu = document.querySelector("#navMenu");
const iconoMenu = document.querySelector("#iconoMenu");
const cruzMenu = document.querySelector("#cruzMenu");

iconoMenu.addEventListener("click", () => {
    navMenu.classList.add("visible");
})

cruzMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible");
})

// ------------------------------------------ Fin funcionalidad menú ------------------------------------------

// ------------------------------------------ Funcionalidad barra porcentaje scroll ------------------------------------------

window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

// funcion cuenta       | cantidad px scrolleados |   alto total del body   |   alto total ventana buscador |
function update(){
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}

// ---------------------------------------- Fin funcionalidad barra porcentaje scroll ----------------------------------------



// ---------------------------------------- Funcionalidad boton "Return to top" ----------------------------------------

const returnTop = document.querySelector(".returnTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        returnTop.classList.add("active");
        navMenu.classList.remove("visible");
    } else {
        returnTop.classList.remove("active");
    }
})

// ---------------------------------------- Fin funcionalidad boton "Return to top" ----------------------------------------