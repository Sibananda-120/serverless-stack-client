import React from "react";
import { Route, Navigate } from "react-router-dom"; // Import Navigate
import { useAppContext } from "../libs/contextLib";

export default function UnauthenticatedRoute({ element: Component, ...rest }) {
  const { isAuthenticated } = useAppContext();
  const redirect = querystring("redirect");


  return (
    <Route
      {...rest}
      element={
        !isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to={redirect === "" || redirect === null ? "/" : redirect}  replace />
        )
      }
    />
  );
}

// Function to parse query string
function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

