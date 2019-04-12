const { newArray } = require('../lib/index');

describe('array functions', () => {
  it('modifies an array with array methods', () => {
    const testArray = [1, 3, 5, 7, 2];
    const result = newArray(testArray);
    expect(result).toEqual(['Wow, 7 is big!']);
  });
});
