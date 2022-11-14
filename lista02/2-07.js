/* Desenvolver um algoritmo que efetue a soma de todos os numeros impares que sao multiplos de tres e que se encontram no conjunto dos numeros de 1 ate 500 */

let numerosImpares = []
let soma = 0

for (let i = 0; i <= 500; i++) {
  if (i % 2 != 0) {
    numerosImpares.push(i)
  }
}

for (let index = 0; index < numerosImpares.length; index++) {
  if (numerosImpares[index] % 3 == 0) {
    soma += numerosImpares[index]
  }
}
console.log({ soma })
