import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './models/todo-model';
import { TodoListView } from "./components/TodoListView";
function App() {
  const todoListArray = TodoList.create({
    data: []
  });

  return (
    <div className="App">
      <TodoForm addTodo={todoListArray.add} length={todoListArray.data.length} />
      <TodoListView list={todoListArray.data} />
    </div>
  );
}

export default App;
