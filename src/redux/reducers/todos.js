import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

export default (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          completed: false,
          text: action.text,
        },
      ];
    case REMOVE_TODO:
      return todos.filter((todo) => {
        if (todo.id === action.id) {
          return false;
        }
        return true;
      });
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return todos;
  }
}
