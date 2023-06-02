import React from "react";
import { Todo } from "../todo.model";

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

export default TodoList;
