import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
const axios = require("axios");

export class Todos extends Component {
  state = {
    todos: [],
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res);
    await this.setState({ todos: res.data });
  }

  render() {
    return (
      <ListGroup>
        {this.state.todos.map((todo) => {
          return (
            <ListGroup.Item key={todo.id}>Title: {todo.title}</ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default Todos;
