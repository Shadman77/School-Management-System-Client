import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos, setTodosLoading } from "../redux/actions/todosActions";
const axios = require("axios");

export class Todos extends Component {
  // state = {
  //   todos: [],
  // };

  static propsType = {
    getTodos: PropTypes.func.isRequired,
    setTodosLoading: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired
  };

  async componentDidMount() {
    // console.log(this.props.todos)
    this.props.setTodosLoading()
    await this.props.getTodos()
    // const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    // console.log(res);
    // await this.setState({ todos: res.data });
  }

  render() {
    return (
      <ListGroup>
        {this.props.todos.todos.map((todo) => {
          return (
            <ListGroup.Item key={todo.id}>Title: {todo.title}</ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

// export default Todos;
export default connect(mapStateToProps, { getTodos: getTodos, setTodosLoading })(Todos);
