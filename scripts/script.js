


function Conversor() {
   let valor = document.querySelector('#valor').value
   let moedas = document.querySelector('#moedas').value
   let res = document.querySelector('#res')
   
   switch (moedas) {

      case 'Dólar':
         res.value = res.innerHTML = `${valor * 4.98}`
      case 'Euro':
         res.value = res.innerHTML = `${valor * 5.36}`
      case 'Libra':
         res.value = res.innerHTML = `${valor * 6.27}`
      case 'Iene':
         res.value = res.innerHTML = `${valor * 0.034}`
         break;
   }

   console.log(res)
   console.log(moedas)
}


function altPlace(){
   let res = document.querySelector("#res")
   let moedas = document.querySelector('#moedas').value
   res.setAttribute("placeholder", `${moedas}`);
   console.log(moedas)
}