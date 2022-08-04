import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuid4 } from "uuid";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    dispatch(addTodo({ content, id: uuid4() }));
    e.target.content.value = "";
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        required
        placeholder="another todo app..."
        name="content"
      />
      <button>Submit</button>
    </form>
  );
};
