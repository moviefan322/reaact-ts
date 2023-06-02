import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([{ id: "t1", text: "Finish the course" }]);
  return (
    <div className="App">
      <NewTodo setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
