/*Usando Do...while, escrever um algoritmo que gera e escreve os numeros impares entre 100 e 200*/

var numero = 100
var listaImpares = []

do {
  var resto = numero % 2
  if (resto != 0) {
    listaImpares.push(numero)
  }
  numero++
} while (numero < 200)
console.log(listaImpares)
