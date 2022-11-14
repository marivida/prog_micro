/*Crie 2 variaveis: valor inicial A e uma razao R. Imprima uma sequencia em PA contendo 10 valores */

const valorInicial = 0
const razao = 2
let proximoNumero = valorInicial
let progressao = []

// progressao[0] = valorInicial
progressao.push(valorInicial)

for (let i = 0; i < 10; i++) {
  proximoNumero += razao
  //progressao[i + 1] = proximoNumero
  progressao.push(proximoNumero)
}
console.log(progressao)
