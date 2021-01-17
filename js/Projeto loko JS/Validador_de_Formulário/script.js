const form = document.querySelector('.b7validator');

let B7Validator = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll('input');

    B7Validator.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = B7Validator.checkInput(input);
      if (check !== true) {
        send = false;
        B7Validator.showError(input, check);
      }
    }

    if (send) {
      form.submit();
    }
  },

  checkInput: (input) => {
    let rules = input.getAttribute('data-rules');
    if (rules !== null) {
      rules = rules.split('|'); // separador da regra
      for (let k in rules) {
        let rDetails = rules[k].split('='); // separador da regra
        switch (rDetails[0]) {
          case 'required':
            if (input.value == '') {
              return 'Campo Obrigatório'
            }
            break;
          case 'min':
            if (input.value.length < rDetails[1]) {
              return 'Nome deve possuir no minimo ' + rDetails[1] + ' caracteres';
            }

            break;
          case 'email':
            if (input.value !== '') {
              let regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
              if (!regex.test(input.value.toLowerCase())) {
                return 'E-mail inválido!'
              }
            }
          break;
        }
      }
    }

    return true;
  },

  showError: (input, error) => {
    input.style.borderColor = 'red';  // adiciona borda vermelha

    let errorElement = document.createElement('div'); // cria div para exibir erro
    errorElement.classList.add('error');
    errorElement.innerHTML = error;

    input.parentElement.insertBefore(errorElement, input.elementSibling);  //inserire erro após input
  },

  clearErrors: () => {
    let inputs = form.querySelectorAll('input');  // remove borda erro
    for (let i = 0; i < inputs.length; i ++) {
      inputs[i].style = '';
    }

    let errorElements = document.querySelectorAll('.error');  // remove div erro
    for (let i = 0; i < errorElements.length; i ++) {
      errorElements[i].remove();
    }
  }
};

form.addEventListener('submit', B7Validator.handleSubmit)
