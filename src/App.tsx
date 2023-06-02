import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo setTodos={todoAddHandler} />
      <TodoList todos={todos} deleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
