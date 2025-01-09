const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const Link=document.querySelector("a");
const greeting=document.querySelector("#greeting");


const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,username);
  paintGreetings();
}

function paintGreetings(){
  const username=localStorage.getItem(USERNAME_KEY);
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

}


const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){ //만약에 username 없다면 form을 작성할수 있게 보여주라
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}
else{
  paintGreetings();
}