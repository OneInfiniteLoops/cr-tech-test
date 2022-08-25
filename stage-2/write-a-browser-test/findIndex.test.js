const { expect } = require("expect");
const findIndex = require("./findIndex.js");

describe("tests for findIndex function", () => {
  test("function returns null if null is passed", () => {
    const input = null;
    const output = null;
    expect(findIndex(input)).toBe(output);
  });
  test("function returns null if empty array is passed", () => {
    const input = [];
    const output = null;
    expect(findIndex(input)).toBe(output);
  });
  test("function returns null if the single layered array passed has no central index", () => {
    const input = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
    const output = [null];
    expect(findIndex(input)).toEqual(output);
  });
  test("function returns central index if the single layered array passed has central index", () => {
    const input = [[23, 50, 63, 90, 10, 30, 155, 23, 18]];
    const output = [4];
    expect(findIndex(input)).toEqual(output);
  });
  test("function returns central indices of inner arrays when a nested array is passed", () => {
    const input = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [23, 50, 63, 90, 10, 30, 155, 23, 18],
      [133, 60, 23, 92, 6, 7, 168, 16, 19],
      [30, 43, 29, 10, 50, 40, 99, 51, 12],
    ];
    const output = [null, 4, 3, 5];
    expect(findIndex(input)).toEqual(output);
  });
});
