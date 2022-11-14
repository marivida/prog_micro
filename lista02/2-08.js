/* Crie um vetor com a altura de 15 pessoas. Crie um algoritmo que calcule e mostre:
a. A menor altura do grupo;
b. A maior altura do grupo. */

const alturas = [
  168, 159, 189, 155, 174, 205, 169, 153, 147, 164, 165, 178, 139, 157, 183
]
let menorAltura = 0
let maiorAltura = 0

for (let i = 0; i < alturas.length; i++) {
  const element = alturas[i]
  if (element > maiorAltura) {
    maiorAltura = element
  }

  if (menorAltura == 0) {
    menorAltura = element
  } else if (element < menorAltura) {
    menorAltura = element
  }
}

console.log({ menorAltura, maiorAltura })
