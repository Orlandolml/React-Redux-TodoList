import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { toggleTodo, removeTodo } from "../../redux/actionCreators";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false,
      alreadyTransitioned: false,
    };
  }

  onClickHandler = () => {
    this.setState((prevState) => ({
      ...prevState,
      isDeleted: true,
    }));
  };

  removeTodoHandler = (e) => {
    if (!this.state.alreadyTransitioned && e.propertyName === "transform") {
      this.props.removeTodo(this.props.todo.id);

      this.setState((prevState) => ({
        ...prevState,
        alreadyTransitioned: true,
      }));
    }
  };

  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <div
        onTransitionEnd={this.removeTodoHandler}
        className={this.state.isDeleted ? "fall" : ""}
        id={todo.completed ? "todoCompleted" : "todo"}
      >
        <li>
          <p>{todo.text}</p>
          <div>
            <button className="checkButton" onClick={() => toggleTodo(todo.id)}>
              <FontAwesomeIcon icon="clipboard-check" />
            </button>
            <button className="trashButton" onClick={this.onClickHandler}>
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default connect(null, { toggleTodo, removeTodo })(Todo);
