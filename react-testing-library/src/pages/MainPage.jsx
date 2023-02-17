import React from "react";
import { Counter } from "../components/Counter";

export const MainPage = () => {
  return (
    <div data-testid="main-page">
      <h1>MainPage</h1>
      <Counter />
    </div>
  );
};

export default MainPage;
