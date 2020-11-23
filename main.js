window.addEventListener('load', main)

console.log(new Date)
const todoList = [{
    title: "Nils fyller år",
    date: "2020-11-25"
}, {
    title: "Handla",
    date: "2020-11-28"
}
]


function main() {
    addEventListeners();
    renderTodos();
}

function addEventListeners() {
    const submitButton = document.getElementById("submit-button")
    submitButton.onclick = addNewTodo;
}

function renderTodos() {
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = "";

    for(const todo of todoList) {
        const listItem = document.createElement("li");
        listItem.innerHTML = todo.date + ": " + todo.title;
        todoContainer.append(listItem);
    }
}

function addNewTodo() {
    const todoTitle = document.getElementById("todo-input").value;
    const todoDate = document.getElementById("date-input").value;

    let newTodo = {title: todoTitle, date: todoDate};

    todoList.push(newTodo);
    console.log(todoList)
    renderTodos();    
}