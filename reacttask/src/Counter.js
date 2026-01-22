import React from "react";


export const Counter =()  => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }
   
    return (
        <div id="Counter">
      <h2>{count}</h2>
      <button data-testid="decrement-button" onClick={decrement} disabled={count <= 0}>-</button>
      <button data-testid="increment-button" onClick={increment}>+</button>
      </div>
  );
}
