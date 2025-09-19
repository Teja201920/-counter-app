import React, { useState } from "react";

function App() {
  // useState hook for counter
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Experiment 4: Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
