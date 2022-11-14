/*Crie 2 variaveis: valor inicial A e razao R. Imprima uma sequncia PG contendo 10 valores*/

let valorInicial = 50
const razao = 2
let progressao = []

if (valorInicial == 0) {
  valorInicial = 1
}
let proximoNumero = valorInicial

// progressao[0] = valorInicial
progressao.push(valorInicial)

for (let i = 0; i < 10; i++) {
  proximoNumero *= razao
  //progressao[i + 1] = proximoNumero
  progressao.push(proximoNumero)
}
console.log(progressao)
