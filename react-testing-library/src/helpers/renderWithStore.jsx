import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "../store";

export const renderWithStore = (element, initialState) =>
  render(<Provider store={createStore(initialState)}>{element}</Provider>);
