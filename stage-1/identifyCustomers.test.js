const identifyCustomers = require("./identifyCustomers");

describe("Tests for identifyCustomers function", () => {
  test("function returns null if passed null", () => {
    input = null;
    output = null;
    expect(identifyCustomers(input)).toBe(output);
  });
});
