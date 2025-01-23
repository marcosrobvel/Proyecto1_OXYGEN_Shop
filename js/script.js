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


// ---------------------------------------- Validacion Inputs NOMBRE y EMAIL ----------------------------------------

    var nombre = document.getElementById('inputName');
    var labelName = document.getElementById('labelName');
    var correo = document.getElementById('inputEmail');
    var labelEmail = document.getElementById('labelEmail');
    var consent = document.getElementById('inputCheck');
    var labelConsent = document.getElementById('labelCheck');
    var formulario = document.getElementById('formulario');

    var mensajeError = '';
    var errorNombre = false;
    var errorCorreo = false;
    var errorCheck = false;

function validacionFormulario() {
    

    

    function redBorder(element){
        element.style.borderColor = 'red';
    }

    function redText(element){
        element.style.color = 'red';
    }

    function correctBorder(element){
        element.style.borderColor = '#A5A5A5'

    }

    function correctText(element){
        element.style.color = '#08A6E4'

    }


    

    
    if (nombre.value === '') {
        errorNombre = true;
        mensajeError += 'El campo de nombre es obligatorio.\n';
        redBorder(nombre)
        redText(labelName)
    } else {
        errorNombre = false;
        correctBorder(nombre)
        correctText(labelName)
    }

    
    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (correo.value === '') {
        errorCorreo = true;
        mensajeError += 'El campo de correo es obligatorio.\n';
        redBorder(correo)
        redText(labelEmail)
    } else if (!correoRegex.test(correo.value)) {
        errorCorreo = true;
        mensajeError += 'El correo no tiene un formato válido.\n';
        redBorder(correo)
        redText(labelEmail)
    } else {
        errorCorreo = false;
        correctBorder(correo)
        correctText(labelEmail)
    }

    
    if (!consent.checked) {
        errorCheck = true;
        mensajeError += 'Debes aceptar el consentimiento para procesar tus datos.\n';
        redText(labelConsent)
    } else {
        errorCheck = false;
        correctText(labelConsent)
    }


    if (errorNombre || errorCorreo || errorCheck) {
        console.log('hay errores')
        document.getElementById('warnings').innerText = mensajeError;
    } else {
        console.log('NO hay errores')
        correctBorder(nombre)
        correctText(labelName)
        correctBorder(correo)
        correctText(labelEmail)
        correctText(labelConsent)
        console.log({nombre: nombre.value, correo: correo.value, consent: consent.value})
        alert('Formulario enviado correctamente');
    }
};


function submitForm(event){

    console.log('hola')

    event.preventDefault()

    validacionFormulario()

}

formulario.addEventListener('submit', submitForm)

// ---------------------------------------- Fin validacion Inputs NOMBRE y EMAIL ----------------------------------------