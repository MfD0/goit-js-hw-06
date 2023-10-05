function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const ChangeBGColorBotton = document.querySelector('.change-color');
const NameBGColorLine = document.querySelector('.color');

ChangeBGColorBotton.addEventListener('click', () => {
  
  const NewColor = getRandomHexColor();
  const NewColorForBotton = getRandomHexColor();

  ChangeBGColorBotton.style.backgroundColor = NewColorForBotton;
  NameBGColorLine.textContent = NewColor;
  body.style.backgroundColor = NewColor;
})
