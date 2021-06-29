import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Register() {
  // define state
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("triggered");

    let myForm = document.getElementById("myForm");
    let formData = new FormData(myForm);
    // console.log(formData.getAll('password'));
    // console.log(formData.keys());
    for (var key of formData.keys()) {
      console.log(key, formData.getAll(key));
    }
  };

  const handleChange = (event) => {
    // this.setState({value: event.target.value});
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
    console.log(event.target.name, event.target.value);
  };

  return (
    // <Container fluid>
    <Container className="pt-4">
      <Form id="myForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={handleChange}
            value={password}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div>
        <p>Other options</p>
      </div>
    </Container>
  );
}

export default Register;
