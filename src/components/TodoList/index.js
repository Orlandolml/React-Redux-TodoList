import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import Todo from "../Todo";
import { filteredTodosSelector } from "../../redux/selectors";

const TodoList = ({ todos }) => (
  <div className="todoContainer">
    <ul className="todoList">
      {todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos yet"}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  todos: filteredTodosSelector(state),
});

export default connect(mapStateToProps)(TodoList);
