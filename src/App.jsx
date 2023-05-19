import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("App rendering...");
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Counter - {counter}</button>
      <Child />
    </div>
  );
};

export default App;
