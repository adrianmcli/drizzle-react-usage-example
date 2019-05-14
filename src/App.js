import React from "react";
import { Drizzle } from "drizzle";
import { DrizzleContext } from "drizzle-react";
import MyComponent from "./MyComponent";

const drizzle = new Drizzle({ contracts: [] });

export default () => (
  <DrizzleContext.Provider drizzle={drizzle}>
    <MyComponent />
  </DrizzleContext.Provider>
);
