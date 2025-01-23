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

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de validar

    // Obtener los valores de los campos
    var nombre = document.getElementById('inputName');
    var labelName = document.getElementById('labelName');
    var correo = document.getElementById('inputEmail');
    var labelEmail = document.getElementById('labelEmail');
    var consent = document.getElementById('inputCheck');
    var labelConsent = document.getElementById('labelCheck');

    var mensajeError = '';

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

    // Validar campo de nombre
    if (nombre.value === '') {
        mensajeError += 'El campo de nombre es obligatorio.\n';
        redBorder(nombre)
        redText(labelName)
    } else {
        correctBorder(nombre)
        correctText(labelName)
    }

    // Validar campo de correo
    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (correo.value === '') {
        mensajeError += 'El campo de correo es obligatorio.\n';
        redBorder(correo)
        redText(labelEmail)
    } else if (!correoRegex.test(correo.value)) {
        mensajeError += 'El correo no tiene un formato válido.\n';
        redBorder(correo)
        redText(labelEmail)
    } else {
        correctBorder(correo)
        correctText(labelEmail)
    }

    // Validar el checkbox de consentimiento
    if (!consent.checked) {
        mensajeError += 'Debes aceptar el consentimiento para procesar tus datos.\n';
        redText(labelConsent)
    } else {
        correctText(labelConsent)
    }

    // Mostrar los errores o enviar el formulario
    if (mensajeError !== '') {
        document.getElementById('warnings').innerText = mensajeError;
    } else {
        // Aquí puedes proceder a enviar el formulario o hacer lo que necesites
        correctBorder(nombre)
        correctText(labelName)
        correctBorder(correo)
        correctText(labelEmail)
        correctText(labelConsent)
        alert('Formulario enviado correctamente');
    }
});


// ---------------------------------------- Fin validacion Inputs NOMBRE y EMAIL ----------------------------------------