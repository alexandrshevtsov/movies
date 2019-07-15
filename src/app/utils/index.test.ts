import { stringToInteger } from './';

describe('stringToInteger', () => {
  it('stringToInteger valid input', () => {
    expect(stringToInteger('3')).toBe(3);
    expect(stringToInteger('3', 1)).toBe(3);
    expect(stringToInteger('0')).toBe(0);
    expect(stringToInteger('')).toBe(0);
    expect(stringToInteger('', 1)).toBe(1);
  });

  it('stringToInteger not valid input', () => {
    expect(stringToInteger('')).toBe(0);
    expect(stringToInteger('', 1)).toBe(1);
    expect(stringToInteger('abc')).toBe(0);
    expect(stringToInteger('def', 1)).toBe(1);
  });
});
