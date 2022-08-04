import { Observer } from "mobx-react";
import {TodoListItem }from "./TodoListItem";

export const TodoListView = ({ list }) => {
  return (
    <Observer>
      {() => (
        <div>
          {list.map((todo) => (
            <TodoListItem key={todo.id} content={todo.content} />
          ))}
        </div>
      )}
    </Observer>
  );
};
