import { Component, SyntheticEvent } from "react";
import { TodoContext } from "../context/todo-context";
import { contextData } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

export class TodoInputForm extends Component {
  static contextType = TodoContext;

  handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { addTodo } = this.context as contextData;
    const target = e.target as HTMLFormElement;
    addTodo({
      id: uuidv4(),
      data: { content: target.content.value, completed: false },
    });
    target.content.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          required
          type="text"
          placeholder="What needs to be done?"
          name="content"
        />
        <button>Submit</button>
      </form>
    );
  }
}
