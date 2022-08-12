import React from "react";
import PackageJson from "../package.json";

export const App = () => {
  return (
    <div>
      <h1>version {PackageJson.version}</h1>
      <div>Hello from the App</div>
      <div>1</div>
    </div>
  );
};
