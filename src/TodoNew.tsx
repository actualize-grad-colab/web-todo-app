import { useState } from "react";
import { Todo } from "./App";
interface TodoNewProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo | undefined>>>;
}
export function TodoNew({ setTodos, todos }: TodoNewProps) {
  const [data, setData] = useState<Todo>();
  return (
    <div>
      <input
        type="text"
        name="title"
        id=""
        onChange={(e) =>
          setData({ title: e.target.value, body: e.target.value })
        }
      />
      <button onClick={(e) => setTodos([...todos, data])}>Submit</button>
    </div>
  );
}
