// write code for Welcome component here
import React from "react";

const Welcome = (props) => {
  return (
    <>
      <h1>Hey !{props.name}</h1>
      <h1>Welcome to Newton School</h1>
    </>
  );
};

export default Welcome;
