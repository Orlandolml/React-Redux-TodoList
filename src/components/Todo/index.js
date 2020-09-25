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

  render() {
    const { todo, toggleTodo, removeTodo } = this.props;

    const onClickHandler = () => {
      this.setState({
        isDeleted: true,
      });
    };

    const removeTodoHandler = (e) => {
      if (!this.state.alreadyTransitioned && e.propertyName === "transform") {
        removeTodo(todo.id);

        this.setState({
          alreadyTransitioned: true,
        });
      }
    };

    return (
      <div
        className={this.state.isDeleted ? "fall" : ""}
        id={todo.completed ? "todoCompleted" : "todo"}
        onTransitionEnd={removeTodoHandler}
      >
        <li>
          <p>{todo.text}</p>
          <div>
            <button className="checkButton" onClick={() => toggleTodo(todo.id)}>
              <FontAwesomeIcon icon="clipboard-check" />
            </button>
            <button className="trashButton" onClick={onClickHandler}>
              <FontAwesomeIcon icon="trash-alt" />
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default connect(null, { toggleTodo, removeTodo })(Todo);
