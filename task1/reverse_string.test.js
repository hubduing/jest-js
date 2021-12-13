const reverseString = require('./task_1');

// test('Should reverse string ', () => {
//   expect(reverseString('qwerty a')).toBe('a ytrewq');
// });
// test('Should reverse string ', () => {
//   expect(reverseString('qwerty')).toBe('ytrewq');
// });

describe("My test", 
  () => {
    const testCases = [
      {
        inString: 'world',
        expected: 'dlrow'
      },
      {
        inString: 'rom',
        expected: 'mor'
      },
      {
        inString: 'kama!',
        expected: '!amak'
      }
    ];
    testCases.forEach(test => {
      it (
        `Входящая строка : ${test.inString} ожидаю: ${test.expected}`,
        () => {
          const result = reverseString(test.inString);
          expect(result).toBe(test.expected);
        }
      );
    })
  }
);