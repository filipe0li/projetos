const fields = document.querySelectorAll('[required]'); // Procure todas as tags que possuem a atributo required.

document.querySelector('form').addEventListener('submit', event => {  // Seleciona o formulário e lê a evento enviar.
  console.log('lido');
  event.preventDefault(); // Não deixa enviar (ação padrão do botão submit)
});

for (field of fields) { // Para cada field (tag com atributo required) que estiver dentro de fields (todas as tags com atributo required), faça.
  field.addEventListener('invalid', event => {  // event => passa valor para dentro da função.
    event.preventDefault(); // Remove a msg de erro que por padrão o navegdor exbe.
    customValidation(event);
  });  // Esta enviando event ('invalid').
  field.addEventListener('blur', customValidation); // Faz a verifiacção de erros toda vez que sair (:focus do css) do input.
}

function validateField(field) {
  function verifyErrors() {  // Lógica para verificar se existem erros
    let foundError = false;

    for (let error in field.validity) { // for in vai pegar cada propriedade do objeto e analizar (cada propriedade vai virar a let error e ser feito o teste).
      if (field.validity[error] && !field.validity.valid) { // Se tiver erro faça e se não for valid==> (imput sem erros / valid é quando ta tudo certo).
        foundError = error;
      }
    }
    return foundError;
  };

  function customMessage(typeError) {
    const messages = {  // Só serve se tiver input do type text ou email, se for usar outro add
      text: {
        valueMissing: 'Nome é Obrigatório!'
      },
      email: {
        valueMissing: 'E-Mail é Obrigatório!',
        typeMismatch: 'E-Mail Inválido!',
      }
    };
    return messages[field.type][typeError];
  }

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector('span.error'); // parentNode é a div pai de field que é o input. igual a document.querySelector('span.error').
    if (message) {
    spanError.classList.add('active');  // adiciona class active, deixa vemelho.
    spanError.innerHTML = message; // Escreve no campo erro.
    } else {
      spanError.classList.remove('active'); // Remove frufru.
      spanError.innerHTML = ''; // Limpa tela.
    }
  };

  return function () { // estou jogando a função para ser usada fora de validateField().
    const error = verifyErrors();
    if (error) { // Se tiver erro faça.
      const message = customMessage(error);
      field.style.borderColor = 'red';  // Adiciona borda vermelha ao input.
      setCustomMessage(message);
    } else {
      field.style.borderColor = 'green';
      setCustomMessage(); // se não passar message = ''.
    } 
  };
};

function customValidation(event) {
  const field = event.target; // event.target é uma opção que está dentro do objeto event (é o proprio INPUT).
  const validation = validateField(field);  // Pega return de validateField().
  validation(); // Executa função
};