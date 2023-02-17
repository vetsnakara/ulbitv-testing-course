import axios from "axios";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import usersMock from "../data/mockUsers";
import { renderWithRouter } from "../helpers/renderWithRouter";
import { Navbar } from "../Navbar";

jest.mock("axios");

describe("Routes", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("render MainPage", () => {
    renderWithRouter();
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("go to AboutPage", () => {
    renderWithRouter({
      element: <Navbar />,
    });

    const aboutLink = screen.getByTestId("about-link");

    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("go to UsersPage", async () => {
    axios.get.mockReturnValue({
      data: usersMock,
    });

    renderWithRouter({
      element: <Navbar />,
    });

    const usersLink = screen.getByTestId("users-link");

    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
    expect(axios.get).toBeCalledTimes(1);

    await waitFor(() => screen.findAllByTestId("user-item"));
  });

  test("go to UsersDetailsPage", async () => {
    axios.get.mockReturnValue({
      data: usersMock,
    });

    renderWithRouter({
      path: "/users",
    });

    expect(screen.getByTestId("users-page")).toBeInTheDocument();

    const userDetailsLinks = await waitFor(() =>
      screen.findAllByTestId("user-item")
    );
    expect(userDetailsLinks.length).toBe(usersMock.length);

    userEvent.click(userDetailsLinks[0]);
    expect(screen.getByTestId("user-details-page")).toBeInTheDocument();
  });

  test("NotFoundPage", () => {
    renderWithRouter({
      path: "/abc",
    });

    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
