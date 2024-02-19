import React from "react";

import "./App.css";
import { Todo } from "./components/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import TodoComponent from "./components/Todo/TodoComponent";

function App() {
  return (
    <>
      <ToastContainer limit={1} />
      <Layout>
        {" "}
        <TodoComponent />
      </Layout>
    </>
  );
}

export default App;
