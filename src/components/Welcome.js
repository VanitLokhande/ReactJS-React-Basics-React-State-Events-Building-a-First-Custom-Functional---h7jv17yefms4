// write code for Welcome component here
import React from "react";

const Welcome = (props) => {
  return (
    <>
      Greeting new students at Newton School.
      <h1>Hey !{props.name}</h1>
      <h2>Welcome to Newton School</h2>
    </>
  );
};

export default Welcome;
