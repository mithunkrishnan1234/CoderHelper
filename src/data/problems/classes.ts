import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'cls-1',
    title: 'Rectangle Area Calculator',
    difficulty: 'Easy',
    description:
      'Design a Rectangle class with width and height, then calculate its area.\n\nGiven two integers representing width and height, create a Rectangle object and return its area.\n\nExample:\n- Input: width = 5, height = 3 → Output: 15\n- Input: width = 7, height = 7 → Output: 49',
    examples: [
      { input: 'width = 5, height = 3', output: '15', explanation: '5 * 3 = 15' },
      { input: 'width = 7, height = 7', output: '49', explanation: '7 * 7 = 49' },
    ],
    constraints: [
      '1 <= width, height <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'rectangleArea',
      params: [
        { name: 'width', type: 'int' },
        { name: 'height', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int rectangleArea(int width, int height) {',
      '        // Create a Rectangle class (as an inner class or locally)',
      '        // and use it to calculate the area',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic rectangle', inputs: [5, 3], expected: 15 },
      { name: 'Square', inputs: [7, 7], expected: 49 },
      { name: 'Thin rectangle', inputs: [1, 100], expected: 100 },
      { name: 'Unit square', inputs: [1, 1], expected: 1 },
    ],
    hints: [
      'Define an inner class Rectangle with fields for width and height.',
      'Add a getArea() method that returns width * height.',
    ],
  },
  {
    id: 'cls-2',
    title: 'Bank Account Operations',
    difficulty: 'Medium',
    description:
      'Design a BankAccount class that supports deposit and withdraw operations. Given an initial balance and an array of operations (positive = deposit, negative = withdraw), return the final balance. Withdrawals that would make the balance negative should be skipped.\n\nExample:\n- Input: initialBalance = 1000, operations = [200, -150, -2000, 300] → Output: 1350\n  (1000 + 200 = 1200, 1200 - 150 = 1050, skip -2000 as 1050 < 2000, 1050 + 300 = 1350)\n- Input: initialBalance = 500, operations = [-100, -100, -100] → Output: 200',
    examples: [
      { input: 'initialBalance = 1000, operations = [200, -150, -2000, 300]', output: '1350', explanation: 'Withdrawal of 2000 is skipped (insufficient funds)' },
      { input: 'initialBalance = 500, operations = [-100, -100, -100]', output: '200' },
    ],
    constraints: [
      '0 <= initialBalance <= 10^6',
      '-10^6 <= operations[i] <= 10^6',
      '1 <= operations.length <= 1000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'finalBalance',
      params: [
        { name: 'initialBalance', type: 'int' },
        { name: 'operations', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int finalBalance(int initialBalance, int[] operations) {',
      '        // Design a BankAccount class with deposit/withdraw methods',
      '        // Process all operations and return the final balance',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed operations with skip', inputs: [1000, [200, -150, -2000, 300]], expected: 1350 },
      { name: 'All withdrawals', inputs: [500, [-100, -100, -100]], expected: 200 },
      { name: 'All deposits', inputs: [0, [100, 200, 300]], expected: 600 },
      { name: 'All skipped withdrawals', inputs: [50, [-100, -200]], expected: 50 },
    ],
    hints: [
      'Create a BankAccount class with a balance field.',
      'The withdraw method should check if balance >= amount before withdrawing.',
      'Use a getter to return the current balance.',
    ],
  },
  {
    id: 'cls-3',
    title: 'Stack Using Array',
    difficulty: 'Medium',
    description:
      'Implement a Stack class using an array. Given an array of operations where "push X" pushes X onto the stack and "pop" removes the top element, return the top element after all operations. If the stack is empty at the end, return -1. Pop on an empty stack should be ignored.\n\nExample:\n- Input: ["push 5", "push 3", "pop", "push 7"] → Output: 7\n- Input: ["push 1", "pop", "pop"] → Output: -1',
    examples: [
      { input: 'operations = ["push 5", "push 3", "pop", "push 7"]', output: '7' },
      { input: 'operations = ["push 1", "pop", "pop"]', output: '-1', explanation: 'Second pop is ignored (empty stack)' },
    ],
    constraints: [
      '1 <= operations.length <= 1000',
      'Push values are integers in range [-1000, 1000]',
      'Operations are either "push X" or "pop"',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'stackTop',
      params: [{ name: 'operations', type: 'String[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int stackTop(String[] operations) {',
      '        // Implement a Stack class using an array (or ArrayList)',
      '        // Process operations and return the top element, or -1 if empty',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Push and pop', inputs: [['push 5', 'push 3', 'pop', 'push 7']], expected: 7 },
      { name: 'Empty after pops', inputs: [['push 1', 'pop', 'pop']], expected: -1 },
      { name: 'Only pushes', inputs: [['push 10', 'push 20', 'push 30']], expected: 30 },
      { name: 'Alternating', inputs: [['push 1', 'pop', 'push 2', 'pop', 'push 3']], expected: 3 },
    ],
    hints: [
      'Use an ArrayList or fixed-size array with a top pointer.',
      'Parse each operation string to determine push vs pop.',
      'For "push X", use split(" ") to get the value.',
    ],
  },
  {
    id: 'cls-4',
    title: 'Student Grade Average',
    difficulty: 'Easy',
    description:
      'Design a Student class with a name and a list of grades. Given an array of integer grades, create a Student and return their average grade as an integer (truncated, not rounded).\n\nExample:\n- Input: grades = [85, 90, 78, 92] → Output: 86\n- Input: grades = [100, 100, 100] → Output: 100',
    examples: [
      { input: 'grades = [85, 90, 78, 92]', output: '86', explanation: '(85+90+78+92)/4 = 86.25, truncated to 86' },
      { input: 'grades = [100, 100, 100]', output: '100' },
    ],
    constraints: [
      '1 <= grades.length <= 100',
      '0 <= grades[i] <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'averageGrade',
      params: [{ name: 'grades', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int averageGrade(int[] grades) {',
      '        // Design a Student class that stores grades',
      '        // and has a method to calculate average',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed grades', inputs: [[85, 90, 78, 92]], expected: 86 },
      { name: 'Perfect scores', inputs: [[100, 100, 100]], expected: 100 },
      { name: 'Single grade', inputs: [[73]], expected: 73 },
      { name: 'Low grades', inputs: [[10, 20, 30]], expected: 20 },
    ],
    hints: [
      'Create a Student class with an array or list of grades.',
      'The average method should sum all grades and divide by the count.',
      'Use integer division for truncation.',
    ],
  },
  {
    id: 'cls-5',
    title: 'Point Equality Check',
    difficulty: 'Medium',
    description:
      'Implement an equals method for a Point class with x and y coordinates. Given four integers representing two points (x1, y1) and (x2, y2), return 1 if the points are equal and 0 otherwise. Two points are equal if they have the same x and y values.\n\nExample:\n- Input: x1 = 3, y1 = 4, x2 = 3, y2 = 4 → Output: 1\n- Input: x1 = 1, y1 = 2, x2 = 2, y2 = 1 → Output: 0',
    examples: [
      { input: 'x1 = 3, y1 = 4, x2 = 3, y2 = 4', output: '1', explanation: 'Same coordinates, points are equal' },
      { input: 'x1 = 1, y1 = 2, x2 = 2, y2 = 1', output: '0', explanation: 'Different coordinates' },
    ],
    constraints: [
      '-10^6 <= x1, y1, x2, y2 <= 10^6',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'arePointsEqual',
      params: [
        { name: 'x1', type: 'int' },
        { name: 'y1', type: 'int' },
        { name: 'x2', type: 'int' },
        { name: 'y2', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int arePointsEqual(int x1, int y1, int x2, int y2) {',
      '        // Create a Point class with proper equals() and hashCode()',
      '        // Create two Point objects and check equality',
      '        // Return 1 if equal, 0 if not',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Equal points', inputs: [3, 4, 3, 4], expected: 1 },
      { name: 'Different points', inputs: [1, 2, 2, 1], expected: 0 },
      { name: 'Origin comparison', inputs: [0, 0, 0, 0], expected: 1 },
      { name: 'Negative coordinates', inputs: [-5, -3, -5, -3], expected: 1 },
    ],
    hints: [
      'Override the equals() method in your Point class.',
      'Check if the other object is an instance of Point using instanceof.',
      'Remember to also override hashCode() when overriding equals().',
    ],
  },
  {
    id: 'cls-6',
    title: 'Static Instance Counter',
    difficulty: 'Easy',
    description:
      'Design a class with a static counter that tracks how many instances have been created. Given an integer n, create n instances of the class and return the counter value.\n\nExample:\n- Input: n = 5 → Output: 5\n- Input: n = 0 → Output: 0',
    examples: [
      { input: 'n = 5', output: '5', explanation: 'Creating 5 instances increments counter to 5' },
      { input: 'n = 0', output: '0' },
    ],
    constraints: [
      '0 <= n <= 10000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'countInstances',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int countInstances(int n) {',
      '        // Design a class with a static counter field',
      '        // The constructor should increment the counter',
      '        // Create n instances and return the counter value',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Five instances', inputs: [5], expected: 5 },
      { name: 'Zero instances', inputs: [0], expected: 0 },
      { name: 'One instance', inputs: [1], expected: 1 },
      { name: 'Many instances', inputs: [100], expected: 100 },
    ],
    hints: [
      'Use a static int field to count instances.',
      'Increment the counter in the constructor.',
      'Remember to reset the counter before creating new instances (to avoid state from previous calls).',
    ],
  },
  {
    id: 'cls-7',
    title: 'Immutable Person Class',
    difficulty: 'Medium',
    description:
      'Design an immutable Person class with name and age. Given a name (String) and age (int), create an immutable Person object and return a formatted string "Name: <name>, Age: <age>".\n\nThe class should be truly immutable: final class, final fields, no setters.\n\nExample:\n- Input: name = "Alice", age = 30 → Output: "Name: Alice, Age: 30"\n- Input: name = "Bob", age = 25 → Output: "Name: Bob, Age: 25"',
    examples: [
      { input: 'name = "Alice", age = 30', output: '"Name: Alice, Age: 30"' },
      { input: 'name = "Bob", age = 25', output: '"Name: Bob, Age: 25"' },
    ],
    constraints: [
      '1 <= name.length <= 100',
      '0 <= age <= 150',
      'name contains only letters and spaces',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'createPerson',
      params: [
        { name: 'name', type: 'String' },
        { name: 'age', type: 'int' },
      ],
      returnType: 'String',
    },
    boilerplate: [
      'public class Solution {',
      '    public String createPerson(String name, int age) {',
      '        // Design an immutable Person class (final class, final fields, no setters)',
      '        // Create a Person and return its string representation',
      '        return "";',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic person', inputs: ['Alice', 30], expected: 'Name: Alice, Age: 30' },
      { name: 'Another person', inputs: ['Bob', 25], expected: 'Name: Bob, Age: 25' },
      { name: 'Young person', inputs: ['Charlie', 0], expected: 'Name: Charlie, Age: 0' },
      { name: 'Name with space', inputs: ['Mary Jane', 40], expected: 'Name: Mary Jane, Age: 40' },
    ],
    hints: [
      'Use the final keyword on both the class and its fields.',
      'Only provide getters, no setters.',
      'Initialize all fields through the constructor.',
    ],
  },
];
