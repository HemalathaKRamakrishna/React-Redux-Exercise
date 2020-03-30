import React from "react";
import "./dumb.css";

const Dumb = props => {
  console.log("Dumb Component Props: ", props);
  return (
    <>
      <div className="counter">
        <button
          onClick={() => {
            props.decrement(1);
          }}
        >
          decrement
        </button>
        <div>{props.counter}</div>
        <button
          onClick={() => {
            props.increment(1);
          }}
        >
          increment
        </button>
      </div>
      <div>{props.displayCounterStatus}</div>
    </>
  );
};

export { Dumb };
