import React from "react";
import { DrizzleContext } from "drizzle-react";

export default class MyClass extends React.Component {
  static contextType = DrizzleContext.Context;
  render() {
    const { drizzle, drizzleState, initialized } = this.context;

    if (initialized) {
      console.log("drizzle", drizzle);
      console.log("drizzleState", drizzleState);
    }

    /* render something based on the value */
    return null;
  }
}
