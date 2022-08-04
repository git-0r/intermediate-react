import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";
import { watchFetchTodos } from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    data: todoReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchTodos);