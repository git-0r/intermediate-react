import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { Todo } from "./components/Todo";
import { Modal } from "./components/Modal";
import { deleteTodo, markAsCompleted } from "./firebase-crud";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./redux/todoSlice";

type todo = {
  id: string;
  data: {
    content: string;
    completed: boolean;
  };
};

function App() {
  // const [list, setList] = useState([]);
  const [task, setTask] = useState(0);
  const [modal, setModal] = useState({
    visible: false,
    todo: { id: "", data: { content: "", completed: false } },
  });

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.value.todos);
  useEffect(() => {
    // const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));
    // onSnapshot(q, (snapshot: any) => {
    //   setList(
    //     snapshot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }))
    //   );
    // });
    dispatch(getTodos());
    // setList(data);
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todo_wrapper">
        <div className="layer3">
          <TodoForm />
          {data.length < 1
            ? null
            : task === 1
            ? data
                .filter((todo: todo) => !todo.data.completed)
                .map((todo: todo) => (
                  <Todo
                    setModal={setModal}
                    key={todo.id}
                    todo={todo}
                    markAsCompleted={markAsCompleted}
                    deleteTodo={deleteTodo}
                  />
                ))
            : task === 2
            ? data
                .filter((todo: todo) => todo.data.completed)
                .map((todo: todo) => (
                  <Todo
                    setModal={setModal}
                    key={todo.id}
                    todo={todo}
                    markAsCompleted={markAsCompleted}
                    deleteTodo={deleteTodo}
                  />
                ))
            : data.map((todo: todo) => (
                <Todo
                  setModal={setModal}
                  key={todo.id}
                  todo={todo}
                  markAsCompleted={markAsCompleted}
                  deleteTodo={deleteTodo}
                />
              ))}
          {data.length > 0 && (
            <div className="todo_filters_wrapper">
              <p className="todo_count">
                <span>
                  {data.filter((todo: todo) => !todo.data.completed).length}
                </span>{" "}
                item left
              </p>
              <div className="filter_btns">
                <button
                  style={{
                    border: task === 0 ? "1px solid rgb(194,157,156)" : "none",
                  }}
                  onClick={() => setTask(0)}
                >
                  All
                </button>
                <button
                  style={{
                    border: task === 1 ? "1px solid rgb(194,157,156)" : "none",
                  }}
                  onClick={() => setTask(1)}
                >
                  Active
                </button>
                <button
                  style={{
                    border: task === 2 ? "1px solid rgb(194,157,156)" : "none",
                  }}
                  onClick={() => setTask(2)}
                >
                  Completed
                </button>
              </div>
              <p className="clear_completed">Clear completed</p>
            </div>
          )}
        </div>
        <div className="layer2"></div>
        <div className="layer1"></div>
      </div>
      {modal.visible && <Modal todo={modal.todo} setModal={setModal} />}
    </div>
  );
}

export default App;
