import { v4 as uuidv4 } from "uuid";
export const TodoForm = ({ addTodo, length }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    addTodo({ id: uuidv4(), content });
    e.target.content.value = "";
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        required
        type="text"
        placeholder="what needs to be done?"
        name="content"
      />
      <button>Add</button>
    </form>
  );
};
