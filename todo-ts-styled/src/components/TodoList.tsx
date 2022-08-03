import { hookInterface, todo } from "../interfaces";
import { useTodo } from "../todo-context";
import { TodoListItem } from "./TodoListItem";
import { useMenu } from "./useMenu";

export const TodoList = () => {
  const { todos }: hookInterface = useTodo() as hookInterface;
  const { menu, setMenu } = useMenu();

  return (
    <div>
      {todos?.map((todo: todo, i) => (
        <TodoListItem
          key={todo.id}
          content={todo.data.content}
          index={i}
          menu={menu}
          setMenu={setMenu}
        />
      ))}
    </div>
  );
};
