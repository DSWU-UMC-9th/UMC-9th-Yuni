var todoInput = document.getElementById('todo-input');
var todoform = document.getElementById('todo-form');
var todoList = document.getElementById('todo-list');
var donelist = document.getElementById('done-list');
var todos = [];
var donetasks = [];
var rendertasks = function () {
    todoList.innerHTML = '';
    donelist.innerHTML = '';
    todos.forEach(function (todo) {
        var li = createtodoelement(todo, false);
        todoList.appendChild(li);
    });
    donetasks.forEach(function (todo) {
        var li = createtodoelement(todo, true);
        donelist.appendChild(li);
    });
};
var gettodotext = function () {
    return todoInput.value.trim();
};
var addtodo = function (text) {
    todos.push({ id: Date.now(), text: text });
    todoInput.value = '';
    rendertasks();
};
var completetodo = function (todo) {
    todos = todos.filter(function (t) { return t.id !== todo.id; });
    donetasks.push(todo);
    rendertasks();
};
var deletetodo = function (todo) {
    donetasks = donetasks.filter(function (t) { return t.id !== todo.id; });
    rendertasks();
};
var createtodoelement = function (todo, isDone) {
    var li = document.createElement('li');
    li.classList.add('render-container__item');
    li.textContent = todo.text;
    var button = document.createElement('button');
    button.classList.add('render-container__item-button');
    if (isDone) {
        button.textContent = '삭제';
        button.style.backgroundColor = '#ff4d4d';
    }
    else {
        button.textContent = '완료';
        button.style.backgroundColor = '#4CAF50';
    }
    button.addEventListener('click', function () {
        if (isDone) {
            deletetodo(todo);
        }
        else {
            completetodo(todo);
        }
    });
    li.appendChild(button);
    return li;
};
todoform.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = gettodotext();
    if (text) {
        addtodo(text);
    }
});
rendertasks();
