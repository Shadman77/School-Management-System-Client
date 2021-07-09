import React, { Component } from "react";
// import Link from "react-router-dom/Link";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import SaveIcon from "@material-ui/icons/Save";
import PersonIcon from "@material-ui/icons/Person";

const Link = require("react-router-dom").Link

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //To prevent all default behaviour
    console.log(this.state);
  };

  render() {
    return (
      <Container className="pt-4">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <TextField
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              label="Email"
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <TextField
              placeholder="Enter email"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              label="Password"
              variant="outlined"
              type="password"
              style={{
                width: "100%",
              }}
            />
          </Form.Group>
          <div className="text-center">
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<PersonIcon />}
              type="submit"
            >
              Sign In
            </Button>
          </div>
        </Form>
        <p className="text-center">
          Not a user?{" "}
          <Link to="/register">Register</Link>
        </p>
      </Container>
    );
  }
}

export default Login;
