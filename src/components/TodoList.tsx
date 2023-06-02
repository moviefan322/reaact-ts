import React from "react";

interface Todo {
  id: string;
  text: string;
}

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
