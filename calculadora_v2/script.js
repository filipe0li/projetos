const visorSalvo = document.querySelector('#valorSalvo');

let sValor = '0';
let novoNumero = true; // E O PRIMEIRO NÚMERO?
let valorAnterior = 0; // VALOR GUARDADO PARA OPERAÇÃO
let operacaoPendente = null;  // OPERÇÃO ACUMULADA

// ATUALIZA VALOR DE sValor NA TELA
const atualiza = () => {
  const visor = document.querySelector('#visor');
  let [parteInteira, parteDecimal] = sValor.split(',');
  let v = '';
  c = 0;
  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (++c > 3) {
      v = '.' + v;
      c = 1;
    }
    v = parteInteira[i] + v;
  };
  v = v + (parteDecimal ? ',' + parteDecimal : '');
  visor.value = v;  // VALOR DE v É INSERIDO NA TELA
}

// PRIMEIRO START
atualiza()

// ADICINA DIGITO A VAIRAVEL sValor
const digito = (n) => {
  novoNumero ? sValor = n : sValor += n;
  novoNumero = false;
  atualiza();
}

// ADICINA VIRGULA NA TELA
const virgula = (n) => {
  if (novoNumero && n == ",") {
    sValor = '0,'
  } else if (n == "," && !sValor.includes(',')) { // NÃO PODE CONTER VIRGULA NA TELA
    sValor += n;
  }
  novoNumero = false;
  atualiza();
}

// LIMPA TELA
const limpa = () => {
  sValor = 0;
  novoNumero = true;
  valorAnterior = 0;
  operacaoPendente = null;
  atualiza();
};

// REMOVE ÚLTIMO DIGITO
const backSpace = () => {
  sValor = sValor.substring(0, sValor.length - 1); // REMOVE ÚLTIMO DIGITO
  if (sValor.length == 0) { // MAMTEM 0 NA TELA
    sValor = '0';
    novoNumero = true;
  }
  atualiza();
}

// CONVERTE PARA NÚMERO
const valorAtual = () => {
  sValor = parseFloat(sValor.replace(',', '.'))  // CONVERTE PARA NÚMERO E SUBSTITUI VIRGULA PO PONTO
}

// TRATAMENTO
const operador = (op) => {
  calcula();
  valorAnterior = valorAtual();
  operacaoPendente = op;
  novoNumero = true;
}

const calcula = () => {
  if (operacaoPendente != null) {
    let resultado;
    switch (operacaoPendente) {
      case '+': resultado = valorAnterior + valorAtual();
        break;
      case '-': resultado = valorAnterior - valorAtual();
        break;
      case '*': resultado = valorAnterior * valorAtual();
        break;
      case '/': resultado = valorAnterior / valorAtual();
        break;
    }
    sValor = resultado.toString().replace('.', ',');
  }
  novoNumero = true;
  operacaoPendente = null;
  valorAnterior = 0;
  atualiza()
}