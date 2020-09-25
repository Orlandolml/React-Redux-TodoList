import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addTodo } from "../../redux/actionCreators";
import "./styles.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="todoInput">
        <input
          placeholder="Enter a new task"
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
          className="input"
        />
        <button className="todoButton" onClick={this.handleAddTodo}>
          <FontAwesomeIcon className="icon" icon="plus-square" />
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
