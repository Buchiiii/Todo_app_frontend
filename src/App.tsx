import React from "react";

import "./App.css";
import { Todo } from "./components/Todo";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>
  <ToastContainer limit={1}/>
  <Todo/></>;
}

export default App;
