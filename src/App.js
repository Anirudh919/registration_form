// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Result from "./Result";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<RegistrationForm />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
