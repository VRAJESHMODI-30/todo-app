import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fileredTodos, setFileredTodos] = useState([]);

  //Runs only once when app starts.
  useEffect(() => {
    let data = window.localStorage.getItem("todos");
    if (data !== null) {
      setTodos(JSON.parse(data));
    }
  }, []);

  //Runs when todos or status state changes.
  useEffect(() => {
    filerHandler();
    window.localStorage.setItem("todos", JSON.stringify(todos));
    // eslint-disable-next-line
  }, [todos, status]);

  const filerHandler = () => {
    switch (status) {
      case "completed":
        setFileredTodos(todos.filter((item) => item.completed === true));
        break;

      case "uncompleted":
        setFileredTodos(todos.filter((item) => item.completed === false));
        break;

      default:
        setFileredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} fileredTodos={fileredTodos} />
    </div>
  );
}

export default App;
