import { getCounterValue } from "../../store/selectors/getCounterValue/getCounterValue";

describe("getCounterValue", () => {
  test("should return initial value", () => {
    expect(getCounterValue({})).toBe(0);
  });
});
