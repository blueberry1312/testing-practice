const { stringLength, reverseString } = require('./index')

test('should be print is 5', () => {
  expect(stringLength('house')).toBe(5);
});
test('should be print "String is empty"', () => {
  expect(stringLength('')).toBe('String is empty');
});
test('should be print is "String is to long"', () => {
  expect(stringLength('house of carts blue')).toBe('String is to long');
});

test('should be print is "esuoh"', () => {
  expect(reverseString('house')).toBe('esuoh');
});
