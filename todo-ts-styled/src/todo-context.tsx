import { createContext, useContext, useState } from "react";
import { todo } from "./interfaces";
const TodoContext = createContext({});
export const TodoProvider = ({ children }: any) => {
  const [todos, setTodos] = useState<todo[]>([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
