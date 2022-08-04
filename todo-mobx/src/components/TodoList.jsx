import { Observer } from "mobx-react-lite";
import { useStore } from "../mobx-store";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const { data } = useStore();
  return (
    <Observer>
      {() => (
        <div>
          {data.map((todo) => (
            <TodoListItem key={todo.id} content={todo.content} />
          ))}
        </div>
      )}
    </Observer>
  );
};
