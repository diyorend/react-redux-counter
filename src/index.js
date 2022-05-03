import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./GlobalStyles";

import allReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
