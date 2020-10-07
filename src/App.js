import React from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import DisplayTodo from "./components/DisplayTodo";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1>Todo App By Chacodaar</h1>
        <CreateTodo />
        <DisplayTodo />
      </div>
    </Provider>
  );
}
