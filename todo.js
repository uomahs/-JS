// const toDoForm = document.getElementById("todo-form");
// const toDoInput = toDoForm.querySelector("input"); //= const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.getElementById("todo-list");

// const TODOS_KEY= "todos";

// let toDos = []; //const로 하면 매번 초기화될 수 있음(local storage안에 있는 값들에 추가되는게 아니라 덮여써져서 새로고침하면 마지막에 추가한 것만 나올 수 있음)

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteTodo(event) {
//   const li = event.target.parentElement;
//   li.remove();
//   toDos = toDos.filter(toDo=> toDo.id !== parseInt(li.id)); //li.id= string 
//   saveToDos();
// }

// function paintTodo(newTodo) {
//   const li= document.createElement("li");
//   li.id = newTodo.id;
//   const span= document.createElement("span");
//   span.innerText = newTodo.text;
//   const button = document.createElement("button");
//   button.innerText= "❌";
//   button.addEventListener("click", deleteTodo);
//   li.appendChild(span);
//   li.appendChild(button); //span 위에 넣으면 X이모지가 먼저 출력됨
//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event){
//   event.preventDefault();
//   const newTodo = toDoInput.value; //창에 입력된 값 newTodo에 저장
//   toDoInput.value = ""; //enter입력시 비우기
//     // toDoInput.value의 값을 newTodo에 저장하는 것이 먼저이기 때문에 이후에 toDoInput.value 얘를 어떻게 바꾸어도 newTodo에는 영향없음
//   const newTodoObj ={
//     text: newTodo,
//     id: Date.now(),
//   };
//   toDos.push(newTodoObj);
//   paintTodo(newTodo);
//   saveToDos();
// }
  
// toDoForm.addEventListener("submit", handleToDoSubmit); //새로고침막기

// const savedToDos = localStorage.getItem(TODOS_KEY);

// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos; //새로고침 해도 전에 있던 toDo들이 사라지지 않음
//   parsedToDos.forEach(paintTodo);
// }


const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "✔️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}