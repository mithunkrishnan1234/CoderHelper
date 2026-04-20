import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'exc-1',
    title: 'Safe Division',
    difficulty: 'Easy',
    description:
      'Perform integer division safely. Given two integers a and b, return a / b. If b is zero, return -1 instead of throwing an exception.\n\nUse try-catch to handle the ArithmeticException.\n\nExample:\n- Input: a = 10, b = 3 → Output: 3\n- Input: a = 10, b = 0 → Output: -1',
    examples: [
      { input: 'a = 10, b = 3', output: '3', explanation: 'Integer division: 10 / 3 = 3' },
      { input: 'a = 10, b = 0', output: '-1', explanation: 'Division by zero returns -1' },
    ],
    constraints: [
      '-10^9 <= a <= 10^9',
      '-10^9 <= b <= 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'safeDivide',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int safeDivide(int a, int b) {',
      '        // Use try-catch to handle ArithmeticException',
      '        // Return a / b, or -1 if division by zero',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Normal division', inputs: [10, 3], expected: 3 },
      { name: 'Division by zero', inputs: [10, 0], expected: -1 },
      { name: 'Negative dividend', inputs: [-15, 4], expected: -3 },
      { name: 'Zero dividend', inputs: [0, 5], expected: 0 },
      { name: 'Exact division', inputs: [20, 4], expected: 5 },
    ],
    hints: [
      'Wrap the division in a try block.',
      'Catch ArithmeticException and return -1.',
      'Java throws ArithmeticException for integer division by zero.',
    ],
  },
  {
    id: 'exc-2',
    title: 'Parse Integer Safely',
    difficulty: 'Easy',
    description:
      'Parse a string to an integer safely. Given a string and a default value, return the parsed integer. If the string cannot be parsed (NumberFormatException), return the default value.\n\nExample:\n- Input: str = "123", defaultVal = 0 → Output: 123\n- Input: str = "abc", defaultVal = -1 → Output: -1\n- Input: str = "", defaultVal = 42 → Output: 42',
    examples: [
      { input: 'str = "123", defaultVal = 0', output: '123' },
      { input: 'str = "abc", defaultVal = -1', output: '-1', explanation: '"abc" is not a valid integer' },
      { input: 'str = "", defaultVal = 42', output: '42' },
    ],
    constraints: [
      '0 <= str.length <= 100',
      '-10^9 <= defaultVal <= 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'parseIntSafe',
      params: [
        { name: 'str', type: 'String' },
        { name: 'defaultVal', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int parseIntSafe(String str, int defaultVal) {',
      '        // Use try-catch with Integer.parseInt()',
      '        // Return parsed value or defaultVal on NumberFormatException',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Valid integer', inputs: ['123', 0], expected: 123 },
      { name: 'Invalid string', inputs: ['abc', -1], expected: -1 },
      { name: 'Empty string', inputs: ['', 42], expected: 42 },
      { name: 'Negative number string', inputs: ['-456', 0], expected: -456 },
      { name: 'Float string', inputs: ['3.14', 0], expected: 0 },
    ],
    hints: [
      'Use Integer.parseInt() inside a try block.',
      'Catch NumberFormatException to return the default value.',
      'Note that Integer.parseInt("3.14") throws NumberFormatException.',
    ],
  },
  {
    id: 'exc-3',
    title: 'Age Validation with Custom Exception',
    difficulty: 'Medium',
    description:
      'Validate a person\'s age using a custom exception. Given an age integer, validate it and return a message string:\n- If age < 0: return "Error: Age cannot be negative"\n- If age > 150: return "Error: Age cannot exceed 150"\n- Otherwise: return "Valid age: <age>"\n\nInternally, throw and catch a custom InvalidAgeException.\n\nExample:\n- Input: age = 25 → Output: "Valid age: 25"\n- Input: age = -5 → Output: "Error: Age cannot be negative"',
    examples: [
      { input: 'age = 25', output: '"Valid age: 25"' },
      { input: 'age = -5', output: '"Error: Age cannot be negative"' },
      { input: 'age = 200', output: '"Error: Age cannot exceed 150"' },
    ],
    constraints: [
      '-1000 <= age <= 1000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'validateAge',
      params: [{ name: 'age', type: 'int' }],
      returnType: 'String',
    },
    boilerplate: [
      'public class Solution {',
      '    public String validateAge(int age) {',
      '        // Define a custom InvalidAgeException class',
      '        // Throw it for invalid ages, catch it to return error message',
      '        // Return "Valid age: X" for valid ages',
      '        return "";',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Valid age', inputs: [25], expected: 'Valid age: 25' },
      { name: 'Negative age', inputs: [-5], expected: 'Error: Age cannot be negative' },
      { name: 'Too old', inputs: [200], expected: 'Error: Age cannot exceed 150' },
      { name: 'Zero age', inputs: [0], expected: 'Valid age: 0' },
      { name: 'Boundary age', inputs: [150], expected: 'Valid age: 150' },
    ],
    hints: [
      'Create a custom exception class that extends Exception.',
      'Throw the custom exception with a descriptive message.',
      'Catch it in the main method and return the exception message.',
    ],
  },
  {
    id: 'exc-4',
    title: 'Array Bounds Checker',
    difficulty: 'Easy',
    description:
      'Safely access an array element by index. Given an array of integers and an index, return the element at that index. If the index is out of bounds, return -1.\n\nUse try-catch to handle ArrayIndexOutOfBoundsException.\n\nExample:\n- Input: arr = [10, 20, 30, 40], index = 2 → Output: 30\n- Input: arr = [10, 20, 30, 40], index = 10 → Output: -1',
    examples: [
      { input: 'arr = [10, 20, 30, 40], index = 2', output: '30' },
      { input: 'arr = [10, 20, 30, 40], index = 10', output: '-1', explanation: 'Index 10 is out of bounds' },
    ],
    constraints: [
      '1 <= arr.length <= 10^4',
      '-10^9 <= arr[i] <= 10^9',
      '-100 <= index <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'safeGet',
      params: [
        { name: 'arr', type: 'int[]' },
        { name: 'index', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int safeGet(int[] arr, int index) {',
      '        // Use try-catch to handle ArrayIndexOutOfBoundsException',
      '        // Return the element at index, or -1 if out of bounds',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Valid index', inputs: [[10, 20, 30, 40], 2], expected: 30 },
      { name: 'Out of bounds (high)', inputs: [[10, 20, 30, 40], 10], expected: -1 },
      { name: 'Negative index', inputs: [[10, 20, 30], -1], expected: -1 },
      { name: 'First element', inputs: [[5, 15, 25], 0], expected: 5 },
      { name: 'Last element', inputs: [[1, 2, 3], 2], expected: 3 },
    ],
    hints: [
      'Wrap the array access in a try block.',
      'Catch ArrayIndexOutOfBoundsException and return -1.',
      'Negative indices also cause ArrayIndexOutOfBoundsException in Java.',
    ],
  },
];
