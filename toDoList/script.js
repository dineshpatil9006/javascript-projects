const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
let editTodo = null;

//for adding todo
const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length == 0) {
    alert("You must write something in your todo");
    return false;
  }
  if (addBtn.value === "Edit") {
    editTodo.target.previousElementSibling.innerHTML = inputText;
    addBtn.value = "Add";
    inputBox.value = "";
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";

    saveLocalTodos(inputText);
  }
};

//for uodating tofo (edit/remove)
const updateTodo = (e) => {
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
  }
  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

const saveLocalTodos = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
const getLocalTodos = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      p.innerHTML = todo;
      li.appendChild(p);

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      editBtn.classList.add("btn", "editBtn");
      li.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Remove";
      deleteBtn.classList.add("btn", "deleteBtn");
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
    });
  }
};

document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
