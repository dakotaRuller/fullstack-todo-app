import React from 'react';

const TodoItem = ({name, completed, removeTodo, toggleCompleted}) => (
  <li className="todo-list-item">
    <span
      className={`todo-text ${!completed ? null : "line-through"}`}
      onClick={toggleCompleted}
    >
      <p>{name}</p>
    </span>
    <span className="remove-todo" onClick={removeTodo}>X</span>
  </li>
);

export default TodoItem;