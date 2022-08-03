import { useState } from "react";
import "./App.scss";
import { TodoList } from "./components/TodoList";
import { TodoModal } from "./components/TodoModal";

function App() {
  const [todoForm, setTodoForm] = useState(false);
  return (
    <>
      {todoForm && <TodoModal setTodoForm={ setTodoForm} />}
      <div className="App">
        <main>
          <h1>Todo App</h1>
          <div className="list_wrapper">
            <TodoList />
            <div
              className="add_todo_btn"
              onClick={() => setTodoForm((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
