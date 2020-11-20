window.addEventListener('load', main)

const todoList = [{
    title: "Handla mat",
    date: new Date()
}, {
    title: "Äta",
    date: new Date()
}
]


function main() {
    //addEventListeners();
    loadTodos();
}

//function addEventListeners() {}

function loadTodos() {
    renderTodos();

}

function renderTodos() {
    const todosContainer = document.getElementById("todo-container");
    todosContainer.innerHTML = "";

    for(const todo of todoList) {
        const listItem = document.createElement("li");
        listItem.innerHTML = todo.title;
        todosContainer.append(listItem);
    }
}