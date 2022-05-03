import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>
        Sign In is {`${isLogged}`}
      </button>
    </div>
  );
};

export default Search;
