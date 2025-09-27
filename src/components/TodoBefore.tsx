import { useState } from 'react';
import type { TTodo } from '../types/todo';


const TodoBefore = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [doneTodos, setDoneTodos] = useState<TTodo[]>([]);
  const [input, setInput] = useState<string>('');

  // 할 일 추가
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = input.trim();
    if (text) {
      const newTodo: TTodo = { id: Date.now(), text };
      setTodos(prev => [...prev, newTodo]);
      setInput('');
    }
  };

  // 할 일 완료
  const completeTodo = (todo: TTodo) => {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
    setDoneTodos(prev => [...prev, todo]);
  };

  // 완료한 일 삭제
  const deleteTodo = (todo: TTodo) => {
    setDoneTodos(prev => prev.filter(t => t.id !== todo.id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-container__header">Yujin List</h1>
      <form className="todo-container__form" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="todo-container__input"
          placeholder="할 일 입력"
          required
        />
        <button type="submit" className="todo-container__button">
          할 일 추가
        </button>
      </form>

      <div className="render-container">
        {/* 할 일 리스트 */}
        <div className="render-container__section">
          <h2 className="render-container__title">할 일</h2>
          <ul className="render-container__list">
            {todos.map((todo) => (
              <li key={todo.id} className="render-container__item">
                <span className="render-container__item-text">{todo.text}</span>
                <button
                  style={{ backgroundColor: '#28a745' }}
                  className="render-container__item-button"
                  onClick={() => completeTodo(todo)}
                >
                  완료
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 완료한 일 리스트 */}
        <div className="render-container__section">
          <h2 className="render-container__title">완료한 일</h2>
          <ul className="render-container__list">
            {doneTodos.map((todo) => (
              <li key={todo.id} className="render-container__item">
                <span className="render-container__item-text">{todo.text}</span>
                <button
                  style={{ backgroundColor: '#dc3545' }}
                  className="render-container__item-button"
                  onClick={() => deleteTodo(todo)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoBefore;


