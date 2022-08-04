import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
