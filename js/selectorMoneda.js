
let select = document.getElementById('currencySelector');
let simbolo = document.getElementById('simbolo');
let simbolo1 = document.getElementById('simbolo1');
let simbolo2 = document.getElementById('simbolo2');
let professionalPrice = document.getElementById('precioProfessional');
let professionalPriceValue = Number(document.getElementById('precioProfessional').textContent);
let premiumPrice = document.getElementById('precioPremium');
let premiumPriceValue = Number(document.getElementById('precioPremium').textContent);
const API_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';


function formatearNumero(num) {
    const numFormateado = num.toFixed(1);
    
    if (numFormateado.endsWith('.0')) {
      return numFormateado.slice(0, -2);
    }
    
    return numFormateado;
  }

async function currency(){
    const res = await fetch(API_URL);
    const data = await res.json();
    
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
        professionalPrice.textContent = formatearNumero(professionalPriceValue * euros[select.value]); 
        premiumPrice.textContent = formatearNumero(premiumPriceValue * euros[select.value]); 


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