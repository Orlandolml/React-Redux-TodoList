import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { VISIBILITY_FILTERS } from "../../visibilityFilters";
import { setVisibilityFilter } from "../../redux/actionCreators";

const VisibilityFilter = ({ setVisibilityFilter }) => {
  const handleFilterTodos = (e) => {
    switch (e.target.value) {
      case "completed":
        setVisibilityFilter(VISIBILITY_FILTERS.COMPLETED);
        break;
      case "uncompleted":
        setVisibilityFilter(VISIBILITY_FILTERS.ACTIVE);
        break;
      default:
        setVisibilityFilter(VISIBILITY_FILTERS.ALL);
    }
  };

  return (
    <div className="filterOption">
      <select onChange={handleFilterTodos}>
        <option value="all">All Todos</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default connect(null, { setVisibilityFilter })(VisibilityFilter);
