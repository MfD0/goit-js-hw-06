const inputLine = document.getElementById('validation-input');
const dataLength = parseInt(inputLine.getAttribute('data-length'));


inputLine.addEventListener('blur', () => {
  
  const inputValue = inputLine.value;

  if (inputValue.length === dataLength) {
    inputLine.classList.remove('invalid');
    inputLine.classList.add('valid');
  }
  else {
    inputLine.classList.remove('valid');
    inputLine.classList.add('invalid');
  }
});