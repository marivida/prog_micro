/* Desenvolver um algoritmo com um vetor de numero nao determinado de valores e calcule e escreva a media aritmetica dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos */

var valores = []
var soma = 0
var media = 0
var contadorPositivo = 0
var contadorNegativo = 0
var percentualPositivo = 0
var percentualNegativo = 0

valores.push(1, 2, 3, 10, -4)

for (let i = 0; i < valores.length; i++) {
  soma += valores[i]

  if (valores[i] < 0) {
    contadorNegativo++
  }

  if (valores[i] > 0) {
    contadorPositivo++
  }
}
media = soma / valores.length
percentualNegativo = (contadorNegativo / valores.length) * 100
percentualPositivo = (contadorPositivo / valores.length) * 100
console.log({
  soma,
  media,
  contadorNegativo,
  contadorPositivo,
  percentualNegativo,
  percentualPositivo
})
