import { TodoInputForm } from "./TodoInputForm";
import styled from "styled-components";
export const TodoModal = ({
  setTodoForm,
}: {
  setTodoForm: (state: boolean) => void;
}) => {
  return (
    <ModalWrapper className="modal_wrapper">
      <TodoInputForm setTodoForm={setTodoForm} />
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(150, 150, 150, 0.6);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;