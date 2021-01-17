let primeira = '';
let sinal;
const tela = document.querySelector('input#visor');

function botao(num) {
  tela.value += num;
}

function reseta() {
  tela.value = '';
  primeira = '';
}

function backspace() {
  tela.value = tela.value.substring(0, tela.value.length - 1);
}

function calcule() {
  let equacao;
  if (tela.value != '') {
    if (tela.value.includes('-') && !tela.value.includes('(')) {
      tela.value = `(${tela.value})`;// verifica se tem sinal de - e coloca entre()
    }
    equacao = primeira + tela.value;// salva equação antes do resultado
    tela.value = eval(primeira + tela.value);// calcula
    dados.push(`${equacao}= ${tela.value}`);// adiciona resultado no final da array
    paginar();
    ajustarBotoes();
  }
}

function clearHist() {
  dados = [];// apaga array
  $('#memoria').empty();// apaga na tela
  ajustarBotoes();// arruma botões
  $('#numeracao').text(' 1 - 1 ');// reseta número de páginas
  pagina = 0;// reseta página
}
function apagaSinal() {
  primeira = primeira.substring(0, primeira.length - 1);
}
function verifica() {
  if (primeira.includes('+')) {
    this.apagaSinal();
    primeira += sinal;
  } else if (primeira.includes('-')) {
    this.apagaSinal();
    primeira += sinal;
  } else if (primeira.includes('*')) {
    this.apagaSinal();
    primeira += sinal;
  } else if (primeira.includes('/')) {
    this.apagaSinal();
    primeira += sinal;
  }
}

function soma() {
  if (tela.value == '') {
    sinal = '+';
    this.verifica();
  } else if (tela.value != '') {
    primeira = tela.value += '+';
    tela.value = '';
  }
}

function subtrai() {
  if (tela.value == '') {
    sinal = '-';
    this.verifica();
  } else if (tela.value != '') {
    primeira = tela.value += '-';
    tela.value = '';
  }
}

function multiplca() {
  if (tela.value == '') {
    sinal = '*';
    this.verifica();
  } else if (tela.value != '') {
    primeira = tela.value += '*';
    tela.value = '';
  }
}

function divide() {
  if (tela.value == '') {
    sinal = '/';
    this.verifica();
  } else if (tela.value != '') {
    primeira = tela.value += '/';
    tela.value = '';
  }
}

function troca() {
  if (tela.value == '') {
    tela.value = '-';// add - se a tela tiver limpa
  } else if (tela.value.includes('-')) {
    tela.value = tela.value.substring(1);// remove - antes do primeiro número
  } else {
    tela.value = `-${tela.value}`;// bugou com+= :(  //add - antes do primeiro número
  }
}

var dados = [];// array
const tamanhoPagina = 5;// itens a exibir por página
var pagina = 0;// página atual

function paginar() {
  $('#memoria').empty();// limpa tela
  for (let i = pagina * tamanhoPagina;
    i < dados.length && i < (pagina + 1) * tamanhoPagina;
    i++) { // divide as páginas
    $('#memoria').append(`<td>${dados[i]}</td>`);// adiciona dados do array em tabelas
  }
  $('#numeracao').text(` ${pagina + 1} - ${Math.ceil(dados.length / tamanhoPagina)} `);// adiciona número de paginas
}

function ajustarBotoes() {
  $('#proximo').prop('disabled', dados.length <= tamanhoPagina || pagina >= Math.ceil(dados.length / tamanhoPagina) - 1);// libera o botão avançar
  $('#anterior').prop('disabled', dados.length <= tamanhoPagina || pagina == 0);// libera o botão voltar
}

function proximo() {
  if (pagina < dados.length / tamanhoPagina - 1) {
    pagina++;
    paginar();
    ajustarBotoes();
  }
}
function anterior() {
  if (pagina > 0) {
    pagina--;
    paginar();
    ajustarBotoes();
  }
}
