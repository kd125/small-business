import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import cookie from "cookie";
import Login from "./components/Login";
import Listings from "./components/Listings";
import Listing from "./components/Description";
import AddListing from "./components/Admin";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Admin" element={<AddListing />} />
      <Route path="/Listings" element={<Listings />} />
      <Route
        path="/Description/:id"
        element={<ProtectedRoute component={Listing} />}
      />
      <Route path="/" element={<Listings />} />
    </Routes>
  );
};
export default Router;
