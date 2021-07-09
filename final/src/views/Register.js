import React, { useState } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function Register() {
  // define state
  const [user, setUser] = useState({
    email: "1",
    password: "",
  });
  const [email, setEmail] = useState("");
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
    // When copied using the spread operator, the type of copy is actually a deep copy
    let newUser = {
      ...user,
    };

    newUser[event.target.name] = event.target.value;
    setUser(newUser);

    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }

    console.log(event.target.name, event.target.value);
  };

  return (
    // <Container fluid>
    <Container
      // fluid
      className="pt-4"
    >
      <Form id="myForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <TextField
            placeholder="Enter email"
            name="email"
            // value={email}
            value={user.email}
            onChange={handleChange}
            label="Email"
            variant="outlined"
            style={{
              width: "100%",
            }}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <TextField
            placeholder="Enter email"
            name="password"
            value={password}
            onChange={handleChange}
            label="Password"
            variant="outlined"
            style={{
              width: "100%",
            }}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <div className="text-center">
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            // className={classes.button}
            startIcon={<SaveIcon />}
            type="submit"
          >
            Save User
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Register;
