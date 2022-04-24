import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { todos, setTodos, inputText, setInputText, setStatus } = props;

  const inputTextHandeler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "" || inputText === " ") {
      alert("Write some valid task!");
    } else {
      setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    }
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          onChange={inputTextHandeler}
          value={inputText}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
