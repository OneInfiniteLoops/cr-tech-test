const identifyAffectedCustomers = require("./identifyAffectedCustomers.js");

describe("tests", () => {
  test("should retrieve data from txt file", () => {
    return identifyAffectedCustomers().then((data) => {
      expect(typeof data).toBe("string");
    });
  });
});
