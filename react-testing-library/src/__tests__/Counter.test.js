import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "../components/Counter";
import { renderWithStore } from "../helpers/renderWithStore";

describe("Counter", () => {
  test("test", () => {
    renderWithStore(<Counter />, { counter: { value: 10 } });

    const incBtn = screen.getByTestId("increment-btn");
    const valueTitle = screen.getByTestId("value-title");

    expect(valueTitle).toHaveTextContent("10");
    userEvent.click(incBtn);
    expect(valueTitle).toHaveTextContent("11");
  });
});
