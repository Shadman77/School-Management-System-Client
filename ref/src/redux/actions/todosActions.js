import { GET_TODOS, SET_TODOS_LOADING } from "./types";
import axios from "axios";

export const getTodos = () => {
  return async function (dispatch) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch({
      type: GET_TODOS,
      payload: res.data,
    });
  };
};

export const setTodosLoading = () => {
  return function (dispatch) {
    dispatch({
      type: SET_TODOS_LOADING,
    });
  };
};