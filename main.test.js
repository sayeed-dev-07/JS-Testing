import { calculator, capitalize, reverse } from "./main";



// capitalize test

test('first character capitalized', () => {
  expect(capitalize('sayeed')).toBe('Sayeed');
});
test('first character capitalized [empty string] ', () => {
  expect(capitalize('')).toBe('');
});
test('first character capitalized [empty string] ', () => {
  expect(capitalize('SAYEED')).toBe('SAYEED');
});


// reverse test 

test('reverse the string', () => {
  expect(reverse('sayeed')).toBe('deeyas');
});
test('empty string should return empty', () => {
  expect(reverse('')).toBe('');
});
test('gap before and after string should not cause any problem', () => {
  expect(reverse('   whatthefuvk    ')).toBe('kvufehttahw');
});
test('reverse the string', () => {
  expect(reverse('deeyas')).toBe('sayeed');
});

// Calculator tests



test('calculator add two numbers', () => {
  expect(calculator.add(1, 5)).toBe(6);
});
test('calculator subtract two numbers', () => {
  expect(calculator.subtract(1, 5)).toBe(-4);
});
test('calculator subtract two numbers', () => {
  expect(calculator.subtract(15, 5)).toBe(10);
});
test('calculator multiply two numbers', () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});
test('calculator multiply two numbers while one number is zero', () => {
  expect(calculator.multiply(10, 0)).toBe(0);
});
test('calculator divide two numbers', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});
test('calculator divide two numbers while num1 is 0', () => {
  expect(calculator.divide(0, 5)).toBe(0);
});
test('calculator divide  two numbers while num2 is 0', () => {
  expect(calculator.divide(4, 0)).toBe('infinite');
});
test('calculator add  two numbers while num2 is string', () => {
  expect(calculator.add(4, 'sayeed')).toBe('invalid');
});
