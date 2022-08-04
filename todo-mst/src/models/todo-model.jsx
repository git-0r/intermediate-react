import { types } from "mobx-state-tree";

export const TodoItem = types
  .model({
    id: types.identifier,
    content: types.string,
    completed: false,
  })
  .actions((todo) => ({
    toggleStatus() {
      todo.completed = !todo.completed;
    },
  }));

export const TodoList = types
  .model("TodoList", {
    data: types.array(TodoItem),
  })
  .actions((self) => ({
    add(todo) {
      self.data.push(todo);
    },
  }));
