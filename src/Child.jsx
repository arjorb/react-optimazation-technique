import React from "react";

const Child = React.memo(() => {
  console.log("Child rendering...");

  return <p>I'm Children</p>;
});

export default Child;
