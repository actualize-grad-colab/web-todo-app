import { useEffect, useState } from "react";
import { Content } from "./Content";
import { TodoNew } from "./TodoNew";
import axios from "axios";

export type Todo = { title: string; body: string };

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3300/api/v1/todos").then((response) => {
      console.log("Engel: ", JSON.stringify(response));
      setTodos(response.data);
    });
  }, []);

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
