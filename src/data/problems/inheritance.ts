import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'inh-1',
    title: 'Shape Area Calculator',
    difficulty: 'Easy',
    description:
      'Calculate the area of different shapes using polymorphism. Given a shape type ("circle", "rectangle", or "triangle") and an array of dimensions, return the area as an integer (truncated).\n\n- Circle: dimensions = [radius]. Area = π * r²\n- Rectangle: dimensions = [width, height]. Area = w * h\n- Triangle: dimensions = [base, height]. Area = 0.5 * b * h\n\nExample:\n- Input: type = "rectangle", dimensions = [5, 3] → Output: 15\n- Input: type = "circle", dimensions = [7] → Output: 153 (π * 49 ≈ 153.93)',
    examples: [
      { input: 'type = "rectangle", dimensions = [5, 3]', output: '15' },
      { input: 'type = "circle", dimensions = [7]', output: '153', explanation: 'π * 7² ≈ 153.93, truncated to 153' },
    ],
    constraints: [
      'type is one of: "circle", "rectangle", "triangle"',
      '1 <= dimensions[i] <= 1000',
      'Circle has 1 dimension, rectangle has 2, triangle has 2',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'calculateArea',
      params: [
        { name: 'type', type: 'String' },
        { name: 'dimensions', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int calculateArea(String type, int[] dimensions) {',
      '        // Create a Shape base class/interface with an area() method',
      '        // Create Circle, Rectangle, Triangle subclasses',
      '        // Use polymorphism to calculate the area',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Rectangle area', inputs: ['rectangle', [5, 3]], expected: 15 },
      { name: 'Circle area', inputs: ['circle', [7]], expected: 153 },
      { name: 'Triangle area', inputs: ['triangle', [10, 6]], expected: 30 },
      { name: 'Unit circle', inputs: ['circle', [1]], expected: 3 },
      { name: 'Square via rectangle', inputs: ['rectangle', [4, 4]], expected: 16 },
    ],
    hints: [
      'Define an abstract Shape class with an abstract area() method.',
      'Each subclass (Circle, Rectangle, Triangle) overrides area().',
      'Use Math.PI for circle calculations and cast to int for truncation.',
    ],
  },
  {
    id: 'inh-2',
    title: 'Comparable Sorting',
    difficulty: 'Medium',
    description:
      'Implement the Comparable interface for a Student class to sort students by grade in ascending order. Given an array of grades, create Student objects, sort them using Comparable, and return the sorted grades array.\n\nExample:\n- Input: grades = [85, 92, 78, 95, 88] → Output: [78, 85, 88, 92, 95]\n- Input: grades = [50, 50, 60] → Output: [50, 50, 60]',
    examples: [
      { input: 'grades = [85, 92, 78, 95, 88]', output: '[78, 85, 88, 92, 95]' },
      { input: 'grades = [50, 50, 60]', output: '[50, 50, 60]' },
    ],
    constraints: [
      '1 <= grades.length <= 1000',
      '0 <= grades[i] <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'sortByGrade',
      params: [{ name: 'grades', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] sortByGrade(int[] grades) {',
      '        // Create a Student class that implements Comparable<Student>',
      '        // Sort the students and return grades in sorted order',
      '        return new int[0];',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed grades', inputs: [[85, 92, 78, 95, 88]], expected: [78, 85, 88, 92, 95] },
      { name: 'With duplicates', inputs: [[50, 50, 60]], expected: [50, 50, 60] },
      { name: 'Already sorted', inputs: [[10, 20, 30]], expected: [10, 20, 30] },
      { name: 'Reverse sorted', inputs: [[90, 70, 50, 30]], expected: [30, 50, 70, 90] },
    ],
    hints: [
      'Your Student class should implement Comparable<Student>.',
      'Override compareTo() to compare by grade.',
      'Use Arrays.sort() which uses the Comparable interface.',
    ],
  },
  {
    id: 'inh-3',
    title: 'Interface-Based Calculator',
    difficulty: 'Easy',
    description:
      'Design a calculator using an Operation interface. Given two integers and an operation string ("add", "subtract", "multiply", or "divide"), return the result. For divide, perform integer division. If division by zero, return 0.\n\nExample:\n- Input: a = 10, b = 3, operation = "add" → Output: 13\n- Input: a = 10, b = 3, operation = "divide" → Output: 3',
    examples: [
      { input: 'a = 10, b = 3, operation = "add"', output: '13' },
      { input: 'a = 10, b = 3, operation = "divide"', output: '3', explanation: 'Integer division: 10 / 3 = 3' },
    ],
    constraints: [
      '-10^6 <= a, b <= 10^6',
      'operation is one of: "add", "subtract", "multiply", "divide"',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'calculate',
      params: [
        { name: 'a', type: 'int' },
        { name: 'b', type: 'int' },
        { name: 'operation', type: 'String' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int calculate(int a, int b, String operation) {',
      '        // Define an Operation interface with an execute(int, int) method',
      '        // Create implementations for add, subtract, multiply, divide',
      '        // Use the interface to perform the calculation',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Addition', inputs: [10, 3, 'add'], expected: 13 },
      { name: 'Subtraction', inputs: [10, 3, 'subtract'], expected: 7 },
      { name: 'Multiplication', inputs: [10, 3, 'multiply'], expected: 30 },
      { name: 'Integer division', inputs: [10, 3, 'divide'], expected: 3 },
      { name: 'Division by zero', inputs: [10, 0, 'divide'], expected: 0 },
    ],
    hints: [
      'Define an interface with a single method: int execute(int a, int b).',
      'Create separate classes (or lambdas) for each operation.',
      'Use a Map or switch to select the right implementation.',
    ],
  },
  {
    id: 'inh-4',
    title: 'Vehicle Fuel Efficiency',
    difficulty: 'Medium',
    description:
      'Create an abstract Vehicle class with a method to calculate fuel efficiency (miles per gallon). Given a vehicle type ("car", "truck", or "motorcycle"), miles driven, and gallons used, return the fuel efficiency as an integer (truncated).\n\nEach vehicle type has a different efficiency bonus:\n- Car: base mpg (no bonus)\n- Motorcycle: +5 mpg bonus\n- Truck: -3 mpg penalty\n\nExample:\n- Input: type = "car", miles = 300, gallons = 10 → Output: 30\n- Input: type = "motorcycle", miles = 300, gallons = 10 → Output: 35 (30 + 5 bonus)',
    examples: [
      { input: 'type = "car", miles = 300, gallons = 10', output: '30' },
      { input: 'type = "motorcycle", miles = 300, gallons = 10', output: '35', explanation: 'Base 30 mpg + 5 bonus = 35' },
    ],
    constraints: [
      'type is one of: "car", "truck", "motorcycle"',
      '1 <= miles <= 10^6',
      '1 <= gallons <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'fuelEfficiency',
      params: [
        { name: 'type', type: 'String' },
        { name: 'miles', type: 'int' },
        { name: 'gallons', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int fuelEfficiency(String type, int miles, int gallons) {',
      '        // Create an abstract Vehicle class with abstract efficiency method',
      '        // Create Car, Truck, Motorcycle subclasses',
      '        // Each overrides the method with its own bonus/penalty',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Car efficiency', inputs: ['car', 300, 10], expected: 30 },
      { name: 'Motorcycle with bonus', inputs: ['motorcycle', 300, 10], expected: 35 },
      { name: 'Truck with penalty', inputs: ['truck', 300, 10], expected: 27 },
      { name: 'High efficiency car', inputs: ['car', 500, 10], expected: 50 },
    ],
    hints: [
      'Create an abstract Vehicle class with miles and gallons fields.',
      'Add an abstract method for the efficiency bonus.',
      'The base mpg is miles / gallons, then add the bonus.',
    ],
  },
  {
    id: 'inh-5',
    title: 'Method Overriding with Super',
    difficulty: 'Easy',
    description:
      'Demonstrate method overriding with super calls. Create a base class Animal with a describe() method that returns "Animal", and a subclass Dog that overrides describe() to return "Animal->Dog". Then create a subclass Puppy of Dog that returns "Animal->Dog->Puppy".\n\nGiven a level integer (1 = Animal, 2 = Dog, 3 = Puppy), return the appropriate describe string.\n\nExample:\n- Input: level = 1 → Output: "Animal"\n- Input: level = 3 → Output: "Animal->Dog->Puppy"',
    examples: [
      { input: 'level = 1', output: '"Animal"' },
      { input: 'level = 2', output: '"Animal->Dog"' },
      { input: 'level = 3', output: '"Animal->Dog->Puppy"' },
    ],
    constraints: [
      '1 <= level <= 3',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'describe',
      params: [{ name: 'level', type: 'int' }],
      returnType: 'String',
    },
    boilerplate: [
      'public class Solution {',
      '    public String describe(int level) {',
      '        // Create Animal (base), Dog (extends Animal), Puppy (extends Dog)',
      '        // Each overrides describe() and calls super.describe()',
      '        // Return the appropriate description based on level',
      '        return "";',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Base class', inputs: [1], expected: 'Animal' },
      { name: 'First subclass', inputs: [2], expected: 'Animal->Dog' },
      { name: 'Second subclass', inputs: [3], expected: 'Animal->Dog->Puppy' },
    ],
    hints: [
      'Dog.describe() should call super.describe() + "->Dog".',
      'Puppy.describe() should call super.describe() + "->Puppy".',
      'Use a switch or if-else to create the right object based on level.',
    ],
  },
  {
    id: 'inh-6',
    title: 'Diamond Problem Resolution',
    difficulty: 'Medium',
    description:
      'Java resolves the diamond problem using interfaces with default methods. Given two interface method values (valueA from InterfaceA and valueB from InterfaceB), create a class that implements both interfaces and resolves the conflict by returning the sum of both values.\n\nBoth interfaces have a default method getValue(). The implementing class must override it.\n\nExample:\n- Input: valueA = 10, valueB = 20 → Output: 30\n- Input: valueA = 5, valueB = 5 → Output: 10',
    examples: [
      { input: 'valueA = 10, valueB = 20', output: '30', explanation: 'Resolves conflict by summing both interface values' },
      { input: 'valueA = 5, valueB = 5', output: '10' },
    ],
    constraints: [
      '-10^6 <= valueA, valueB <= 10^6',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'resolveDiamond',
      params: [
        { name: 'valueA', type: 'int' },
        { name: 'valueB', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int resolveDiamond(int valueA, int valueB) {',
      '        // Define two interfaces with default getValue() methods',
      '        // Create a class that implements both',
      '        // Override getValue() to resolve the diamond problem',
      '        // Return the combined value',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic sum', inputs: [10, 20], expected: 30 },
      { name: 'Equal values', inputs: [5, 5], expected: 10 },
      { name: 'With negatives', inputs: [-10, 15], expected: 5 },
      { name: 'Zero values', inputs: [0, 0], expected: 0 },
    ],
    hints: [
      'Define two interfaces each with a default getValue() method.',
      'When a class implements both, Java requires you to override the conflicting method.',
      'In the override, you can call InterfaceA.super.getValue() and InterfaceB.super.getValue().',
    ],
  },
];
