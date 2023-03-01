const { stringLength, reverseString, calculator } = require('./index')
const calculators = new calculator();

describe ('Testing stringLength', () => {
  test('should be print is 5', () => {
    expect(stringLength('house')).toBe(5);
  });
  test('should be print "String is empty"', () => {
    expect(stringLength('')).toBe('String is empty');
  });
  test('should be print is "String is to long"', () => {
    expect(stringLength('house of carts blue')).toBe('String is to long');
  });
});

describe ('Testing reverseString', () => {
  test('should be print is "esuoh"', () => {
    expect(reverseString('house')).toBe('esuoh');
  });
  test('should be print is "rotsen"', () => {
    expect(reverseString('nestor')).toBe('rotsen');
  });
});

describe ('Testing add calculator', () => {
  test('should be print is "5"', () => {
    expect(calculators.add(3, 2)).toBe(5);
  });
  test('should be print is "10"', () => {
    expect(calculators.add(3, 7)).toBe(10);
  });
  test('should be print is "3"', () => {
    expect(calculators.add(1, 2)).toBe(3);
  });
});

describe ('Testing subtract calculator', () => {
  test('should be print is "5"', () => {
    expect(calculators.subtract(7, 2)).toBe(5);
  });
  test('should be print is "10"', () => {
    expect(calculators.subtract(17, 7)).toBe(10);
  });
  test('should be print is "3"', () => {
    expect(calculators.subtract(5, 2)).toBe(3);
  });
});

describe ('Testing divide calculator', () => {
  test('should be print is "5"', () => {
    expect(calculators.divide(20, 4)).toBe(5);
  });
  test('should be print is "10"', () => {
    expect(calculators.divide(100, 10)).toBe(10);
  });
  test('should be print is "3"', () => {
    expect(calculators.divide(6, 2)).toBe(3);
  });
});

describe ('Testing multiply calculator', () => {
  test('should be print is "20"', () => {
    expect(calculators.multiply(4, 5)).toBe(20);
  });
  test('should be print is "7"', () => {
    expect(calculators.multiply(1, 7)).toBe(7);
  });
  test('should be print is "6"', () => {
    expect(calculators.multiply(3, 2)).toBe(6);
  });
});
