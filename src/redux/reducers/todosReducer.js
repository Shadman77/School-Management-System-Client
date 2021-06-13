import { GET_TODOS } from "../actions/types";

const initialState = {
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      console.log(action.payload);
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}
