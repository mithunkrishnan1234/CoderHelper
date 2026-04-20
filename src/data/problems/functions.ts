import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'fn-1',
    title: 'GCD of Two Numbers',
    difficulty: 'Easy',
    description:
      'Given two positive integers a and b, return their greatest common divisor (GCD). The GCD is the largest integer that divides both a and b without a remainder.',
    examples: [
      { input: 'a = 12, b = 8', output: '4', explanation: '4 is the largest number that divides both 12 and 8.' },
      { input: 'a = 7, b = 13', output: '1', explanation: '7 and 13 are coprime.' },
    ],
    constraints: ['1 <= a, b <= 1000000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'gcd',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int gcd(int a, int b) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'GCD of 12 and 8', inputs: [12, 8], expected: 4 },
      { name: 'Coprime numbers', inputs: [7, 13], expected: 1 },
      { name: 'Same numbers', inputs: [5, 5], expected: 5 },
      { name: 'One divides the other', inputs: [6, 18], expected: 6 },
      { name: 'Large values', inputs: [462, 1071], expected: 21 },
    ],
    hints: [
      'Use the Euclidean algorithm: gcd(a, b) = gcd(b, a % b).',
      'Base case: gcd(a, 0) = a.',
    ],
  },
  {
    id: 'fn-2',
    title: 'LCM of Two Numbers',
    difficulty: 'Easy',
    description:
      'Given two positive integers a and b, return their least common multiple (LCM). The LCM is the smallest positive integer that is divisible by both a and b.',
    examples: [
      { input: 'a = 4, b = 6', output: '12', explanation: '12 is the smallest number divisible by both 4 and 6.' },
    ],
    constraints: ['1 <= a, b <= 100000', 'The result fits in a long.'],
    methodSignature: {
      className: 'Solution',
      methodName: 'lcm',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'long',
    },
    boilerplate: `public class Solution {
    public long lcm(int a, int b) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'LCM of 4 and 6', inputs: [4, 6], expected: 12 },
      { name: 'Coprime numbers', inputs: [3, 7], expected: 21 },
      { name: 'Same numbers', inputs: [5, 5], expected: 5 },
      { name: 'One and any', inputs: [1, 99], expected: 99 },
      { name: 'Larger values', inputs: [12, 18], expected: 36 },
    ],
    hints: [
      'LCM can be computed as: lcm(a, b) = (a / gcd(a, b)) * b.',
      'Compute GCD first using the Euclidean algorithm.',
    ],
  },
  {
    id: 'fn-3',
    title: 'Power Function (Recursive)',
    difficulty: 'Medium',
    description:
      'Implement a recursive method that computes base^exponent. The exponent is guaranteed to be non-negative. Do not use Math.pow().',
    examples: [
      { input: 'base = 2, exponent = 10', output: '1024' },
      { input: 'base = 3, exponent = 0', output: '1', explanation: 'Any number to the power of 0 is 1.' },
    ],
    constraints: [
      '-100 <= base <= 100',
      '0 <= exponent <= 30',
      'The result fits in a long.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'power',
      params: [
        { name: 'base', type: 'int' },
        { name: 'exponent', type: 'int' },
      ],
      returnType: 'long',
    },
    boilerplate: `public class Solution {
    public long power(int base, int exponent) {
        // Implement this recursively without Math.pow
    }
}`,
    testCases: [
      { name: '2^10', inputs: [2, 10], expected: 1024 },
      { name: 'Any^0', inputs: [3, 0], expected: 1 },
      { name: '5^3', inputs: [5, 3], expected: 125 },
      { name: 'Negative base even exp', inputs: [-2, 4], expected: 16 },
      { name: 'Negative base odd exp', inputs: [-2, 3], expected: -8 },
      { name: '0^5', inputs: [0, 5], expected: 0 },
    ],
    hints: [
      'Base case: if exponent == 0, return 1.',
      'Recursive case: return base * power(base, exponent - 1).',
      'For efficiency, use fast exponentiation: if exponent is even, power(base*base, exponent/2).',
    ],
  },
  {
    id: 'fn-4',
    title: 'Fibonacci — Nth Number',
    difficulty: 'Medium',
    description:
      'Given a non-negative integer n, return the nth Fibonacci number. The Fibonacci sequence is: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n > 1.',
    examples: [
      { input: 'n = 6', output: '8', explanation: 'Sequence: 0, 1, 1, 2, 3, 5, 8' },
      { input: 'n = 0', output: '0' },
    ],
    constraints: ['0 <= n <= 45'],
    methodSignature: {
      className: 'Solution',
      methodName: 'fibonacci',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'long',
    },
    boilerplate: `public class Solution {
    public long fibonacci(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'F(6)', inputs: [6], expected: 8 },
      { name: 'F(0)', inputs: [0], expected: 0 },
      { name: 'F(1)', inputs: [1], expected: 1 },
      { name: 'F(10)', inputs: [10], expected: 55 },
      { name: 'F(45)', inputs: [45], expected: 1134903170 },
    ],
    hints: [
      'An iterative approach with two variables is more efficient than recursion.',
      'Use variables prev = 0, curr = 1 and update in a loop.',
    ],
  },
  {
    id: 'fn-5',
    title: 'Sum of Array',
    difficulty: 'Easy',
    description:
      'Given an integer array, return the sum of all its elements.',
    examples: [
      { input: 'arr = [1, 2, 3, 4, 5]', output: '15' },
    ],
    constraints: [
      '0 <= arr.length <= 10000',
      '-1000 <= arr[i] <= 1000',
      'The result fits in a long.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'sumArray',
      params: [{ name: 'arr', type: 'int[]' }],
      returnType: 'long',
    },
    boilerplate: `public class Solution {
    public long sumArray(int[] arr) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic array', inputs: [[1, 2, 3, 4, 5]], expected: 15 },
      { name: 'Empty array', inputs: [[]], expected: 0 },
      { name: 'Single element', inputs: [[42]], expected: 42 },
      { name: 'With negatives', inputs: [[-1, -2, 3, 4]], expected: 4 },
      { name: 'All zeros', inputs: [[0, 0, 0]], expected: 0 },
    ],
    hints: [
      'Use a for-each loop to iterate through the array.',
      'Keep a running sum and add each element.',
    ],
  },
  {
    id: 'fn-6',
    title: 'Find Min and Max in Array',
    difficulty: 'Easy',
    description:
      'Given a non-empty integer array, return an int array of size 2 where the first element is the minimum value and the second is the maximum value.',
    examples: [
      { input: 'arr = [3, 1, 4, 1, 5, 9]', output: '[1, 9]' },
    ],
    constraints: [
      '1 <= arr.length <= 10000',
      '-100000 <= arr[i] <= 100000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findMinMax',
      params: [{ name: 'arr', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] findMinMax(int[] arr) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Mixed values', inputs: [[3, 1, 4, 1, 5, 9]], expected: [1, 9] },
      { name: 'Single element', inputs: [[7]], expected: [7, 7] },
      { name: 'Already sorted', inputs: [[1, 2, 3, 4, 5]], expected: [1, 5] },
      { name: 'All negatives', inputs: [[-5, -3, -8, -1]], expected: [-8, -1] },
      { name: 'Duplicates', inputs: [[2, 2, 2]], expected: [2, 2] },
    ],
    hints: [
      'Initialize min and max to arr[0] then iterate through the rest.',
      'Or use Integer.MAX_VALUE and Integer.MIN_VALUE as initial values.',
    ],
  },
  {
    id: 'fn-7',
    title: 'Check If Array Is Sorted',
    difficulty: 'Easy',
    description:
      'Given an integer array, return true if it is sorted in non-decreasing order, false otherwise. An empty array or single-element array is considered sorted.',
    examples: [
      { input: 'arr = [1, 2, 3, 4, 5]', output: 'true' },
      { input: 'arr = [1, 3, 2, 4]', output: 'false' },
    ],
    constraints: ['0 <= arr.length <= 10000', '-100000 <= arr[i] <= 100000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isSorted',
      params: [{ name: 'arr', type: 'int[]' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isSorted(int[] arr) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Sorted array', inputs: [[1, 2, 3, 4, 5]], expected: true },
      { name: 'Unsorted array', inputs: [[1, 3, 2, 4]], expected: false },
      { name: 'Empty array', inputs: [[]], expected: true },
      { name: 'Single element', inputs: [[1]], expected: true },
      { name: 'With duplicates (sorted)', inputs: [[1, 1, 2, 3, 3]], expected: true },
      { name: 'Descending (not sorted)', inputs: [[5, 4, 3, 2, 1]], expected: false },
    ],
    hints: [
      'Compare each pair of adjacent elements.',
      'If arr[i] > arr[i+1] for any i, the array is not sorted.',
    ],
  },
  {
    id: 'fn-8',
    title: 'Binary to Decimal',
    difficulty: 'Medium',
    description:
      'Given a string representing a binary number (containing only \'0\' and \'1\'), convert it to its decimal (base-10) integer equivalent. Do not use Integer.parseInt() with a radix.',
    examples: [
      { input: 'binary = "1010"', output: '10', explanation: '1×8 + 0×4 + 1×2 + 0×1 = 10' },
      { input: 'binary = "11111111"', output: '255' },
    ],
    constraints: [
      '1 <= binary.length <= 30',
      'The input contains only characters \'0\' and \'1\'.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'binaryToDecimal',
      params: [{ name: 'binary', type: 'String' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int binaryToDecimal(String binary) {
        // Write your code here without using Integer.parseInt
    }
}`,
    testCases: [
      { name: 'Binary 1010', inputs: ['1010'], expected: 10 },
      { name: 'All ones (8 bits)', inputs: ['11111111'], expected: 255 },
      { name: 'Single zero', inputs: ['0'], expected: 0 },
      { name: 'Single one', inputs: ['1'], expected: 1 },
      { name: 'Power of two', inputs: ['10000'], expected: 16 },
    ],
    hints: [
      'Process each character from left to right: result = result * 2 + (currentDigit).',
      'Use charAt(i) - \'0\' to convert a char to its integer value.',
    ],
  },
];
