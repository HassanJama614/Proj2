// String Manipulation Functions:

// Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  // Array Functions:
  
  // Find Maximum
  function findMaximum(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array case
    }
    return Math.max(...arr);
  }
  
  // Find Minimum
  function findMinimum(arr) {
    if (arr.length === 0) {
      return undefined; // Handle empty array case
    }
    return Math.min(...arr);
  }
  
  // Sum of Array
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Filter Array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Mathematical Functions:
  
  // Factorial
  function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    }
    if (n === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Fibonacci Sequence
  function fibonacciSequence(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else {
      const sequence = [0, 1];
      while (sequence.length < n) {
        const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
      }
      return sequence;
    }
  }
