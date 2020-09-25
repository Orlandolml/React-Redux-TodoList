import { VISIBILITY_FILTERS } from "../visibilityFilters";

export const todosSelector = (state) => state.todos;

export const visibilityFilterSelector = (state) => state.visibilityFilter;

export const filteredTodosSelector = (state) => {
  const todos = todosSelector(state);
  const visibilityFilter = visibilityFilterSelector(state);

  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return todos.filter((todo) => todo.completed);
    case VISIBILITY_FILTERS.ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
};
