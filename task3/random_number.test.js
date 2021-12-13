const { expect } = require('@jest/globals');
const randomInt = require('./task_3');

describe("Tests random integer", () => {
  intCases = [
    {
      from: 100,
      to: 110,
    },
    {
      from: 10,
      to: 15
    }
  ];
  intCases.forEach(test => {
    it (`from : ${test.from} expected: ${test.to}`, () => {
      const result = randomInt(test.from, test.to);
      console.log(result);
      expect(result).toBeGreaterThanOrEqual(test.from);
      expect(result).toBeLessThanOrEqual(test.to);
    });
  });
})