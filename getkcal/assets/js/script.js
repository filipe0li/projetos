const form = document.querySelector('#form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const age = getInputNumberValue('#age');
  const weight = getInputNumberValue('#weight');
  const height = getInputNumberValue('#height');

  const gender = getSelectedValue('#gender');
  const activityLevel = Number(getSelectedValue('#activity_level'));

  const tmb =  // Taxa Metabólica Basal
    gender === 'female'
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))  // ? ==> mesma coisa que IF
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age)) // : ==> mesma coisa que ELSE
  ;

  const maintenance = tmb * activityLevel;
  const loseHeight = maintenance - 450;
  const gainHeight = maintenance + 450;

  const layout = `
          <h2>Aqui está o resultado:</h2>

        <div class="result-content">
          <ul>
            <li>
              Seu metabolismo basal é de <strong>${(tmb / 1000).toFixed(2)} Kcal</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>${(maintenance / 1000).toFixed(2)} Kcal</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>${(loseHeight / 1000).toFixed(2)} Kcal</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>${(gainHeight / 1000).toFixed(2)} Kcal</strong>.
            </li>
          </ul>
        </div>`;

  document.querySelector('.result-container').innerHTML = layout;
}

function getInputNumberValue(id) {
  return Number(document.querySelector(id).value);
}

function getSelectedValue(id) {
  const select = document.querySelector(id).selectedOptions[0].value;
  // MESMA COISE QUE document.querySelector(id).children[document.querySelector(id).selectedIndex].value
  return select;
}