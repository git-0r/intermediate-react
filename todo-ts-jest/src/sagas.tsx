import { call, put, takeEvery } from "redux-saga/effects";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import { getTodos, getTodosSuccess } from "./redux/todoSlice";

export function* watchFetchTodos() {
  yield takeEvery("todo/getTodos", fetchtodos);
}

export function* fetchtodos() {
  console.log("fetching...");
  const q = query(collection(db, "todo"), orderBy("timestamp", "desc"));
  let data;
  onSnapshot(q, (snapshot) => {
    data = snapshot.docs.map((doc: any) => ({
      id: doc.id,
      data: { completed: doc.data().completed, content: doc.data().content },
    }));
  });
  const delay = (ms: number) =>
    new Promise((res) =>
      setTimeout(() => {
        res({});
      }, ms)
    );

  yield delay(2000);
  yield put(getTodosSuccess(data));
}
