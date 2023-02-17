const validateValue = require("./validateValue")

describe("validateValue", () => {
    test("Correct value", () => {
        expect(validateValue(50)).toBe(true)
    });

    test("Less than correct value", () => {
        expect(validateValue(-1)).toBe(false)
    });

    test("More than correct value", () => {
        expect(validateValue(101)).toBe(false)
    });

    test("Corner case min", () => {
        expect(validateValue(0)).toBe(true)
    });

    test("Corner case max", () => {
        expect(validateValue(100)).toBe(true)
    });
})