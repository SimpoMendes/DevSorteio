function generatorNumber(){

 const resultNumber= document.querySelector(".number-sort")   
 
const min =  Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)

const result = Math.floor(Math.random() * (max - min) + min);

if (min > max)

    alert("Valor inválido, numero Inicial maoir que numero final")



resultNumber.innerHTML = ("O numero sorteado é: " + result)



}