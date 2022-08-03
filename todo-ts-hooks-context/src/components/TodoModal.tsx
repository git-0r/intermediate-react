import { TodoInputForm } from "./TodoInputForm";
import "./todo-modal.scss";
export const TodoModal = ({
  setTodoForm,
}: {
  setTodoForm: (state: boolean) => void;
}) => {
  return (
    <div className="modal_wrapper">
      <TodoInputForm setTodoForm={setTodoForm} />
    </div>
  );
};
