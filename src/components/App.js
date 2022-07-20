import React, { useState } from "react";
import "../styles/App.css";
import Welcome from "./Welcome";

const App = () => {
  const [name, setname] = useState("");

  const handlename = (event) => {
    setname(event.target.value);
  };
  return (
    <>
      <input typt="text" onBlur={handlename} />
      <Welcome name={name} />
    </>
  );
};

export default App;
