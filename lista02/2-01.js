/*Escreva um algoritmo que leia um valor inicial A e imprima a sequencia de valores do calculo de A! e o seu resultado. Ex: 5! = 5 x 4 x 3 x 2 x 1 = 120
O valor maximo a ser calculado deve ser 11.*/

var numero = 11
var fatorial = 1
var resultado = []

if (numero > 11) {
  console.log('Numero não permitido')
  return
}

for (let i = 1; i <= numero; i++) {
  fatorial *= i
  resultado.push(i)
}

console.log(
  numero + '! = ' + resultado.reverse().join(' X ') + ' = ' + fatorial
)
