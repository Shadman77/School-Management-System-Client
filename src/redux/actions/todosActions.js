import { GET_TODOS } from "./types";
import axios from "axios";

export const getTodos = () => {
    return async function(dispatch){
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({
            type: GET_TODOS,
            payload: res.data
        })
    }
}