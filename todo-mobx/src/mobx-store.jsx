import { useLocalObservable } from "mobx-react-lite";
import { createContext, useContext } from "react";

const storeContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    data: [],
    addTodo(todo) {
      this.data.push(todo);
    },
  }));

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = () => useContext(storeContext);
