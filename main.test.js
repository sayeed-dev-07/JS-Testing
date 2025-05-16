import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverse,
} from "./main";

//
// 🧪 capitalize()
//
describe("capitalize()", () => {
  test("capitalizes first letter of normal string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("already capitalized string returns same", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("empty string returns empty", () => {
    expect(capitalize("")).toBe("");
  });

  test("string with spaces before/after", () => {
    expect(capitalize("   world  ")).toBe("World");
  });

  test("number as string", () => {
    expect(capitalize("1world")).toBe("1world");
  });

  test("null and undefined", () => {
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
  });

  test("string with only spaces", () => {
    expect(capitalize("     ")).toBe("");
  });
});

//
// 🧪 reverse()
//
describe("reverse()", () => {
  test("reverses a basic string", () => {
    expect(reverse("hello")).toBe("olleh");
  });

  test("reverses string with spaces around", () => {
    expect(reverse("  world ")).toBe("dlrow");
  });

  test("empty string returns empty", () => {
    expect(reverse("")).toBe("");
  });

  test("string with punctuation", () => {
    expect(reverse("hello!")).toBe("!olleh");
  });

  test("string with spaces only", () => {
    expect(reverse("     ")).toBe("");
  });

  test("null and undefined", () => {
    expect(reverse(null)).toBe(null);
    expect(reverse(undefined)).toBe(undefined);
  });
});

//
// 🧪 calculator
//
describe("calculator", () => {
  describe("add()", () => {
    test("adds two numbers", () => {
      expect(calculator.add(3, 7)).toBe(10);
    });

    test("adds negative numbers", () => {
      expect(calculator.add(-5, -5)).toBe(-10);
    });

    test('returns "invalid" on NaN input', () => {
      expect(calculator.add(NaN, 2)).toBe("invalid");
      expect(calculator.add(2, NaN)).toBe("invalid");
    });

    test('string input returns "invalid"', () => {
      expect(calculator.add(4, "abc")).toBe("invalid");
    });
  });

  describe("subtract()", () => {
    test("subtracts numbers", () => {
      expect(calculator.subtract(10, 5)).toBe(5);
    });

    test("handles negatives", () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });

    test('returns "invalid" on invalid input', () => {
      expect(calculator.subtract(NaN, 1)).toBe("invalid");
    });
  });

  describe("multiply()", () => {
    test("multiplies numbers", () => {
      expect(calculator.multiply(5, 4)).toBe(20);
    });

    test("multiply by zero", () => {
      expect(calculator.multiply(7, 0)).toBe(0);
    });

    test('returns "invalid" on invalid input', () => {
      expect(calculator.multiply(5, NaN)).toBe("invalid");
    });
  });

  describe("divide()", () => {
    test("divides two numbers", () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divide by zero returns "infinite"', () => {
      expect(calculator.divide(10, 0)).toBe("infinite");
    });

    test("0 divided by a number is 0", () => {
      expect(calculator.divide(0, 10)).toBe(0);
    });

    test('returns "invalid" on invalid input', () => {
      expect(calculator.divide("a", 5)).toBe("invalid");
      expect(calculator.divide(5, NaN)).toBe("invalid");
    });
  });
});

//
// 🧪 Caesar Cipher
//

describe("Caesar Cipher - Encryption", () => {
  test("Encrypts lowercase letters with positive shift", () => {
    expect(caesarCipher("abc", 1)).toBe("bcd");
  });

  test("Encrypts uppercase letters with positive shift", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });

  test("Encrypts mixed case with positive shift", () => {
    expect(caesarCipher("Hello", 5)).toBe("Mjqqt");
  });

  test("Encrypts with shift of 0 (no change)", () => {
    expect(caesarCipher("Hello", 0)).toBe("Hello");
  });

  test("Encrypts with negative shift", () => {
    expect(caesarCipher("bcd", -1)).toBe("abc");
  });

  test("Encrypts with wraparound beyond z", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  test("Non-alphabetic characters stay the same", () => {
    expect(caesarCipher("a b.c!", 1)).toBe("b c.d!");
  });

  test("Handles large shift values", () => {
    expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 === 3
  });

  test("Handles negative large shifts", () => {
    expect(caesarCipher("abc", -55)).toBe("xyz"); // -55 % 26 === -3
  });

  test('Invalid input returns "invalid"', () => {
    expect(caesarCipher(123, 2)).toBe("invalid");
    expect(caesarCipher("abc", "x")).toBe("invalid");
  });
});

//
// 🧪 Caesar Cipher
//

describe("analyzeArray()", () => {
  test("arrays analysing when more than 5 elements are available", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("arrays analysing when 0 elements available", () => {
    expect(analyzeArray([])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    });
  });
  test("arrays analysing when 1 elements are available", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("arrays analysing when some elements are not number", () => {
    expect(analyzeArray([5, 9, 'sayeed'])).toEqual('invalid array [this array contains some value which are not numbers]');
  });
  test("arrays analysing when some elements are not number", () => {
    expect(analyzeArray(['sathi', 9, 'sayeed'])).toEqual('invalid array [this array contains some value which are not numbers]');
  });
});
