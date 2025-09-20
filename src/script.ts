const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;


type Todo = {
    id: number;
    text: string;
    done?: boolean;
};

let todos: Todo[] = [];
let donetasks: Todo[] = [];

const rendertasks=():void => {
    todoList.innerHTML = '';
    donelist.innerHTML = '';
    todos.forEach((todo) :void => {
        const li = createtodoelement(todo, false);
        todoList.appendChild(li);
    });

    donetasks.forEach((todo) :void => {
        const li = createtodoelement(todo, true);
        donelist.appendChild(li);
    });
};

const gettodotext = ():string => {
    return todoInput.value.trim();
};

const addtodo = (text:string):void => {
    todos.push({ id: Date.now(), text });
    todoInput.value = '';
    rendertasks();
};

const completetodo = (todo:Todo):void => {
    todos = todos.filter((t) :boolean => t.id !== todo.id);
    donetasks.push(todo);
    rendertasks();
};

const deletetodo = (todo:Todo):void => {
    donetasks = donetasks.filter((t) :boolean => t.id !== todo.id);
    rendertasks();
};

const createtodoelement = (todo:Todo, isDone:boolean):HTMLLIElement => {
    const li = document.createElement('li');
    li.classList.add('render-container__item');
    li.textContent = todo.text;

    const button = document.createElement('button');
    button.classList.add('render-container__item-button');

    if (isDone) {
        button.textContent = '삭제';
        button.style.backgroundColor = '#ff4d4d';
    } else {
        button.textContent = '완료';
        button.style.backgroundColor = '#4CAF50';
    }

    button.addEventListener('click', () :void => {
        if (isDone) {
            deletetodo(todo);
        } else {
            completetodo(todo);
        }
    });

    li.appendChild(button);
    return li;  
};

    

todoform.addEventListener('submit', (event:Event) :void => {
    event.preventDefault();
    const text = gettodotext();
    if (text) {
        addtodo(text);
    }   
});

rendertasks();
