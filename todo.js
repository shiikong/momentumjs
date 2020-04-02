const   todoForm    = document.querySelector(".js-todoForm");
        todoInput   = todoForm.querySelector("input");
        todoList    = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

let todoArr = [];

function deleteTodo(event) {
    const li = event.target.parentNode;
    todoList.removeChild(li);
    // 내방법
    // const targetId = li.id;
    // todoArr.splice(targetId-1, 1);
    // saveTodo();
    const cleanTodos = todoArr.filter(function(todo) {
        return todo.id !== parseInt(li.id); // 클릭한 요소만 빼고 리턴
    });
    todoArr = cleanTodos; // 원래의 배열을 위에서 리턴한 배열과 교체
    saveTodo(); // 저장
}

function saveTodo() {
    const todoStr = JSON.stringify(todoArr);
    localStorage.setItem(TODOS_LS, todoStr);
}

function paintTodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    const span = document.createElement("span");
    const newId = todoArr.length + 1;
    span.innerHTML = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);
    const todoObj = {
        text: text,
        id: newId
    };
    todoArr.push(todoObj);
    saveTodo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadTodos() {
    let todos = localStorage.getItem(TODOS_LS);
    if(todos !== null) {
        todos = JSON.parse(todos);
        // 내방법
        // for(i=0; i<todos.length; i++) {
        //     todoList.innerHTML += `<li id="${todos[i].id}"><span>${todos[i].text}</span><button>X</button></li>`;
        // }
        todos.forEach(function(todo) {
            paintTodo(todo.text);
        });
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();