import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (text) => ({
  text,
  type: ADD_TODO,
  id: nextTodoId++,
});

export const toggleTodo = (id) => ({
  id,
  type: TOGGLE_TODO,
});

export const removeTodo = (id) => ({
  id,
  type: REMOVE_TODO,
});

export const setVisibilityFilter = (filter) => ({
  filter,
  type: SET_VISIBILITY_FILTER,
});
