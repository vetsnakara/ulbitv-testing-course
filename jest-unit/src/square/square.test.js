const square = require("./square")

describe("square", () => {
    let spyMathPow = jest.spyOn(Math, 'pow');

    beforeEach(() => {});
    beforeAll(() => {});

    test("Correct value", () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).not.toBeUndefined();
    });

    test("Spy 1", () => {
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test("Spy 2", () => {
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {});
})