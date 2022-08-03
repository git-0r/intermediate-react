import styled from "styled-components";
import { hookInterface, todo } from "../interfaces";
import { useTodo } from "../todo-context";

export const TodoListItem = ({
  content,
  index,
  menu,
  setMenu,
}: {
  content: string;
  index: number;
  menu: number | undefined;
  setMenu: (index: number) => void;
}) => {
  const { setTodos } = useTodo() as hookInterface;
  const deleteTodo = () => {
    setTodos((prev: todo[]) => {
      return prev.filter((todo, i) => i !== index);
    });
  };
  return (
    <Todo>
      <p>
        {index + 1} {content}
      </p>
      <TodoMenuWrapper onClick={() => setMenu(index)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
        {menu === index ? (
          <TodoMenu>
            <TodoMenuOption>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
              </svg>
              <span>Edit</span>
            </TodoMenuOption>
            <TodoMenuOption onClick={deleteTodo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z" />
              </svg>
              <span>Delete</span>
            </TodoMenuOption>
          </TodoMenu>
        ) : null}
      </TodoMenuWrapper>
    </Todo>
  );
};

const Todo = styled.div`
  border-top: 1px solid rgb(200, 200, 200);
  margin: 0;
  padding: 0.5rem 2rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoMenuWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const TodoMenu = styled.div`
  position: absolute;
  right: 100%;
  background-color: white;
  box-shadow: 0px 0px 1px 1px rgb(200, 200, 200);
  border-radius: 0.1rem;
`;

const TodoMenuOption = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  &:first-of-type {
    border-bottom: 1px solid rgb(200, 200, 200);
  }
`;
