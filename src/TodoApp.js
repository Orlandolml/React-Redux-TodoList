import React from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faCheckSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilter from "./components/VisibilityFilter";

library.add(fas, faPlusSquare, faCheckSquare, faTrash);

class todoApp extends React.Component {
  render() {
    return (
      <div >
        <header>
          <h1 className="text">Todo-List Orlando</h1>
        </header>

        <div className="form ">
          <AddTodo />
          <VisibilityFilter />
        </div>

        <TodoList />
      </div>
    );
  }
}

export default todoApp;
