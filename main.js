export function capitalize(str) {
  if (!str) {
    return str;
  }
  return str.trim().charAt(0).toUpperCase() + str.slice(1)
}

export function reverse(str) {
  if (!str) {
    return str;
  }
  return str.trim().split('').reverse().join('');
}

export const calculator = {
  add(num1, num2) {
    if (Number.isNaN(num1) || Number.isNaN(num2) || typeof num1 === 'string' || typeof num2 === 'string') return 'invalid';
    return num1 + num2;
  },
  subtract(num1, num2) {
   if (Number.isNaN(num1) || Number.isNaN(num2) || typeof num1 === 'string' || typeof num2 === 'string') return 'invalid';
    return num1 - num2;
  },
  multiply(num1, num2) {
   if (Number.isNaN(num1) || Number.isNaN(num2) || typeof num1 === 'string' || typeof num2 === 'string') return 'invalid';
    return num1 * num2;
  },
  divide(num1, num2) {
   if (Number.isNaN(num1) || Number.isNaN(num2) || typeof num1 === 'string' || typeof num2 === 'string') return 'invalid';
    if (num2 === 0) return 'infinite';
    return num1 / num2;
  }
};



