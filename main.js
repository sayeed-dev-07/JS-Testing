export function capitalize(str) {
  if (!str) return str;
  let newstr = str.trim();
  let newstr2 = newstr.charAt(0).toUpperCase() + newstr.slice(1);
  return newstr2;
}

export function reverse(str) {
  if (!str) {
    return str;
  }
  return str.trim().split("").reverse().join("");
}

export const calculator = {
  add(num1, num2) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    )
      return "invalid";
    return num1 + num2;
  },
  subtract(num1, num2) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    )
      return "invalid";
    return num1 - num2;
  },
  multiply(num1, num2) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    )
      return "invalid";
    return num1 * num2;
  },
  divide(num1, num2) {
    if (
      Number.isNaN(num1) ||
      Number.isNaN(num2) ||
      typeof num1 === "string" ||
      typeof num2 === "string"
    )
      return "invalid";
    if (num2 === 0) return "infinite";
    return num1 / num2;
  },
};

export function caesarCipher(str, shift) {
  if (typeof str !== "string" || typeof shift !== "number") return "invalid";

  let num = Math.floor(shift);
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let word = str.trim();
  let Ciphertext = "";
  for (let i = 0; i < word.length; i++) {
    if (isAlphabet(word[i])) {
      let lowerCase = word[i].toLowerCase();
      let index = alphabet.indexOf(lowerCase);
      let newIndex = (index + shift) % 26;
      if (checkUpperCase(word[i])) {
        let letter = alphabet[newIndex].toUpperCase();
        Ciphertext += letter;
      } else {
        let letter = alphabet.at(newIndex);
        Ciphertext += letter;
      }
    } else {
      Ciphertext += word[i];
    }
  }
  return Ciphertext;
}

function checkUpperCase(a) {
  if (a === a.toUpperCase()) {
    return true;
  }
  return false;
}

function isAlphabet(char) {
  return /^[a-zA-Z]$/.test(char);
}

export function analyzeArray(arr) {
  if (arr.length === 0) {
    return createObject(0, 0, 0, 0);
  } else if (invalidArr(arr)) {
    return "invalid array [this array contains some value which are not numbers]";
  }
  if (arr.length === 1) {
    return createObject(arr[0], arr[0], arr[0], 1);
  }
  let average = averageCalc(arr);
  let min = arr.reduce((prev, cur) => {
    if (cur < prev) {
      prev = cur;
      return prev;
    } else {
      return prev;
    }
  });
  let max = arr.reduce((prev, cur) => {
    if (cur > prev) {
      prev = cur;
      return prev;
    } else {
      return prev;
    }
  });

  let length = arr.length;
  let obj = createObject(average, min, max, length);
  return obj;
}

function invalidArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i]
    if (typeof element !== 'number') {
      return true;
    }
    
  }
}

function createObject(average, min, max, length) {
  return {
    average,
    min,
    max,
    length,
  };
}

function averageCalc(arr) {
  let total = arr.reduce((prev, cur) => prev + cur, 0);
  return total / arr.length;
}
