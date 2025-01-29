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
function update() {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}




// ---------------------------------------- Fin funcionalidad barra porcentaje scroll ----------------------------------------



// ---------------------------------------- Funcionalidad boton "Return to top" ----------------------------------------

const returnTop = document.querySelector(".returnTop");

window.addEventListener("scroll", () => {
    
    if (window.scrollY >= (0.25 * document.body.scrollHeight)) {
        returnTop.classList.add("active");
        navMenu.classList.remove("visible");
    } else {
        returnTop.classList.remove("active");
    }
})

// ---------------------------------------- Fin funcionalidad boton "Return to top" ----------------------------------------


// ---------------------------------------- Validacion Inputs NOMBRE, EMAIL y CHECK ----------------------------------------

var nombre = document.getElementById('inputName');
var labelName = document.getElementById('labelName');
var correo = document.getElementById('inputEmail');
var labelEmail = document.getElementById('labelEmail');
var consent = document.getElementById('inputCheck');
var labelConsent = document.getElementById('labelCheck');
var formulario = document.getElementById('formulario');

var mensajeError = '';
var errorNombre = false;
var errorCorreo1 = false;
var errorCorreo2 = false;
var errorCheck = false;

var MensajeErrorNombre = 'El campo de nombre es obligatorio.\n';
var MensajeErrorCorreo1 = 'El campo de correo es obligatorio.\n';
var MensajeErrorCorreo2 = 'El correo no tiene un formato válido.\n';
var MensajeErrorCheck = 'Debes aceptar el consentimiento para procesar tus datos.\n';

function recogerDatos() {
    return {
        'nombre': nombre.value,
        'correo': correo.value,
        'consent': consent.checked
    };
}


function validacionFormulario() {




    function redBorder(element) {
        element.style.borderColor = 'red';
    }

    function redText(element) {
        element.style.color = 'red';
    }

    function correctBorder(element) {
        element.style.borderColor = '#A5A5A5'

    }

    function correctText(element) {
        element.style.color = '#08A6E4'

    }





    if (nombre.value === '') {
        errorNombre = true;
        MensajeErrorNombre;
        redBorder(nombre)
        redText(labelName)
    } else {
        errorNombre = false;
        document.getElementById('warnings').innerText = '';
        correctBorder(nombre)
        correctText(labelName)
    }


    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (correo.value === '') {
        errorCorreo1 = true;
        MensajeErrorCorreo1;
        redBorder(correo)
        redText(labelEmail)
    } else if (!correoRegex.test(correo.value)) {
        errorCorreo2 = true;
        MensajeErrorCorreo2;
        redBorder(correo)
        redText(labelEmail)
    } else {
        errorCorreo1 = false;
        errorCorreo2 = false;
        document.getElementById('warnings').innerText = '';
        correctBorder(correo)
        correctText(labelEmail)
    }


    if (!consent.checked) {
        errorCheck = true;
        MensajeErrorCheck;
        redText(labelConsent)
    } else {
        errorCheck = false;
        document.getElementById('warnings').innerText = '';
        correctText(labelConsent)
    }


    if (errorNombre) {
        if (!document.getElementById('warnings').innerText.includes(MensajeErrorNombre)) {
            document.getElementById('warnings').innerText += MensajeErrorNombre;
        }
    }
    if (errorCorreo1) {
        if (!document.getElementById('warnings').innerText.includes(MensajeErrorCorreo1)) {
            document.getElementById('warnings').innerText += MensajeErrorCorreo1;
        }
    }
    if (errorCorreo2) {
        if(!document.getElementById('warnings').innerText.includes(MensajeErrorCorreo2)){
            document.getElementById('warnings').innerText += MensajeErrorCorreo2;
        }
    }
    if (errorCheck) {
        if(!document.getElementById('warnings').innerText.includes(MensajeErrorCheck)){
            document.getElementById('warnings').innerText += MensajeErrorCheck;
        }
    }

    else {
        correctBorder(nombre)
        correctText(labelName)
        correctBorder(correo)
        correctText(labelEmail)
        correctText(labelConsent)
        alert('Formulario enviado correctamente');
    }

    return !errorNombre && !errorCorreo1 && !errorCorreo2 && !errorCheck;
};


// ---------------------------------------- Fin validacion Inputs NOMBRE y EMAIL ----------------------------------------

// ---------------------------------------- Enviar formulario a API ----------------------------------------


function enviarDatos(info) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function submitForm(event) {
    event.preventDefault()
    const isValid = validacionFormulario();
    if (isValid){
        enviarDatos(recogerDatos());
    }
}

formulario.addEventListener('submit', submitForm)


// ---------------------------------------- Fin enviar formulario a API ----------------------------------------


// ---------------------------------------- Selector de moneda ----------------------------------------

let select = document.getElementById('currencySelector');
let simbolo = document.getElementById('simbolo');
let simbolo1 = document.getElementById('simbolo1');
let simbolo2 = document.getElementById('simbolo2');
let professionalPrice = document.getElementById('precioProfessional');
let professionalPriceValue = Number(document.getElementById('precioProfessional').textContent);
let premiumPrice = document.getElementById('precioPremium');
let premiumPriceValue = Number(document.getElementById('precioPremium').textContent);
const API_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';


