import { GET_TODOS, SET_TODOS_LOADING } from "../actions/types";

const initialState = {
  loading: false,
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      // console.log(action.payload);
      return {
        ...state, //loading: false, todos: []
        todos: action.payload,
      };
      break;
    case SET_TODOS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
