import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn); // Update the state path to "state.user.isLoggedIn"
  const dispatch = useDispatch();

  const handleLogin = () => {
    document.cookie = "loggedIn=true; max-age=60*1000";
    navigate("/");
  };

  const handleLogout = () => {
    document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
    dispatch({ type: "LOGOUT" });
    navigate("/Login");
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          Small Business Site
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/Listings">Listings</Link>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-list-item">
                <Link to="/Admin">Admin</Link>
              </li>
              <li className="nav-list-item" onClick={handleLogout}>
                Logout
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li className="nav-list-item">
              <Link to="/Login">Login</Link>
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
