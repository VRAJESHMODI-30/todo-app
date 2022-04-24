import React from "react";

const Todo = (props) => {
  const { task, todos, setTodos, todo } = props;

  const deleteHandler = () => {
    setTodos(todos.filter((e) => e.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <li className="todo-item">{task}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
