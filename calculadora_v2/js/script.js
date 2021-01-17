const visorSalvo = document.querySelector('#valorSalvo');

let sValor = '0';
let novoNumero = true; // É o primeiro número?
let valorAnterior = 0; // Valor guardado para operação.
let operacaoPendente = null;  // Operção acumulada.

// Atualiza valor de svalor na tela
const atualiza = (virgula = '') => {  // seguraça para caso de virgula atualizar na hora.
  const visor = document.querySelector('#visor');
  let [parteInteira, parteDecimal] = sValor.split(','); // A virgula será o separador e sValor vira uma array com 2 posições.
  let v = '';
  let c = 0;
  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (++c > 3) { // se já tiver andado 3 casas
      v = '.' + v;
      c = 1;
    }
    v = parteInteira[i] + v;
  };
  v = v + (parteDecimal ? ',' + parteDecimal : ''); // Se parteDecimal for diferente de 0 (tem contúdo) adicione virgula.
  visor.value = v + (!v.includes(',') ? virgula : '');  // Valor de v é inserido na tela/ Se v não conter ',' e insere virgula(padrão é ''), só deixa ter uma virgula.
}

// primeiro start
atualiza()

// adicina digito a vairavel sValor
const digito = (n) => {
  novoNumero ? sValor = n : sValor += n;
  novoNumero = false;
  atualiza();
}

// Adicina virgula na tela
const virgula = (n) => {
  if (novoNumero && n == ",") {
    sValor = '0,'
  } else if (n == "," && !sValor.includes(',')) { // Não pode conter virgula na tela.
    sValor += n;
  }
  novoNumero = false;
  atualiza(',');
}

// Reset geral
const limpa = () => {
  sValor = 0;
  novoNumero = true;
  valorAnterior = 0;
  operacaoPendente = null;
  atualiza();
};

// Remove último digito
const backSpace = () => {
  sValor = sValor.substring(0, sValor.length - 1); // Remove último digito
  if (sValor.length == 0) { // Mamtem 0 na tela
    sValor = '0';
    novoNumero = true;
  }
  atualiza();
}

// Converte para número
const valorAtual = () => {
  sValor = sValor.replace(',', '.')  // Converte para número e substitui virgula po ponto
  return sValor;
}

// Tratamento
const operador = (op) => {
  calcula();
  valorAnterior = valorAtual();
  operacaoPendente = op;
  novoNumero = true;
}

const calcula = () => {
  if (operacaoPendente != null) {
    let resultado = eval(valorAnterior + operacaoPendente + valorAtual());
    valorAnterior = 0;
    sValor = resultado.toString().replace('.', ',');
  }
  novoNumero = true;
  operacaoPendente = null;
  atualiza()
}