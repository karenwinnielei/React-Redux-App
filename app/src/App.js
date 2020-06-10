import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { covidReducer as reducer } from "./reducers/covidReducer";

import CovidForm from "./components/CovidForm";
import CovidList from "./components/CovidList";

import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Covid App</h1>
        <CovidForm />
        <CovidList />
      </div>
    </Provider>
  );
}

export default App;
