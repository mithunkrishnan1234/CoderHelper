import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'ops-1',
    title: 'Maximum of Two Numbers',
    difficulty: 'Easy',
    description:
      'Given two integers, return the larger of the two. If they are equal, return either one.',
    examples: [
      { input: 'a = 10, b = 20', output: '20' },
      { input: 'a = -5, b = -3', output: '-3', explanation: '-3 is greater than -5.' },
    ],
    constraints: ['-100000 <= a, b <= 100000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'max',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int max(int a, int b) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Second is larger', inputs: [10, 20], expected: 20 },
      { name: 'First is larger', inputs: [99, 1], expected: 99 },
      { name: 'Equal values', inputs: [7, 7], expected: 7 },
      { name: 'Negative numbers', inputs: [-5, -3], expected: -3 },
    ],
    hints: [
      'Use an if-else statement or the ternary operator.',
      'Math.max(a, b) also works.',
    ],
  },
  {
    id: 'ops-2',
    title: 'Absolute Value',
    difficulty: 'Easy',
    description:
      'Given an integer, return its absolute value without using Math.abs().',
    examples: [
      { input: 'n = -7', output: '7' },
      { input: 'n = 5', output: '5' },
    ],
    constraints: ['-100000 <= n <= 100000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'absoluteValue',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int absoluteValue(int n) {
        // Write your code here (do not use Math.abs)
    }
}`,
    testCases: [
      { name: 'Negative number', inputs: [-7], expected: 7 },
      { name: 'Positive number', inputs: [5], expected: 5 },
      { name: 'Zero', inputs: [0], expected: 0 },
      { name: 'Large negative', inputs: [-99999], expected: 99999 },
    ],
    hints: [
      'If n is negative, negate it: return -n;',
      'Use the ternary operator: return n < 0 ? -n : n;',
    ],
  },
  {
    id: 'ops-3',
    title: 'Check Leap Year',
    difficulty: 'Easy',
    description:
      'Given a year as an integer, return true if it is a leap year, false otherwise. A year is a leap year if: (1) it is divisible by 4, AND (2) it is NOT divisible by 100, UNLESS (3) it is also divisible by 400.',
    examples: [
      { input: 'year = 2024', output: 'true', explanation: '2024 is divisible by 4 and not by 100.' },
      { input: 'year = 1900', output: 'false', explanation: '1900 is divisible by 100 but not by 400.' },
      { input: 'year = 2000', output: 'true', explanation: '2000 is divisible by 400.' },
    ],
    constraints: ['1 <= year <= 9999'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isLeapYear',
      params: [{ name: 'year', type: 'int' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isLeapYear(int year) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Leap year 2024', inputs: [2024], expected: true },
      { name: 'Century non-leap 1900', inputs: [1900], expected: false },
      { name: 'Century leap 2000', inputs: [2000], expected: true },
      { name: 'Non-leap year', inputs: [2023], expected: false },
      { name: 'Divisible by 4 only', inputs: [2004], expected: true },
    ],
    hints: [
      'A leap year is divisible by 4 but not by 100, unless also divisible by 400.',
      'Use: (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)',
    ],
  },
  {
    id: 'ops-4',
    title: 'Power of Two (Bitwise)',
    difficulty: 'Medium',
    description:
      'Given a positive integer n, determine whether it is a power of two using bitwise operators. Return true if n is a power of two, false otherwise.',
    examples: [
      { input: 'n = 16', output: 'true', explanation: '16 = 2^4' },
      { input: 'n = 6', output: 'false', explanation: '6 is not a power of two.' },
    ],
    constraints: ['1 <= n <= 2^30'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isPowerOfTwo',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isPowerOfTwo(int n) {
        // Write your code here using bitwise operators
    }
}`,
    testCases: [
      { name: 'Power of two (16)', inputs: [16], expected: true },
      { name: 'Not power of two (6)', inputs: [6], expected: false },
      { name: 'Smallest power (1)', inputs: [1], expected: true },
      { name: 'Power of two (1024)', inputs: [1024], expected: true },
      { name: 'Not power of two (100)', inputs: [100], expected: false },
    ],
    hints: [
      'A power of two in binary has exactly one bit set (e.g., 1000).',
      'Use the trick: n > 0 && (n & (n - 1)) == 0',
    ],
  },
  {
    id: 'ops-5',
    title: 'Count Set Bits',
    difficulty: 'Medium',
    description:
      'Given a non-negative integer n, count the number of 1-bits (set bits) in its binary representation. This is also known as the Hamming weight or popcount.',
    examples: [
      { input: 'n = 11', output: '3', explanation: '11 in binary is 1011, which has three 1-bits.' },
      { input: 'n = 0', output: '0' },
    ],
    constraints: ['0 <= n <= 2^31 - 1'],
    methodSignature: {
      className: 'Solution',
      methodName: 'countSetBits',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countSetBits(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Binary 1011', inputs: [11], expected: 3 },
      { name: 'Zero', inputs: [0], expected: 0 },
      { name: 'All bits (255)', inputs: [255], expected: 8 },
      { name: 'Power of two', inputs: [1024], expected: 1 },
      { name: 'Large number', inputs: [2147483647], expected: 31 },
    ],
    hints: [
      'Use n & 1 to check the last bit and n >>= 1 to shift right.',
      'Alternative: use n = n & (n - 1) to clear the lowest set bit each time.',
    ],
  },
  {
    id: 'ops-6',
    title: 'XOR Swap',
    difficulty: 'Medium',
    description:
      'Given two integers a and b, swap them using only the XOR (^) bitwise operator — without using a temporary variable or arithmetic. Return the swapped values as an int array [b, a].',
    examples: [
      { input: 'a = 3, b = 5', output: '[5, 3]' },
    ],
    constraints: ['-100000 <= a, b <= 100000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'xorSwap',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] xorSwap(int a, int b) {
        // Swap a and b using only XOR (^)
        // Return new int[]{a, b} after swapping
    }
}`,
    testCases: [
      { name: 'Basic swap', inputs: [3, 5], expected: [5, 3] },
      { name: 'Same values', inputs: [7, 7], expected: [7, 7] },
      { name: 'With zero', inputs: [0, 42], expected: [42, 0] },
      { name: 'Negatives', inputs: [-10, 20], expected: [20, -10] },
    ],
    hints: [
      'XOR swap: a ^= b; b ^= a; a ^= b;',
      'This works because XOR is its own inverse: (a ^ b) ^ b == a.',
    ],
  },
  {
    id: 'ops-7',
    title: 'Evaluate Expression with Precedence',
    difficulty: 'Medium',
    description:
      'Given three integers a, b, and c, evaluate the expression: a + b * c - a / b (using integer division). Return the result. This tests understanding of operator precedence in Java.',
    examples: [
      {
        input: 'a = 10, b = 5, c = 3',
        output: '23',
        explanation: 'b * c = 15, a / b = 2. So: 10 + 15 - 2 = 23.',
      },
    ],
    constraints: [
      '-1000 <= a, c <= 1000',
      '1 <= b <= 1000 (b is always positive to avoid division by zero)',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'evaluateExpression',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
        { name: 'c', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int evaluateExpression(int a, int b, int c) {
        // Evaluate: a + b * c - a / b
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [10, 5, 3], expected: 23 },
      { name: 'All ones', inputs: [1, 1, 1], expected: 1 },
      { name: 'Larger values', inputs: [100, 10, 5], expected: 140 },
      { name: 'Negative a', inputs: [-12, 4, 2], expected: -1 },
    ],
    hints: [
      'Java follows standard math precedence: * and / before + and -.',
      'Integer division truncates toward zero in Java.',
    ],
  },
];
