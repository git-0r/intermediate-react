import { useSelector } from "react-redux";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoListItem } from "./components/TodoListItem";

function App() {
  const data = useSelector((state) => state.data);
  return (
    <div className="App">
      <TodoForm />
      <div>
        {data.map((todo) => (
          <TodoListItem key={todo.id} content={todo.content} />
        ))}
      </div>
    </div>
  );
}

export default App;
