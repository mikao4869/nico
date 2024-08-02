const logininput = document.querySelector('#login-form input');
const loginbutton = document.querySelector('#login-form button');

function onloginclick() {
  const username = logininput.value;
  console.log(username);
}

loginbutton.addEventListener('click', onloginclick);
