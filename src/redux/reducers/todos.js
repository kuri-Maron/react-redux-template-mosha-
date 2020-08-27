import { ADD_TODO, TOGGLE_TODO, FETCH_TODOLIST } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};
console.log("initialState", initialState);
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      //   console.log(action, state);
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case FETCH_TODOLIST: {
      const { todoListArray } = action.payload;
      let byIds = {};
      return {
        ...state,
        allIds: todoListArray.map((todo) => {
          byIds[todo.id] = {
            content: todo.content,
            completed: todo.completed,
          };
          return todo.id;
        }),
        byIds: byIds,
      };
    }
    default:
      return state;
  }
}
