const fields = document.querySelectorAll('[required]'); // Procure todas as tags que possuem a atributo required.

for (field of fields) { // Para cada field (tag com atributo required) que estiver dentro de fields (todas as tags com atributo required), faça.
  field.addEventListener('invalid', customValidation);  // Esta enviando event ('invalid').
}
// MESMA COISA QUE ==
// for (let i = 0; i <= 1; i++) { // i seria o número de tags com atributo required
//   fields[i].addEventListener('invalid', event => {
//     console.log('BO');
//   });
// }

function customValidation(event) {

  const field = event.target; // event.target é uma opção que está dentro do objeto event (é o proprio INPUT).

  function verifyErrors() {  // Lógica para verificar se existem erros
    let foundError = false;

    for (let error in field.validity) { // for in vai pegar cada propriedade do objeto e analizar (cada propriedade vai virar a let error e ser feito o teste).
      
      if (error != 'customError' && field.validity[error]) { // Se não for customError e se tem outro erro como TREU faça.
        foundError = error;
      }
    }
    return foundError;
  }

  const error = verifyErrors();
  console.log('==>', error);

  if (error) {
    field.setCustomValidity('Esse campo é obrigatório!'); // Troca a msg de erro padrão  do INPUT.
  } else {
    field.setCustomValidity(''); // Volta a msg de padrão  do INPUT.
  }

  
}





























document.querySelector('form').addEventListener('submit', event => {  // Seleciona o formulário e lê a evento enviar.
  console.log('lido');
  event.preventDefault(); // Não deixa enviar (ação padrão do botão submit)
});