async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data)
    
    //console.log(data['eur']);
    const arrKeys = (Object.keys(data['usd']).filter((moneda) => moneda == "usd" || moneda == "gbp" || moneda == "eur")).reverse();
    const euros = data['usd'];
    //console.log(euros);
    for(let i=0; i<arrKeys.length; i++){
        var option = document.createElement('option');
        option.value = arrKeys[i];
        option.text = arrKeys[i];
        select.appendChild(option);
    }

    select.addEventListener('change', ()=>{
        professionalPrice.textContent = (professionalPriceValue * euros[select.value]).toFixed(1); 
        premiumPrice.textContent = (premiumPriceValue * euros[select.value]).toFixed(1); 

        console.log(select.value)

        if(select.value == "usd"){
            simbolo.textContent = "$";
            simbolo1.textContent = "$";
            simbolo2.textContent = "$";
        }else if(select.value == "eur"){
            simbolo.textContent = "€";
            simbolo1.textContent = "€";
            simbolo2.textContent = "€";
        }else if(select.value == "gbp"){
            simbolo.textContent = "£";
            simbolo1.textContent = "£";
            simbolo2.textContent = "£";
        }else{
            simbolo.textContent = "$"
            simbolo1.textContent = "$"
            simbolo2.textContent = "$"
        }

    });  

};
currency();

// ---------------------------------------- Fin selector de moneda ----------------------------------------


// ---------------------------------------- Pop-Up ----------------------------------------

let news = document.getElementById("newsletter")
let closeNewsButton = document.getElementById('close-newsletter');
let newsHidden = true;

function newsDisplayTrue() {
    news.classList.add('newsletter--visible');
}


function newsTimeAppear(){
    if (newsHidden){
        setTimeout(newsDisplayTrue, 5000);
        newsHidden = false;
    }    
}
 

function newsScrollAppear(){
    if (scrollPercentRoundedValue >= 25){
        newsDisplayTrue();
        newsHidden = false;
    }
}

function closeNewsletter(){
     if (!newsHidden){
         news.style.display = 'none';
         news.classList.remove('newsletter--visible');
         newsHidden = true;
     }
 }
 
window.addEventListener('scroll',newsScrollAppear);
newsTimeAppear();
closeNewsButton.addEventListener('click',closeNewsletter)


//Function newsletter
let newsMail = document.getElementById('newsletter-input');
let newsButton = document.getElementById('news-button');
let newsForm = document.getElementById('newsletter-form');

function getNewsData() {
    return {
        'mail': newsMail.value
    }    
}

function validateNews (){
    if(validateEmail(newsMail.value)){
        return true;
    }
    redBorder(newsMail);
    return false;
}

function submitNewsletter(event) {
    event.preventDefault();
    const newsValid = validateNews();
    if (newsValid){
        send(getNewsData());
        closeNewsletter();
    }
}
newsForm.addEventListener('submit',submitNewsletter);

// ---------------------------------------- Fin pop-Up ----------------------------------------


// ---------------------------------------- Slider ----------------------------------------

class Slider {
    constructor(slider) {
      this.sliderElement = document.getElementById(slider);
      this.images = this.sliderElement.getElementsByTagName('img');
      this.currentIndex = 0;
      this.totalImages = this.images.length;
  
      this.initSlider();
    }
  
    initSlider() {
      this.addNavigationButtons();
      this.addDots();
      this.showImage(this.currentIndex);
      this.autoSlide();
    }
  
    addNavigationButtons() {
      const prevButton = document.createElement('button');
      prevButton.addEventListener('click', () => this.prevImage());
  
      const nextButton = document.createElement('button');
      nextButton.addEventListener('click', () => this.nextImage());
  
      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('slider-buttons');
      buttonsDiv.appendChild(prevButton);
      buttonsDiv.appendChild(nextButton);
  
      this.sliderElement.appendChild(buttonsDiv);
    }
  
    addDots() {
      const dotsDiv = document.createElement('div');
      dotsDiv.classList.add('slider-dots');
  
      for (let i = 0; i < this.totalImages; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => this.showImage(i));
        dotsDiv.appendChild(dot);
      }
  
      this.sliderElement.appendChild(dotsDiv);
      this.dots = dotsDiv.getElementsByTagName('span');
    }
  
    showImage(index) {
      for (let i = 0; i < this.totalImages; i++) {
        this.images[i].classList.remove('active');
        this.dots[i].classList.remove('active');
      }
  
      this.images[index].classList.add('active');
      this.dots[index].classList.add('active');
      this.currentIndex = index;
    }
  
    nextImage() {
      const nextIndex = (this.currentIndex + 1) % this.totalImages;
      this.showImage(nextIndex);
    }
  
    prevImage() {
      const prevIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
      this.showImage(prevIndex);
    }
  
    autoSlide() {
      setInterval(() => {
        this.nextImage();
      }, 5000); 
    }
}
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('slider');
  });

  // ---------------------------------------- Fin slider ----------------------------------------
