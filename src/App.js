import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./nav";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { yEase, fade } from "./animations";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.isLogged);

  return (
    <AppStyled>
      <Nav />
      {isLogged && (
        <CounterStyled variants={yEase} animate="show" initial="hidden">
          <h1>COUNTER</h1>
          <div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
              Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
              Decrement
            </button>
          </div>
          <p>{counter}</p>
        </CounterStyled>
      )}
    </AppStyled>
  );
}

const AppStyled = styled(motion.div)`
  padding: 2rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 1rem 0 0.5rem 0;
  }

  button {
    background: #08a589;
    color: #eee;
    font-size: 1rem;
    font-weight: bold;
    font-family: monospace;
    border: none;
    cursor: pointer;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
  }
  p {
    font-size: 6rem;
    color: #08a589;
    text-shadow: 0px 0px 10px #88cdb6;
  }
`;
const CounterStyled = styled(motion.div)`
  min-height: 40vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
