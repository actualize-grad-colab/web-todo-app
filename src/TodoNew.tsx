import { useState } from "react";
import { Todo } from "./App";
interface TodoNewProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

export function TodoNew({ setTodos, todos }: TodoNewProps) {
  const [data, setData] = useState<Todo>({ title: "", body: "" });
  return (
    <div className="form">
      <h1>New Todo</h1>
      <p>
        Title:{" "}
        <input
          type="text"
          name="title"
          id=""
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
      </p>
      <p>
        Body:{" "}
        <input
          type="text"
          name="body"
          id=""
          onChange={(e) => setData({ ...data, body: e.target.value })}
        />
      </p>
      <button onClick={(e) => setTodos([...todos, data])}>Submit</button>
    </div>
  );
}
