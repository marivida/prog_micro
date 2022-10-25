const horasTrabalhadasMes = 200
const salarioHora = 18
const horasMesCompleto = 160
const horaExtra = horasTrabalhadasMes - horasMesCompleto
const valorHoraExtra = salarioHora * 1.5
var salarioTotal

if (horasTrabalhadasMes > horasMesCompleto) {
  salarioTotal = horaExtra * valorHoraExtra + horasMesCompleto * salarioHora
  console.log('Você fez ' + horaExtra + ' horas extras')
  console.log('Seu salário total é de R$' + salarioTotal)
} else {
  salarioTotal = horasTrabalhadasMes * salarioHora
  console.log('Seu salário total é de R$' + salarioTotal)
}
