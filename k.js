console.log('\n\n\n\n\n\n')
const lista_inicial = [67, 58, 33, 29, 12, 90, 5, 1, 100, 6, 10, 18]
const lista_experada = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function insertionSort(inputArr) {
  for (let i = 1; i < inputArr.length; i++) {
    console.log('Inicio inputArr => ' + inputArr)

    let current = inputArr[i] //3

    console.log('i - inputArr[' + i + '] => ' + current)

    let j = i - 1 //0
    while (j > -1 && current < inputArr[j]) {
      console.log('j - inputArr[' + j + '] => ' + inputArr[j])
      inputArr[j + 1] = inputArr[j]
      j--
    }

    inputArr[j + 1] = current

    console.log('Final inputArr => ' + inputArr)
    console.log('-------------------\n')
  }

  return inputArr
}

const lista_resultado = insertionSort(lista_inicial)

const sao_iguais = lista_experada.toString() === lista_resultado.toString()
console.log('Lista inicial: ' + lista_inicial)
console.log('Lista resultado: ' + lista_resultado)
console.log('As listas estão iguais: ' + sao_iguais)
