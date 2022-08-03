import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const markAsCompleted = (todo: {
  id: string;
  data: { content: string; completed: boolean };
}) => {
  setDoc(doc(db, "todo", todo.id), {
    ...todo.data,
    completed: !todo.data.completed,
  });
};

export const deleteTodo = (id: string) => {
  deleteDoc(doc(db, "todo", id));
};
