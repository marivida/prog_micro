// O algoritmo deverá printar na tela quantas vezes foi executado
// O algoritmo deverá exibir o vetor antes da ordenação e depois da ordenação
// O algoritmo deverá ser feito com alguma estrutura de repetição (não poderá usar o método SORT)

var a = [67, 58, 33, 29, 12, 90, 5, 1, 100, 6, 10, 18]

function ordenar(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }

    if (lowest !== i) {
      ;[array[i], array[lowest]] = [array[lowest], array[i]]
      console.log('Vetor neste passo: ' + array)
    }
  }
}
console.log('\n')
console.log('Vetor original: ' + a)
console.log('\n')
console.log(ordenar(a))
console.log('\n')
console.log('Vetor ordenado: ' + a)
