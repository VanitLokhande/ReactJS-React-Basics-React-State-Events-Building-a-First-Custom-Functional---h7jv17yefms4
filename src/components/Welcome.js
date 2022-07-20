// write code for Welcome component here
import React from "react";

const Welcome = (props) => {
  return (
    <>
      <h1>Hey !{props.name}</h1>
      <h2>Welcome to Newton School</h2>
      <div>{props.name}Greeting new students at Newton School.</div>
    </>
  );
};

export default Welcome;
