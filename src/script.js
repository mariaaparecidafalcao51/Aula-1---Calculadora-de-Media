var nome = "Bruno" // Variavel Nome
var notaDoPrimeiroBimestre = 9 // Primeira nota do Bimestre.
var notaDoSegundoBimestre = 7 // Segunda nota do Bimestre.
var notaDoTerceiroBimestre = 4 // Terceira nota do Bimestre.
var notaDoQuartoBimestre = 2 // Quarta nota do Bimestre.
  
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4 // nota final de todas as notas somadas por 4

var notaFixada = notaFinal.toFixed(1) // para usar decimais

console.log("Bem vindo " + nome)
console.log("Você tirou nota " + notaFixada )
document.write('Aprovado')

// isso é um comentário

// Revisão 
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação.