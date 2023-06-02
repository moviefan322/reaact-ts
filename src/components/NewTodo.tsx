import React, { useRef } from "react";

function NewTodo({
  setTodos,
}: {
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; text: string }[]>
  >;
}) {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    setTodos((prev) => [
      ...prev,
      { id: Math.random().toString(), text: enteredText },
    ]);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;
