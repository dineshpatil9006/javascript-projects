const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length == 0) {
    alert("You must write something in your todo");
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Remove";
    deleteBtn.classList.add('btn', 'deleteBtn');
    li.appendChild(deleteBtn);
    
    const editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";
    editBtn.classList.add('btn', 'editBtn');
    li.appendChild(editBtn);

    todoList.appendChild(li);
    inputBox.value = "";
  }
};
addBtn.addEventListener("click", addTodo);
