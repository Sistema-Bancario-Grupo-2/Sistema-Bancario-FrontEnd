const monedaEl_one = document.getElementById('moneda-uno');
const monedaEl_two = document.getElementById('moneda-dos');
const cantidadEl_one = document.getElementById('cantidad-uno');
const cantidadEl_two = document.getElementById('cantidad-dos');
const cambioEl = document.getElementById('cambio');
const tazaEl = document.getElementById('taza');


// Fetch Exchange Rate and Update the DOM
function calculate(){

    const moneda_one = monedaEl_one;
    const moneda_two = monedaEl_two;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

//Event listeners
if (monedaEl_one) {
    monedaEl_one.addEventListener('change', () => {
        calculate
    } );
}

if (cantidadEl_one) {
    cantidadEl_one.addEventListener('input', calculate);  
}

if (monedaEl_two) {
    monedaEl_two.addEventListener('change', calculate);
}

if (cantidadEl_two) {
    cantidadEl_two.addEventListener('input', calculate);
}

if (tazaEl) {
    tazaEl.addEventListener('click', () =>{
        const temp = monedaEl_one.value;
        monedaEl_one.value = monedaEl_two.value;
        monedaEl_two.value = temp;
        calculate();
    } );
}


calculate();