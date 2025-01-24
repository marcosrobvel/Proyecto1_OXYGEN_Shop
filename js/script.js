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
    
    if (window.pageYOffset > 100) {
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