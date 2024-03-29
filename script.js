let i = 1,
  m = localStorage.length,
  j = 0,k=0;

const DisplayTodo = () => {
  let html = document.createElement("div");
  let btn = document.createElement("button");

  // Changed to make IDs unique
  html.innerHTML = "";
  btn.innerHTML = "✔";
  let value = localStorage.getItem(++j);
  btn.setAttribute("id", `btn${j}`);
  html.setAttribute("id", `todo${j}`);
  html.innerHTML = `${'•'} ${value}`;
  btn.onclick = underline;
  html.appendChild(btn);
  document.body.appendChild(html);

  let todos = document.getElementById(`todo${j}`);
  todos.style.width = "97%";
  todos.style.backgroundColor = "indianred";
  todos.style.color = "white";
  todos.style.borderRadius = "5px";
  todos.style.marginLeft = "15px";
  todos.style.marginTop = "10px";
  todos.style.marginBottom = "10px";

  let btns = document.getElementById(`btn${j}`);
  btns.style.color = "white";
  btns.style.backgroundColor = "darkgrey";
  btns.style.float = "right";
  btns.style.borderRadius = "5px";

  
};

const createTodo = () => {
  let todo = prompt("Enter your TODO");
  if (todo) {
    localStorage.setItem(i++, todo);
    alert("Todo added successfully");
  } else {
    alert("Todo cant be empty");
  }
  DisplayTodo();
};

const underline = (event) => {
  ++k;
  let btnID = event.target.id;
  let todoID = "todo" + btnID.slice(-1);
  let todos = document.getElementById(todoID);
  if(k%2!=0){
  
  todos.style.textDecoration = "line-through";
  }else{
    todos.style.textDecoration = "none";
  }
};

document.getElementById("create").addEventListener("click", createTodo);
