import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'bas-1',
    title: 'Hello World Return',
    difficulty: 'Easy',
    description:
      'Write a method that returns the string "Hello, World!". This is the classic first program in any language.',
    examples: [
      {
        input: 'No input',
        output: '"Hello, World!"',
        explanation: 'The method simply returns the greeting string.',
      },
    ],
    constraints: ['Return exactly "Hello, World!" including the comma and exclamation mark.'],
    methodSignature: {
      className: 'Solution',
      methodName: 'helloWorld',
      params: [],
      returnType: 'String',
    },
    boilerplate: `public class Solution {
    public String helloWorld() {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic greeting', inputs: [], expected: 'Hello, World!' },
      { name: 'Exact match check', inputs: [], expected: 'Hello, World!' },
      { name: 'Not null check', inputs: [], expected: 'Hello, World!' },
    ],
    hints: [
      'Use the return keyword to return a String literal.',
      'Make sure the string matches exactly: "Hello, World!"',
    ],
  },
  {
    id: 'bas-2',
    title: 'Add Two Numbers',
    difficulty: 'Easy',
    description: 'Write a method that takes two integers and returns their sum.',
    examples: [
      { input: 'a = 5, b = 3', output: '8', explanation: '5 + 3 = 8' },
      { input: 'a = -1, b = 1', output: '0', explanation: '-1 + 1 = 0' },
    ],
    constraints: [
      '-1000 <= a, b <= 1000',
      'The result will fit within an int.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'add',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int add(int a, int b) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Two positives', inputs: [5, 3], expected: 8 },
      { name: 'Negative and positive', inputs: [-1, 1], expected: 0 },
      { name: 'Both zero', inputs: [0, 0], expected: 0 },
      { name: 'Large values', inputs: [1000, -1000], expected: 0 },
    ],
    hints: [
      'Use the + operator to add two integers.',
      'Return the result directly.',
    ],
  },
  {
    id: 'bas-3',
    title: 'Swap Two Numbers',
    difficulty: 'Easy',
    description:
      'Given two integers a and b, return an array where the values are swapped. The first element should be the original value of b and the second should be the original value of a.',
    examples: [
      { input: 'a = 5, b = 10', output: '[10, 5]', explanation: 'After swapping, b comes first and a comes second.' },
    ],
    constraints: [
      '-10000 <= a, b <= 10000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'swap',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] swap(int a, int b) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic swap', inputs: [5, 10], expected: [10, 5] },
      { name: 'Same values', inputs: [7, 7], expected: [7, 7] },
      { name: 'Negative values', inputs: [-3, 4], expected: [4, -3] },
      { name: 'Zero included', inputs: [0, 99], expected: [99, 0] },
    ],
    hints: [
      'You can return a new int array with the values in swapped order.',
      'Try using a temporary variable to hold one value during the swap.',
    ],
  },
  {
    id: 'bas-4',
    title: 'Type Casting — Double to Int',
    difficulty: 'Easy',
    description:
      'Given a double value, return its integer part by performing an explicit type cast. The fractional part should be truncated (not rounded).',
    examples: [
      { input: 'value = 9.99', output: '9', explanation: 'Casting 9.99 to int truncates the decimal, yielding 9.' },
      { input: 'value = -3.7', output: '-3', explanation: 'Casting -3.7 to int truncates toward zero, yielding -3.' },
    ],
    constraints: [
      '-100000.0 <= value <= 100000.0',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'castToInt',
      params: [{ name: 'value', type: 'double' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int castToInt(double value) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Positive with decimal', inputs: [9.99], expected: 9 },
      { name: 'Negative with decimal', inputs: [-3.7], expected: -3 },
      { name: 'Whole number', inputs: [5.0], expected: 5 },
      { name: 'Zero', inputs: [0.0], expected: 0 },
    ],
    hints: [
      'Use (int) to explicitly cast a double to an int in Java.',
      'Casting truncates toward zero — it does not round.',
    ],
  },
  {
    id: 'bas-5',
    title: 'Find ASCII Value',
    difficulty: 'Easy',
    description:
      'Given a character, return its ASCII (Unicode code point) value as an integer.',
    examples: [
      { input: "ch = 'A'", output: '65', explanation: "The ASCII value of 'A' is 65." },
      { input: "ch = 'a'", output: '97', explanation: "The ASCII value of 'a' is 97." },
    ],
    constraints: [
      'The input character is a printable ASCII character (32–126).',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'asciiValue',
      params: [{ name: 'ch', type: 'char' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int asciiValue(char ch) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Uppercase A', inputs: ['A'], expected: 65 },
      { name: 'Lowercase a', inputs: ['a'], expected: 97 },
      { name: 'Digit zero', inputs: ['0'], expected: 48 },
      { name: 'Space character', inputs: [' '], expected: 32 },
    ],
    hints: [
      'In Java, a char is implicitly an integer — you can simply cast or assign it to an int.',
      'Return (int) ch;',
    ],
  },
  {
    id: 'bas-6',
    title: 'Check Even or Odd',
    difficulty: 'Easy',
    description:
      'Given an integer, return "Even" if the number is even, or "Odd" if it is odd.',
    examples: [
      { input: 'n = 4', output: '"Even"' },
      { input: 'n = 7', output: '"Odd"' },
    ],
    constraints: [
      '-10000 <= n <= 10000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'evenOrOdd',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'String',
    },
    boilerplate: `public class Solution {
    public String evenOrOdd(int n) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Even number', inputs: [4], expected: 'Even' },
      { name: 'Odd number', inputs: [7], expected: 'Odd' },
      { name: 'Zero is even', inputs: [0], expected: 'Even' },
      { name: 'Negative odd', inputs: [-3], expected: 'Odd' },
      { name: 'Negative even', inputs: [-8], expected: 'Even' },
    ],
    hints: [
      'Use the modulo operator % to check divisibility by 2.',
      'n % 2 == 0 means the number is even.',
    ],
  },
  {
    id: 'bas-7',
    title: 'Temperature Conversion — Celsius to Fahrenheit',
    difficulty: 'Easy',
    description:
      'Given a temperature in Celsius as a double, convert it to Fahrenheit using the formula: F = C × 9/5 + 32. Return the result as a double.',
    examples: [
      { input: 'celsius = 0.0', output: '32.0', explanation: '0°C is the freezing point of water, which is 32°F.' },
      { input: 'celsius = 100.0', output: '212.0', explanation: '100°C is the boiling point of water, which is 212°F.' },
    ],
    constraints: [
      '-273.15 <= celsius <= 10000.0',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'celsiusToFahrenheit',
      params: [{ name: 'celsius', type: 'double' }],
      returnType: 'double',
    },
    boilerplate: `public class Solution {
    public double celsiusToFahrenheit(double celsius) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Freezing point', inputs: [0.0], expected: 32.0 },
      { name: 'Boiling point', inputs: [100.0], expected: 212.0 },
      { name: 'Body temperature', inputs: [37.0], expected: 98.6 },
      { name: 'Negative temperature', inputs: [-40.0], expected: -40.0 },
    ],
    hints: [
      'Use the formula: fahrenheit = celsius * 9.0 / 5.0 + 32;',
      'Be careful with integer division — use 9.0/5.0 instead of 9/5.',
    ],
  },
  {
    id: 'bas-8',
    title: 'Area of a Circle',
    difficulty: 'Easy',
    description:
      'Given the radius of a circle as a double, return its area. Use Math.PI for the value of π. The formula is: area = π × r².',
    examples: [
      { input: 'radius = 1.0', output: '3.141592653589793' },
      { input: 'radius = 5.0', output: '78.53981633974483' },
    ],
    constraints: [
      '0 <= radius <= 10000.0',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'circleArea',
      params: [{ name: 'radius', type: 'double' }],
      returnType: 'double',
    },
    boilerplate: `public class Solution {
    public double circleArea(double radius) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Unit circle', inputs: [1.0], expected: 3.141592653589793 },
      { name: 'Radius 5', inputs: [5.0], expected: 78.53981633974483 },
      { name: 'Zero radius', inputs: [0.0], expected: 0.0 },
      { name: 'Radius 10', inputs: [10.0], expected: 314.1592653589793 },
    ],
    hints: [
      'Use Math.PI for the value of π.',
      'The formula is Math.PI * radius * radius.',
    ],
  },
];
