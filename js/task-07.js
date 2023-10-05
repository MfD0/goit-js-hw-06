const inputLine = document.getElementById('font-size-control');
const outputLine = document.getElementById('text');

inputLine.addEventListener('input', () => {

  const fontSize = inputLine.value + 'px';

  outputLine.style.fontSize = fontSize;
});