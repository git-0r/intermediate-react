import { useState } from "react";
import styled from "styled-components";
import { TodoList } from "./components/TodoList";
import { TodoModal } from "./components/TodoModal";

function App() {
  const [todoForm, setTodoForm] = useState(false);
  return (
    <>
      {todoForm && <TodoModal setTodoForm={setTodoForm} />}
      <MyApp>
        <Main>
          <h1>Todo App</h1>
          <ListWrapper>
            <TodoList />
            <AddTodoBtn onClick={() => setTodoForm((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                  fill="rgba(255,255,255,1)"
                />
              </svg>
            </AddTodoBtn>
          </ListWrapper>
        </Main>
      </MyApp>
    </>
  );
}

export default App;

const ListWrapper = styled.div`
  overflow-y: scroll;
  height: 75%;
`;

const Main = styled.main`
  border-radius: 1rem;
  background-color: #fff;
  width: 400px;
  height: 50vh;
  position: relative;
`;

const MyApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(176, 102, 238);
  padding: 1rem;
  height: 100vh;
`;

const AddTodoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(147, 52, 233);
  position: absolute;
  top: -2%;
  right: -2%;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;
