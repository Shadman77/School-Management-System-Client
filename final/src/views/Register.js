import React, { useState } from "react";
// import Link from "react-router-dom/Link";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";

const Link = require("react-router-dom").Link;

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
    width: "100%",
  },
  optionCol: {
    color: "orange",
  },
}));

function Register() {
  const classes = useStyles();
  // define state
  const [user, setUser] = useState({
    email: "",
    password: "",
    password_confirm: "",
    firstname: "",
    lastname: "",
    type: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
    // alert("Change")
    // this.setState({value: event.target.value});
    // When copied using the spread operator, the type of copy is actually a deep copy
    let newUser = {
      ...user,
    };

    newUser[event.target.name] = event.target.value;
    setUser(newUser);

    // if (event.target.name === "email") {
    //   setEmail(event.target.value);
    // } else if (event.target.name === "password") {
    //   setPassword(event.target.value);
    // }

    console.log(event.target.name, event.target.value);
  };

  return (
    // <Container fluid>
    <Container
      // fluid
      className="pt-4"
    >
      <Form id="myForm" onSubmit={handleSubmit}>
        <div className="row">
          {/* Email */}
          <div className="col-md-6">
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
            </Form.Group>
          </div>
          {/* Email */}

          {/* First Name */}
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <TextField
                placeholder="Enter first name"
                name="firstname"
                // value={email}
                value={user.firstname}
                onChange={handleChange}
                label="First Name"
                variant="outlined"
                style={{
                  width: "100%",
                }}
              />
            </Form.Group>
          </div>
          {/*First Name */}
        </div>
        {/* Last Name */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <TextField
            placeholder="Enter last name"
            name="lastname"
            // value={email}
            value={user.lastname}
            onChange={handleChange}
            label="Last Name"
            variant="outlined"
            style={{
              width: "100%",
            }}
          />
        </Form.Group>
        {/* Last Name */}

        {/* Password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <TextField
            placeholder="Enter password"
            name="password"
            // value={password}
            value={user.password}
            onChange={handleChange}
            label="Password"
            variant="outlined"
            type="password"
            style={{
              width: "100%",
            }}
          />
        </Form.Group>
        {/* Password */}

        {/* Password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <TextField
            placeholder="Confirm password"
            name="password_confirm"
            // value={password}
            value={user.password_confirm}
            onChange={handleChange}
            label="Confirm Password"
            variant="outlined"
            type="password"
            style={{
              width: "100%",
            }}
          />
        </Form.Group>
        {/* Password */}

        {/* Type */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={user.type}
            onChange={handleChange}
            label="Type"
            name="type"
          >
            <MenuItem value="uedviuewy">
              <em>None</em>
            </MenuItem>
            <MenuItem className={classes.optionCol} value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* Type */}

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
      <p className="text-center">
        Not a user? <Link to="/login">Login</Link>
      </p>
    </Container>
  );
}

export default Register;
