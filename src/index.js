import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import { combineReducers, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";
import { Reducer } from "./redux/reducers/Reducer";
import { UserReducer } from "./redux/reducers/UserReducer";
import { CargoReducer } from "./redux/reducers/CargoReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import store from './redux/saga/store'
// const store = createStore(UserReducer, composeWithDevTools());
const store1 = createStore(Reducer, composeWithDevTools());
// const store = createStore(CargoReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
  {/* <Provider store={store1}> */}
    <Router>
      <App />
    </Router>,
  </Provider>,
  document.getElementById('root')
);
