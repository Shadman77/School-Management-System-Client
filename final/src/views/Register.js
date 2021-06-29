import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Register() {
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

  

  return (
    // <Container fluid>
    <Container className="pt-4">
      <Form id="myForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
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
