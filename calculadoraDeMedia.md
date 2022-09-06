# Aula-1---Calculadora-de-Media
Variáveis, strings, console.log, toFixed, operações matemáticas e concatenação.

HTML5

<html>
  <head>
    <title> Imersão Dev Alura - Aula 01</title>
  </head>
  <body>
    <div class="container">
      <h1 class="page-title">
      Calculadora de média</h1>
      <p class="page-subtitle">
      Descubra qual a sua média de nota de todas as provas!
      </p>
      <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-conversor-de-moedas.svg" class="page-logo" alt="">
    </div>
    <a href="https://alura.com.br/" target="_blank">
    <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
    </a>
  </body>
</html>

CSS3

body {
  font-family: "Roboto Mono", monospace;
  min-height: 400px;
  background-image: url("https://caelum-online-public.s3.amazonaws.com/imersao-dev-3/bg.png");
  background-color: rgb(30, 30, 85);
  background-size: 80vh;
  background-position: center bottom;
  background-repeat: no-repeat;
}

.container {
  text-align: center;
  padding: 20px;
  height: 100vh;
}

.page-title {
  color: #ffffff;
  margin: 0 0 5px;
}

.page-subtitle {
  color: #ffffff;
  margin-top: 5px;
}

.page-logo {
  width: 200px;
}

.alura-logo {
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
}
write {
  width: 200px;
}


JAVASCRIPT

var nome = "Maria"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log("Você tirou nota " + notaFixada)


