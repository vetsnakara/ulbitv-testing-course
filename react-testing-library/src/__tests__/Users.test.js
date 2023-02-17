import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

import { Users } from "../components/Users";
import usersMock from "../data/mockUsers";

jest.mock("axios");

describe("Users", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders", async () => {
    axios.get.mockReturnValue({
      data: usersMock,
    });

    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    const users = await screen.findAllByTestId("user-item");

    expect(axios.get).toBeCalledTimes(1);
    expect(users.length).toBe(2);
  });
});
