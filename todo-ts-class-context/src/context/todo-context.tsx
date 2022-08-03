import { Component, createContext, ReactNode } from "react";
import { todo, todoState } from "../interfaces";

export const TodoContext = createContext({});

export class TodoProvider extends Component<any> {
  state = {
    todos: [
      {
        id: "1",
        data: {
          content: "abcd",
          completed: true,
        },
      },
    ],
  };

  addTodo = (todo: todo) => {
    console.log("adding...");
    this.setState((prev: todoState) => ({ todos: [...prev.todos, todo] }));
  };

  render() {
    return (
      <TodoContext.Provider value={{ data: this.state, addTodo: this.addTodo }}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}
