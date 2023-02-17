import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../AppRouter";
import { createStore } from "../store";

export const renderWithRouter = ({ element, path = "/" } = {}) => {
  render(
    <Provider store={createStore()}>
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
        {element}
      </MemoryRouter>
    </Provider>
  );
};
