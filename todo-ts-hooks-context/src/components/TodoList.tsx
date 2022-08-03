import { hookInterface, todo } from "../interfaces";
import { useTodo } from "../todo-context";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const { todos }: hookInterface = useTodo() as hookInterface;

  return (
    <div>
      {todos.map((todo: todo) => (
        <TodoListItem key={todo.id} content={todo.data.content} />
      ))}
    </div>
  );
};
