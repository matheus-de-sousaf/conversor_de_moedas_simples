
function Conversor() {
   let valor = document.querySelector('#valor').value
   let moedas = document.querySelector('#moedas').value
   let res = document.querySelector('#res')
   res.value = ``

   switch (moedas) {

      case 'Dólar':
         res.value = res.innerHTML = `${valor / 4.98}`
         break;
      case 'Euro':
         res.value = res.innerHTML = `${valor / 5.36}`
         break;
      case 'Libra':
         res.value = res.innerHTML = `${valor / 6.27}`
         break;
      case 'Iene':
         res.value = res.innerHTML = `${valor / 0.034}`
         break;
   }
}

function altPlace(){
   let res = document.querySelector("#res")
   let moedas = document.querySelector('#moedas').value
   res.setAttribute("placeholder", `${moedas}`);

   res.value = res.innerHTML = ``
}