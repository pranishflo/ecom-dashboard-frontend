import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state";// Make sure the path is correct
import state from './state'; 
import { Provider } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import{ api } from "state/api";

// Configure the Redux store
const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app wrapped with the Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

