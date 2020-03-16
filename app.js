import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./src/routers/AppRouter";
import configureStore from "./src/store/configureStore";

import "normalize.css/normalize.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./src/styles/styles.scss";

const store = configureStore();

// store.dispatch(addExpense({ description: "Water bill", amount: 500 }));
// store.dispatch(addExpense({ description: "gas bill", amount: 4500 }));
// store.dispatch(
//   addExpense({ description: "Rent", amount: 1500, createdAt: 1000 })
// );

// store.dispatch(setTextFilter("gas"));
// const state = store.getState();
// // console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.querySelector("#app"));
