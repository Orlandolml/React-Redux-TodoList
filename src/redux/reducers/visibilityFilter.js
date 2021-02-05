import { SET_VISIBILITY_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../visibilityFilters";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
