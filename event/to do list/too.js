const toDoForm = document.getElementById('todo-form'); // 'todo-form' ID의 폼 요소 가져오기
const toDoInput = toDoForm.querySelector('input'); // 'toDoForm'을 사용하여 입력 필드 선택
const toDoList = document.getElementById('todo-list');
const TODOS_KEY = 'todos';
const toDos = []; // 'toDos'로 일관되게 사용

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement; // 'event.target'의 부모 요소인 'li'를 가져옴
  li.remove(); // 'li' 요소 삭제
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = 'X';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 입력 필드의 값 저장
  toDoInput.value = '';
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveToDos();
}

toDoForm.addEventListener('submit', handleTodoSubmit);
d
function sayHello() {
  console.log('hello');
}

const saveToDos = localStorage.getItem('TODOS_KEY');
console.log();
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(saveToDos);
  parsedToDos.forEach(sayHellO);
}
