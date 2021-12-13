const { expect } = require('@jest/globals');
const filerArray = require('./task_2');

describe("Filer array test", () => {
  const noFilterArray = [
    {
      in: [1,2,3,4,5,6,7,8,9],
      expected: [1, 3, 5, 7, 9]
    },
    {
      in: [1,4,6,8,90],
      expected: [1, 6, 90]
    },
    {
      in: [true, false, false, false, false, true, true],
      expected: [true, false, false, true]
    }
  ];
  noFilterArray.forEach(arr => {
    it (
      `in : ${arr.in} expected: ${arr.expected}`,
      () => {
        const result = filerArray(arr.in);
        expect(result).toEqual(arr.expected);
      });
  })
});