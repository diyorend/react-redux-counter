import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Nav from "./nav";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <div className="App">
      <Nav />
      {isLogged && (
        <>
          <h1>Counter: {counter}</h1>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>
            Increment
          </button>
        </>
      )}
    </div>
  );
}

export default App;
