
import { useTodo } from "../context/TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {

    const {todos, doneTodos, completeTodo, deleteTodo} = useTodo();
    
    return (
    <div className="todo-container">
        <h1 className="todo-container__header">Yujin Todo</h1>
        <TodoForm/>
        <div className="render-container">
            <TodoList
            title="할 일" 
            todos={todos} 
            buttonLabel='완료' 
            buttoncolor='#28a745' 
            onClick={completeTodo}/>

            <TodoList 
            title="완료한 일" 
            todos={doneTodos} 
            buttonLabel='삭제' 
            buttoncolor='#dc3545' 
            onClick={deleteTodo}/>
        </div>
    </div>
    );
};

export default Todo;