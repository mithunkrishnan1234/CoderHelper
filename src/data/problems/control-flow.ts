import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'cf-1',
    title: 'FizzBuzz',
    difficulty: 'Easy',
    description:
      'Given an integer n, return a String array of length n where: for each index i (1-based), if i is divisible by both 3 and 5 the value is "FizzBuzz", if divisible by 3 only it is "Fizz", if divisible by 5 only it is "Buzz", otherwise it is the string representation of i.',
    examples: [
      {
        input: 'n = 5',
        output: '["1", "2", "Fizz", "4", "Buzz"]',
        explanation: '3 → Fizz, 5 → Buzz, others are their number as strings.',
      },
    ],
    constraints: ['1 <= n <= 1000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'fizzBuzz',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'String[]',
    },
    boilerplate: `public class Solution {
    public String[] fizzBuzz(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Up to 5', inputs: [5], expected: ['1', '2', 'Fizz', '4', 'Buzz'] },
      { name: 'Up to 1', inputs: [1], expected: ['1'] },
      {
        name: 'Up to 15',
        inputs: [15],
        expected: [
          '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
          '11', 'Fizz', '13', '14', 'FizzBuzz',
        ],
      },
      { name: 'Up to 3', inputs: [3], expected: ['1', '2', 'Fizz'] },
    ],
    hints: [
      'Check divisibility by 15 first (both 3 and 5), then by 3, then by 5.',
      'Use String.valueOf(i) to convert an integer to its string form.',
    ],
  },
  {
    id: 'cf-2',
    title: 'Factorial',
    difficulty: 'Easy',
    description:
      'Given a non-negative integer n, return its factorial (n!). The factorial of 0 is 1.',
    examples: [
      { input: 'n = 5', output: '120', explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120' },
      { input: 'n = 0', output: '1' },
    ],
    constraints: ['0 <= n <= 20', 'Use long to avoid overflow.'],
    methodSignature: {
      className: 'Solution',
      methodName: 'factorial',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'long',
    },
    boilerplate: `public class Solution {
    public long factorial(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Factorial of 5', inputs: [5], expected: 120 },
      { name: 'Factorial of 0', inputs: [0], expected: 1 },
      { name: 'Factorial of 1', inputs: [1], expected: 1 },
      { name: 'Factorial of 10', inputs: [10], expected: 3628800 },
      { name: 'Factorial of 20', inputs: [20], expected: 2432902008176640000 },
    ],
    hints: [
      'Use a loop multiplying from 1 to n, or use recursion.',
      'Start with result = 1 and multiply in each iteration.',
    ],
  },
  {
    id: 'cf-3',
    title: 'Reverse a Number',
    difficulty: 'Easy',
    description:
      'Given an integer, return the number with its digits reversed. For negative numbers, reverse the digits and keep the negative sign.',
    examples: [
      { input: 'n = 1234', output: '4321' },
      { input: 'n = -567', output: '-765' },
    ],
    constraints: ['-1000000 <= n <= 1000000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'reverseNumber',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int reverseNumber(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Positive number', inputs: [1234], expected: 4321 },
      { name: 'Negative number', inputs: [-567], expected: -765 },
      { name: 'Single digit', inputs: [5], expected: 5 },
      { name: 'Trailing zeros', inputs: [1200], expected: 21 },
      { name: 'Zero', inputs: [0], expected: 0 },
    ],
    hints: [
      'Extract the last digit with n % 10 and build the reversed number.',
      'Handle negative numbers by working with the absolute value, then negate.',
    ],
  },
  {
    id: 'cf-4',
    title: 'Palindrome Number',
    difficulty: 'Easy',
    description:
      'Given an integer, return true if it is a palindrome (reads the same forwards and backwards). Negative numbers are not palindromes.',
    examples: [
      { input: 'n = 121', output: 'true', explanation: '121 reads the same from left to right and right to left.' },
      { input: 'n = -121', output: 'false', explanation: 'From left to right it reads -121, from right to left 121-.' },
    ],
    constraints: ['-1000000 <= n <= 1000000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isPalindrome',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isPalindrome(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Palindrome 121', inputs: [121], expected: true },
      { name: 'Negative number', inputs: [-121], expected: false },
      { name: 'Single digit', inputs: [7], expected: true },
      { name: 'Not palindrome', inputs: [123], expected: false },
      { name: 'Zero', inputs: [0], expected: true },
    ],
    hints: [
      'Negative numbers are never palindromes.',
      'Reverse the number and compare it to the original.',
    ],
  },
  {
    id: 'cf-5',
    title: 'Count Digits',
    difficulty: 'Easy',
    description:
      'Given a non-negative integer n, return the number of digits it contains. The number 0 has 1 digit.',
    examples: [
      { input: 'n = 12345', output: '5' },
      { input: 'n = 0', output: '1' },
    ],
    constraints: ['0 <= n <= 1000000000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'countDigits',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countDigits(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Five digits', inputs: [12345], expected: 5 },
      { name: 'Zero', inputs: [0], expected: 1 },
      { name: 'Single digit', inputs: [9], expected: 1 },
      { name: 'Large number', inputs: [1000000000], expected: 10 },
    ],
    hints: [
      'Repeatedly divide by 10 and count iterations.',
      'Handle the special case where n == 0 separately.',
    ],
  },
  {
    id: 'cf-6',
    title: 'Sum of Digits',
    difficulty: 'Easy',
    description:
      'Given a non-negative integer n, return the sum of its digits.',
    examples: [
      { input: 'n = 1234', output: '10', explanation: '1 + 2 + 3 + 4 = 10' },
    ],
    constraints: ['0 <= n <= 1000000000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'sumOfDigits',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int sumOfDigits(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [1234], expected: 10 },
      { name: 'Zero', inputs: [0], expected: 0 },
      { name: 'Single digit', inputs: [5], expected: 5 },
      { name: 'All nines', inputs: [9999], expected: 36 },
      { name: 'Large number', inputs: [999999999], expected: 81 },
    ],
    hints: [
      'Use n % 10 to get the last digit and n / 10 to remove it.',
      'Keep a running sum until n becomes 0.',
    ],
  },
  {
    id: 'cf-7',
    title: 'Multiplication Table',
    difficulty: 'Easy',
    description:
      'Given an integer n, return its multiplication table from 1 to 10 as an int array of length 10. The element at index i should be n × (i + 1).',
    examples: [
      { input: 'n = 5', output: '[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]' },
    ],
    constraints: ['-100 <= n <= 100'],
    methodSignature: {
      className: 'Solution',
      methodName: 'multiplicationTable',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] multiplicationTable(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Table of 5', inputs: [5], expected: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50] },
      { name: 'Table of 1', inputs: [1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      { name: 'Table of 0', inputs: [0], expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
      { name: 'Negative number', inputs: [-3], expected: [-3, -6, -9, -12, -15, -18, -21, -24, -27, -30] },
    ],
    hints: [
      'Create an int array of size 10 and fill it with n * (i + 1) in a loop.',
    ],
  },
  {
    id: 'cf-8',
    title: 'Prime Number Check',
    difficulty: 'Medium',
    description:
      'Given an integer n, return true if it is a prime number, false otherwise. A prime number is greater than 1 and has no divisors other than 1 and itself.',
    examples: [
      { input: 'n = 7', output: 'true', explanation: '7 is only divisible by 1 and 7.' },
      { input: 'n = 4', output: 'false', explanation: '4 is divisible by 2.' },
    ],
    constraints: ['0 <= n <= 1000000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isPrime',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isPrime(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Prime 7', inputs: [7], expected: true },
      { name: 'Not prime 4', inputs: [4], expected: false },
      { name: 'One is not prime', inputs: [1], expected: false },
      { name: 'Zero is not prime', inputs: [0], expected: false },
      { name: 'Two is prime', inputs: [2], expected: true },
      { name: 'Large prime', inputs: [104729], expected: true },
    ],
    hints: [
      'Numbers less than 2 are not prime.',
      'Only check divisors up to Math.sqrt(n) for efficiency.',
    ],
  },
];
