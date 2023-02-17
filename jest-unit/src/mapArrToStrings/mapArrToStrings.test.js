const mapArrToStrings = require("./mapArrToStrings")

describe("mapArrToStrings", () => {
    test("Correct value", () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    });

    test("Different types", () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, "abc"])).toEqual(['1', '2', '3'])
    });

    test("Empty array", () => {
        expect(mapArrToStrings([])).toEqual([])
    });

    test("Negotiation", () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
    });
})