import { SyntheticEvent } from "react";
import { hookInterface, todo } from "../interfaces";
import { useTodo } from "../todo-context";
import { v4 as uuidv4 } from "uuid";

export const TodoInputForm = () => {
  const { setTodos }: hookInterface = useTodo() as hookInterface;
  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const content = target.content.value;
    setTodos((prev: todo[]) => {
      return [
        ...prev,
        {
          id: uuidv4(),
          data: { content, completed: false },
        },
      ];
    });
    target.content.value = "";
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input required name="content" type="text" />
      <button>Submit</button>
    </form>
  );
};
