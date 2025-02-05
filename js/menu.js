
const navMenu = document.querySelector("#navMenu");
const iconoMenu = document.querySelector("#iconoMenu");
const cruzMenu = document.querySelector("#cruzMenu");

iconoMenu.addEventListener("click", () => {
    navMenu.classList.add("visible");
})

cruzMenu.addEventListener("click", () => {
    navMenu.classList.remove("visible");
})








const opcionWhyUs = document.getElementById('opcionWhyUs');
const opcionBenefits = document.getElementById('opcionBenefits');
const opcionPrices = document.getElementById('opcionPrices');
const opcionContact = document.getElementById('opcionContact');

const seccionWhyUs = document.getElementById('navegacionWhyUs');
const seccionBenefits = document.getElementById('navegacionBenefits');
const seccionPrices = document.getElementById('navegacionPricing');
const seccionContact = document.getElementById('navegacionContact');

const titleSellMore = document.getElementById('titleSellMore');

opcionWhyUs.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetElement = seccionWhyUs;
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        titleSellMore.style.marginTop = '250px';
    }
});

opcionBenefits.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetElement = seccionBenefits;
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        titleSellMore.style.marginTop = '250px';
    }
});

opcionPrices.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetElement = seccionPrices;
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        titleSellMore.style.marginTop = '250px';
    }
});

opcionContact.addEventListener("click", function(event) {
    event.preventDefault();
    
    const targetElement = seccionContact;
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        titleSellMore.style.marginTop = '250px';
    }
});