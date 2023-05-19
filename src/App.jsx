import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  console.log("App rendering");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count - {count}</button>
      <p>I'm the App component</p>
      <Child />
    </div>
  );
};

export default App;
