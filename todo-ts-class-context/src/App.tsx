import React, { Component } from "react";
import "./App.css";
import { TodoInputForm } from "./components/TodoInputForm";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/todo-context";

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <div className="App">
          <TodoInputForm />
          <TodoList/>
        </div>
      </TodoProvider>
    );
  }
}

export default App;
