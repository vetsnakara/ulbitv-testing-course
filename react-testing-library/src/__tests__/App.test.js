import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe("App", () => {
  test("1st", () => {
    render(<App />);

    const helloWrodlEl = screen.getByText(/hello world/i);
    const input = screen.getByPlaceholderText(/input value/i);
    const btn = screen.getByRole("button");

    expect(helloWrodlEl).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    // snapshot
    // expect(input).toMatchSnapshot();
  });

  test("2nd", async () => {
    render(<App />);
    // const helloWrodlEl = screen.getByText(/hello world/i);
    // const helloWrodlEl = screen.queryByText(/hello2/i);
    const helloWrodlEl = await screen.findByText(/data/i);

    expect(helloWrodlEl).toBeInTheDocument();
    expect(helloWrodlEl).toHaveStyle({ color: "red" });
  });

  test("3nd", async () => {
    render(<App />);

    const btn = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle-elem")).toBeNull();

    fireEvent.click(btn);
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();

    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("4th", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/input value/i);
    const value = screen.getByTestId("value-elem");

    expect(value).toContainHTML("");

    // fireEvent.input(input, {
    //   target: { value: "12345" }
    // });

    userEvent.type(input, "12345");

    expect(value).toContainHTML("12345");
  });
});
