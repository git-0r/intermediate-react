import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { SyntheticEvent } from "react";
import { db } from "../firebase";

export const createTodo = (e: SyntheticEvent) => {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  const newTodo = {
    content: target.content.value,
    completed: false,
    timestamp: serverTimestamp(),
  };
  addDoc(collection(db, "todo"), newTodo);
  target.content.value = "";
};
