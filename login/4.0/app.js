const logininput = document.querySelector('#login-form input');
const loginbutton = document.querySelector('#login-form button');

function onloginclick() {
  console.log('hello', logininput.value);
}

loginbutton.addEventListener('click', onloginclick);
