const axios = require("axios")
const getData = require("./getData")
const mockUsers = require("./users")

// mock external module
jest.mock('axios');

describe("getData", () => {
    let response;

    beforeEach(() => {
        response = {
            data: mockUsers
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    test("Correct value", async () => {
        axios.get.mockReturnValue(response);

        const data = await getData();

        expect(axios.get).toBeCalledTimes(1);
        expect(data).toEqual(["1", "2"])
    });
})