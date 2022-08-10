import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
const DECREMENT = "decrement";
const INCREMENT = "increment";
function Counter() {
  const count = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  function incrementCounter() {
    dispatch({ type: INCREMENT });
  }
  function decrementCounter() {
    dispatch({ type: DECREMENT });
  }
  return (
    <div className="counter-container">
      <button onClick={decrementCounter}>-</button>
      <div>{count}</div>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}
export default Counter;
