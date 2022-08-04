import { useStore } from "../mobx-store";
import { v4 as uuidv4 } from "uuid";
export const TodoForm = () => {
  const { addTodo } = useStore();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    addTodo({ content, id: uuidv4() });
    e.target.content.value = "";
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        required
        placeholder="What needs to be done?"
        name="content"
      />
      <button>Add</button>
    </form>
  );
};
