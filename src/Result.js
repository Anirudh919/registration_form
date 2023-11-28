// Result.js
import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  console.log(window.location);
  const location = useLocation();
  console.log(location?.state);
  return (
    <div>
      <h1>Registration Successful!</h1>
      <p>Username: {location?.state?.username}</p>
      <p>Email: {location?.state?.email}</p>
    </div>
  );
};

export default Result;
