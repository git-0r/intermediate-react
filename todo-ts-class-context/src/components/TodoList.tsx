import { Component } from "react";
import { TodoContext } from "../context/todo-context";
import { contextData, todo} from "../interfaces";

export class TodoList extends Component {
  static contextType = TodoContext;
  context: contextData = this.context as contextData;
  render() {
    return (
      <main>
        {this.context.data.todos.map((todo: todo) => (
          <p key={todo.id}>{todo.data.content}</p>
        ))}
      </main>
    );
  }
}
