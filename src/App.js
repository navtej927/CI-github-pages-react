import React from "react";
import { Provider } from "react-redux";
import { HomePage } from "./Pages/HomePage";
import PackageJson from "../package.json";
import store from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>version {PackageJson.version}</h1>
        <HomePage />
      </div>
    </Provider>
  );
};
