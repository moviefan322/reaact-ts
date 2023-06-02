import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([{ id: "t1", text: "Finish the course" }]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };
  return (
    <div className="App">
      <NewTodo setTodos={todoAddHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
