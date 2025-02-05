
const labelEmailPopUp = document.getElementById('labelEmail');
const overlay = document.getElementById('overlay');

const errorCorreo1PopUp = false;
const errorCorreo2PopUp = false;

const MensajeErrorCorreo1PopUp = 'El campo de correo es obligatorio.\n';
const MensajeErrorCorreo2PopUp = 'El correo no tiene un formato válido.\n';






let news = document.getElementById("newsletter")
let closeNewsButton = document.getElementById('close-newsletter');
let newsHidden = true;
let popUpClosed = false;
let correoRegexPopUp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;



document.body.classList.add('no-scroll');

function newsDisplayTrue() {
    news.classList.add('newsletter--visible');
}


function newsTimeAppear(){
    if (newsHidden){
        setTimeout(newsDisplayTrue, 5000);
        newsHidden = false;
        news.style.display = 'block';
        overlay.style.display = 'block';
    }    
}
 

function newsScrollAppear(){
    if (window.scrollY >= (0.25 * document.body.scrollHeight) && popUpClosed === false){
        newsDisplayTrue();
        newsHidden = false;
        news.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeNewsletter(){
     if (!newsHidden){
         news.classList.remove('newsletter--visible');
         newsHidden = true;
         news.style.display = 'none';
         overlay.style.display = 'none';
         popUpClosed = true;
     }
 }


 window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        closeNewsletter();
    }
});


news.addEventListener('click', (event) => {
    event.stopPropagation();
});

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
 

window.addEventListener('click', (event) => {
    if (event.target === overlay) {
      news.style.display = 'none';
      overlay.style.display = 'none';
    }
  });

  

window.addEventListener('scroll',newsScrollAppear);
newsTimeAppear();
closeNewsButton.addEventListener('click',closeNewsletter)


let newsMail = document.getElementById('newsletter-input');
let newsButton = document.getElementById('news-button');
let newsForm = document.getElementById('newsletter-form');

function getNewsData() {
    return {
        'mail': newsMail.value
    }    
}

function validateNews (){
    if (newsMail.value === '') {
        errorCorreo1PopUp = true;
        alert(MensajeErrorCorreo1PopUp);
        redBorder(newsMail)
        redText(labelEmailPopUp)
    } else if (!correoRegexPopUp.test(newsMail.value)) {
        errorCorreo2PopUp = true;
        alert(MensajeErrorCorreo2PopUp);
        redBorder(newsMail)
        redText(labelEmailPopUp)
    } else {
        errorCorreo1PopUp = false;
        errorCorreo2PopUp = false;
        document.getElementById('warnings').innerText = '';
        correctBorder(newsMail)
        correctText(labelEmailPopUp)
        alert("El formulario se ha enviado correctamente.")
        news.style.display = 'none';
        overlay.style.display = 'none';
    }
}

function submitNewsletter(event) {
    event.preventDefault();
    const newsValid = validateNews();
    if (newsValid){
        correctBorder(newsMail)
        send(getNewsData());
        closeNewsletter();
    }
}
newsForm.addEventListener('submit',submitNewsletter);