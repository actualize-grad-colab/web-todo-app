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
    <div>
      <h1>All Todos</h1>
      {todos.map((todo) => (
        <div key={todo.name}>
          <p>{todo.name}</p>
        </div>
      ))}
    </div>
  );
}
