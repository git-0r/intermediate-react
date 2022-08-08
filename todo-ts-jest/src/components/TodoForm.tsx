import Styles from "./todo-form.module.css";
import { createTodo } from "../services/createTodo";
import { useDispatch } from "react-redux";

export const TodoForm = () => {
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e)=>createTodo(e,dispatch)} className={Styles.todoForm}>
      <input required placeholder="What needs to be done?" name="content" />
    </form>
  );
};
