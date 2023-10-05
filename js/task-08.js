
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Заповніть поля форми !!!');
    return;
  }

  const Data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(Data);

  loginForm.reset();
})