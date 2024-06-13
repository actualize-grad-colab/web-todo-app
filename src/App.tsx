import { useState } from "react";
import { Content } from "./Content";
import { TodoNew } from "./TodoNew";

export type Todo = { name: string };

function App() {
  const initialState: Array<Todo> = [
    { name: "Get milk" },
    { name: "Break code" },
    { name: "Cry" },
  ];
  const [todos, setTodos] = useState(initialState);
  return (
    <div>
      <Content todos={todos} />
      {/*
      // @ts-ignore */}
      <TodoNew setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
