
var nombre = document.getElementById('inputName');
var labelName = document.getElementById('labelName');
var correo = document.getElementById('inputEmail');
var labelEmail = document.getElementById('labelEmail');
var consent = document.getElementById('inputCheck');
var labelConsent = document.getElementById('labelCheck');
var formulario = document.getElementById('formulario');

var mensajeError = '';
var errorNombre = false;
var errorNombreMinimo2Caracteres = false;
var errorCorreo1 = false;
var errorCorreo2 = false;
var errorCheck = false;

var MensajeErrorNombre = 'El campo de nombre es obligatorio.\n';
var MensajeErrorNombreMinimo2Caracteres = 'El campo de nombre debe tener entre 2 y 100 caracteres.\n';
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




    var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,100}$/;
    if (nombre.value === '') {
        errorNombre = true;
        MensajeErrorNombre;
        redBorder(nombre)
        redText(labelName)
    } else if(!nombreRegex.test(nombre.value)){
        errorNombreMinimo2Caracteres = true;
        MensajeErrorNombreMinimo2Caracteres;
        redBorder(nombre)
        redText(labelName)
    }
    else {
        errorNombre = false;
        errorNombreMinimo2Caracteres = false;
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
    if (errorNombreMinimo2Caracteres) {
        if (!document.getElementById('warnings').innerText.includes(MensajeErrorNombreMinimo2Caracteres)) {
            document.getElementById('warnings').innerText += MensajeErrorNombreMinimo2Caracteres;
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

    return !errorNombre && !errorNombreMinimo2Caracteres && !errorCorreo1 && !errorCorreo2 && !errorCheck;
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