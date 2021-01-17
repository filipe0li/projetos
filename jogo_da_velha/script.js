const tic_tac_toe = {
  board: ['', '', '', '', '', '', '', '', ''],
  simbols: {
    options: ['X', 'O'],
    turn_index: 0,  // Jogador

    change: function () {
      this.turn_index = (this.turn_index === 0 ? 1 : 0);  // Muda jogador
    },
  },
  h2: document.querySelector('h2'),  // Pega hs do document
  gameover: false,  // Indica fim de jogo

  draw: function () { // Cria tabuleiro
    const container_element = document.querySelector('.game');  // Pega DIV.game do documento
    let content = ''; // limpa tela

    for (i in this.board) { // Enquanto tiver posição no array faça
      content += `<div class="" onclick="tic_tac_toe.make_play(${i})">${this.board[i]}</div>`; // cria variavel contendo tabuleiro conforme posição e valor do array
    };
    container_element.innerHTML = content; //escreve na tela
  },

  winning_sequence: [ // Sequencias que vencem (regra)
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  make_play: function(position) { // Quando clicar na div no document envia position (0-8)
    if (this.gameover) return false;  // Se fim de jogo true saia

    if (this.board[position] === '') {  // Se posição do array estivel limpa faça

      this.board[position] = this.simbols.options[this.simbols.turn_index]; // Imprime no Array conforme o jogador (se for jogador 0=> options[0=X] )
      this.draw();  // Com array alterado imprime tabuleiro novamente
      let winning_sequence_index = this.check_winnig_sequences(this.simbols.options[this.simbols.turn_index]);  // Envia para cheacgem jogador e simbulo

      if (winning_sequence_index >= 0) {  // Se o resultado for uma posição da Sequencias que vencem (regra)
        this.game_is_over();  // Termine o jogo
        this.h2.innerText = `${this.board[position]} é o ganhador!`;  // Imprime Vitória

        for (i in this.winning_sequence[winning_sequence_index]) {
          let teste = (this.winning_sequence[winning_sequence_index][i]) + 1;  // Imprime sequncia ganhadora
            document.querySelector('.game > div:nth-child(' + teste + ')').classList.add('ganhador'); // Adiciona class nas divs corretas
        }

      } else if (!this.board.includes('')) {  // Verifica se todas jogadas foram feitas
        this.game_is_over();  // Termine o jogo
        this.h2.innerText = `Empatou!`; // Imprime empate
      } else {
        this.simbols.change();  // Troca jogador
      };
    };
  },

  check_winnig_sequences: function (simbol) { // Recebe simbulo do jogador (ex X)
    for (i in this.winning_sequence) {  // Verifique todas posições ganhadoras
      if (this.board[this.winning_sequence[i][0]] === simbol &&
        this.board[this.winning_sequence[i][1]] === simbol &&
        this.board[this.winning_sequence[i][2]] === simbol) { // O simbulo do jogador tem q estar nas 3 posições da regra
        return i; // Se estiver retorna número da sequencia ganhadora
      };
    };
    return -1;  // Se não tiver retorna número diferente e menor q zero para continuar o jogo
  },

  game_is_over: function () { // Indica fim de jogo
    this.gameover = true; // Muda estado para indicar fim
    console.log('GAME OVER');
  },

  restart: function() {
    this.board.fill('');  // Limpa Array
    this.draw();  // Limpa tabuleiro
    this.gameover = false;  // Restart
    this.h2.innerHTML = 'Que os jogos começem!';
  },

};

tic_tac_toe.draw(); // 1º start