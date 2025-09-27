import type { TTodo } from "../types/todo";

interface TodoListProps {
    title: string;
    todos?: TTodo[];
    buttonLabel: string;
    buttoncolor: string;
    onClick: (todo: TTodo) => void;
}

const TodoList=({title,
    todos, buttonLabel, buttoncolor, onClick    
}:TodoListProps)=>{
    return(
        <div className="render-container__section">
          <h2 className="render-container__title">{title}</h2>
          <ul className="render-container__list">
            {todos?.map((todo) => (
              <li key={todo.id} className="render-container__item">
                <span className="render-container__item-text">{todo.text}</span>
                <button
                  style={{ backgroundColor: buttoncolor }}
                  className="render-container__item-button"
                  onClick={(): void => onClick(todo)}
                >
                    {buttonLabel}
                </button>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default TodoList;