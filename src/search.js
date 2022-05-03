import React from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "SIGN_IN" })}>
        Hide or Show
      </button>
    </div>
  );
};

export default Search;
