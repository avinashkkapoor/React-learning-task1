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
        <div>
      <h2>{count}</h2>
      <button onClick={decrement} disabled={count <= 0}>-</button>
      <button onClick={increment}>+</button>
      </div>
  );
}
