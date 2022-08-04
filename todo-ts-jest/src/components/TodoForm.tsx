import Styles from "./todo-form.module.css";
import { createTodo } from "../services/createTodo";

export const TodoForm = () => {
  return (
    <form onSubmit={createTodo} className={Styles.todoForm}>
      <input required placeholder="What needs to be done?" name="content" />
    </form>
  );
};
