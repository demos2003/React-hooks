import React, { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0); // Initial count state

  const handleIncrement = () => {
    setCount(count + 1); // Update the count state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default UseState;
