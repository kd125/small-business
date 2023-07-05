import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true; max-age=60*1000";

    dispatch(login(state.username));
    navigate("/");
  };

  const handleLogout = () => {
    document.cookie = "loggedIn=; max-age=0";
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={handleLogin}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />
          {isLoggedIn ? (
            <Button
              className="login-button"
              variant="contained"
              color="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default Login;
