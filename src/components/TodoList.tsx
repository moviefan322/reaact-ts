import React from "react";
import { Todo } from "../todo.model";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (todoId: string) => void;
}

function TodoList({ todos, deleteTodo }: TodoListProps): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={deleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
