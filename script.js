// criar 3 variaveis para executar as operacoes de + - / e *
let operandoa;
let operandob;
let operacao;

function init() {
  //colocar a função no body para carregar as variaveis
  let resultado = document.getElementById("resultado");
  let reset = document.getElementById("reset");
  let soma = document.getElementById("soma");
  let subtracao = document.getElementById("subtracao");
  let multiplicacao = document.getElementById("multiplicacao");
  let divisao = document.getElementById("divisao");
  let igual = document.getElementById("igual");
  let um = document.getElementById("um");
  let dois = document.getElementById("dois");
  let tres = document.getElementById("tres");
  let quatro = document.getElementById("quatro");
  let cinco = document.getElementById("cinco");
  let seis = document.getElementById("seis");
  let sete = document.getElementById("sete");
  let oito = document.getElementById("oito");
  let nove = document.getElementById("nove");
  let zero = document.getElementById("zero");
}

um.onclick = function (e) {
  resultado.textContent = resultado.textContent + "1";
};
dois.onclick = function (e) {
  resultado.textContent = resultado.textContent + "2";
};
tres.onclick = function (e) {
  resultado.textContent = resultado.textContent + "3";
};
quatro.onclick = function (e) {
  resultado.textContent = resultado.textContent + "4";
};
cinco.onclick = function (e) {
  resultado.textContent = resultado.textContent + "5";
};
seis.onclick = function (e) {
  resultado.textContent = resultado.textContent + "6";
};
sete.onclick = function (e) {
  resultado.textContent = resultado.textContent + "7";
};
oito.onclick = function (e) {
  resultado.textContent = resultado.textContent + "8";
};
nove.onclick = function (e) {
  resultado.textContent = resultado.textContent + "9";
};
zero.onclick = function (e) {
  resultado.textContent = resultado.textContent + "0";
};
reset.onclick = function (e) {
  resetar();
};

soma.onclick = function (e) {
  operandoa = resultado.textContent;
  operacao = "+";
  limpar();
};
subtracao.onclick = function (e) {
  operandoa = resultado.textContent;
  operacao = "-";
  limpar();
};
divisao.onclick = function (e) {
  operandoa = resultado.textContent;
  operacao = "/";
  limpar();
};
multiplicacao.onclick = function (e) {
  operandoa = resultado.textContent;
  operacao = "*";
  limpar();
};
igual.onclick = function (e) {
  operandob = resultado.textContent;
  resolver();
};
function limpar() {
  resultado.textContent = "";
}
function resetar() {
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacao = "";
}
function resolver() {
  var res = 0;
  switch (operacao) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetar();
  resultado.textContent = res;
}
