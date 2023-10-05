const inputName = document.querySelector('input#name-input')

const outputName = document.querySelector('#name-output')

inputName.addEventListener('input', () => {
  const inputValue = inputName.value;

  outputName.textContent = inputValue === '' ? "Anonimus" : inputValue;
});