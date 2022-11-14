/*Escrever um algoritmo que tenha um vetor de quantidade desconhecida de numeros e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50, [51-75] e [76-100]*/

let vetor = []
let contador0a25 = 0
let contador26a50 = 0
let contador51a75 = 0
let contador76a100 = 0
let contadorNaoPermitido = 0

vetor.push(5, 9, 77, 63, 87, 258, 32, 46)

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] >= 0 && vetor[i] <= 25) {
    contador0a25++
  } else if (vetor[i] > 25 && vetor[i] <= 50) {
    contador26a50++
  } else if (vetor[i] > 50 && vetor[i] <= 75) {
    contador51a75++
  } else if (vetor[i] > 75 && vetor[i] <= 100) {
    contador76a100++
  } else {
    contadorNaoPermitido++
  }
}
console.log('Quantidade de numeros do intervalo 0 a 25: ' + contador0a25)
console.log('Quantidade de numeros do intervalo 26 a 50: ' + contador26a50)
console.log('Quantidade de numeros do intervalo 51 a 75: ' + contador51a75)
console.log('Quantidade de numeros do intervalo 76 a 100: ' + contador76a100)
