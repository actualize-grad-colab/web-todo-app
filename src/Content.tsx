import axios from "axios";
import { useEffect, useState } from "react";
import { TodoNew } from "./TodoNew";
import { Todo } from "./App";

interface ContentProps {
  todos: Array<Todo>;
}

export function Content({ todos }: ContentProps) {
  // useEffect(handleIndexTodos, []);

  return (
    <div className="index">
      <h1>All Todos</h1>
      {todos.map((todo) => (
        <div className="index-content" key={todo.title}>
          <h2>-{todo.title}</h2>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
}
