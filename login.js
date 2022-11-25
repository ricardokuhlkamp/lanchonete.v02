const btnEntrar = document.querySelector('#logEnter');
console.log(btnEntrar)
const emailInput = document.getElementById('logEmail');
const passwordInput = document.getElementById('logPassword');

function logar(event) {
  event.preventDefault();
  const textInputEmail = emailInput.value;
  console.log(textInputEmail)
  const emailValid = 'admin@admin.com';
  const textInputPassword = passwordInput.value;
  const passwordValid = '1234';
  if ((textInputEmail === emailValid) && (textInputPassword === passwordValid)) {
    emailInput.value = '';
    passwordInput.value = '';
    location.href = "lista.php";
  } else {
    alert('Email ou senha inválidos.');
    emailInput.value = '';
    passwordInput.value = '';
  }
}

// -Envento criado acionar a validação da senho e do email
btnEntrar.addEventListener('click', logar);

