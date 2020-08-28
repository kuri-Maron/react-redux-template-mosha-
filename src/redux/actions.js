import { ADD_TODO, TOGGLE_TODO, FETCH_TODOLIST } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const fetchTodoList = (todoList) => {
  nextTodoId = todoList.length;
  console.log(nextTodoId);
  return {
    type: FETCH_TODOLIST,
    payload: {
      todoListArray: todoList,
    },
  };
};
