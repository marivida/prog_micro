var anoNascimento = 1996
var anoAtual = 2022

/*
PEGA DATA ATUAL DO SISTEMA
var data = new Date()
PEGA O ANO DA DATA ATUAL
var anoAtual = data.getFullYear()*/

var idadeAnos = anoAtual - anoNascimento
var idadeDias = idadeAnos * 365

console.log('Sua idade é ' + idadeAnos + ' anos')
console.log('Sua idade é ' + idadeDias + ' dias')
