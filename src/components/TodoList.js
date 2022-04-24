import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, setTodos, fileredTodos } = props;

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {fileredTodos.map((element) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            task={element.text}
            key={element.id}
            todo={element}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
