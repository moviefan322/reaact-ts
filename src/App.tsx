import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>();

  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text }]);
  };
  return (
    <div className="App">
      <NewTodo setTodos={todoAddHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
