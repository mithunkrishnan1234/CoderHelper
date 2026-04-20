import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'gs-1',
    title: 'Filter and Transform Array',
    difficulty: 'Medium',
    description:
      'Using Java Streams, filter even numbers from an array and double them. Given an array of integers, return a new array containing only the even numbers, each multiplied by 2, in their original order.\n\nExample:\n- Input: nums = [1, 2, 3, 4, 5, 6] → Output: [4, 8, 12]\n  (Even numbers: 2, 4, 6 → doubled: 4, 8, 12)\n- Input: nums = [7, 14, 3, 8] → Output: [28, 16]\n  (Even numbers: 14, 8 → doubled: 28, 16)',
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5, 6]', output: '[4, 8, 12]', explanation: 'Filter evens (2,4,6), then double each' },
      { input: 'nums = [7, 14, 3, 8]', output: '[28, 16]', explanation: 'Filter evens (14,8), then double each' },
    ],
    constraints: [
      '0 <= nums.length <= 10^4',
      '-10^6 <= nums[i] <= 10^6',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'filterAndDouble',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'import java.util.Arrays;',
      '',
      'public class Solution {',
      '    public int[] filterAndDouble(int[] nums) {',
      '        // Use Java Streams to:',
      '        // 1. Filter even numbers (n % 2 == 0)',
      '        // 2. Double each (n * 2)',
      '        // 3. Collect to array',
      '        return new int[0];',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed numbers', inputs: [[1, 2, 3, 4, 5, 6]], expected: [4, 8, 12] },
      { name: 'No even numbers', inputs: [[1, 3, 5, 7]], expected: [] },
      { name: 'All even', inputs: [[2, 4, 6]], expected: [4, 8, 12] },
      { name: 'With negatives', inputs: [[-2, 3, -4, 5]], expected: [-4, -8] },
      { name: 'Empty array', inputs: [[]], expected: [] },
    ],
    hints: [
      'Use Arrays.stream(nums) to create an IntStream.',
      'Use .filter(n -> n % 2 == 0) to keep even numbers.',
      'Use .map(n -> n * 2) to double them.',
      'Use .toArray() to collect the result.',
    ],
  },
  {
    id: 'gs-2',
    title: 'Find Maximum in Generic Array',
    difficulty: 'Medium',
    description:
      'Find the maximum element in an array using generics and Comparable. Given an array of integers, implement a generic method that finds the maximum value. The method should work with any Comparable type, but will be tested with integers.\n\nExample:\n- Input: nums = [3, 7, 2, 9, 4] → Output: 9\n- Input: nums = [-5, -1, -8, -3] → Output: -1',
    examples: [
      { input: 'nums = [3, 7, 2, 9, 4]', output: '9' },
      { input: 'nums = [-5, -1, -8, -3]', output: '-1' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findMax',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    // Define a generic method: <T extends Comparable<T>> T findMaxGeneric(T[] arr)',
      '    // Then use it from the main method',
      '',
      '    public int findMax(int[] nums) {',
      '        // Convert int[] to Integer[], call your generic method,',
      '        // and return the result',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed positives', inputs: [[3, 7, 2, 9, 4]], expected: 9 },
      { name: 'All negatives', inputs: [[-5, -1, -8, -3]], expected: -1 },
      { name: 'Single element', inputs: [[42]], expected: 42 },
      { name: 'With duplicates', inputs: [[5, 5, 3, 5]], expected: 5 },
      { name: 'Large range', inputs: [[1000000, -1000000, 0]], expected: 1000000 },
    ],
    hints: [
      'Define a generic method with <T extends Comparable<T>>.',
      'Use compareTo() to compare elements instead of < or >.',
      'Convert int[] to Integer[] using Arrays.stream(nums).boxed().toArray(Integer[]::new).',
    ],
  },
  {
    id: 'gs-3',
    title: 'Reduce Array to Sum',
    difficulty: 'Medium',
    description:
      'Reduce an array to a single value using an accumulator pattern (similar to Stream.reduce). Given an array of integers and an initial value, accumulate the sum of all elements starting from the initial value.\n\nImplement this using the reduce pattern: start with the initial value, then combine each element using addition.\n\nExample:\n- Input: nums = [1, 2, 3, 4], initial = 0 → Output: 10 (0+1+2+3+4)\n- Input: nums = [5, 10, 15], initial = 100 → Output: 130 (100+5+10+15)',
    examples: [
      { input: 'nums = [1, 2, 3, 4], initial = 0', output: '10', explanation: '0 + 1 + 2 + 3 + 4 = 10' },
      { input: 'nums = [5, 10, 15], initial = 100', output: '130', explanation: '100 + 5 + 10 + 15 = 130' },
    ],
    constraints: [
      '0 <= nums.length <= 10^4',
      '-10^6 <= nums[i] <= 10^6',
      '-10^6 <= initial <= 10^6',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'reduceSum',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'initial', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.Arrays;',
      '',
      'public class Solution {',
      '    public int reduceSum(int[] nums, int initial) {',
      '        // Use Arrays.stream(nums).reduce(initial, accumulator)',
      '        // or implement the reduce pattern manually',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic sum from zero', inputs: [[1, 2, 3, 4], 0], expected: 10 },
      { name: 'Sum with initial value', inputs: [[5, 10, 15], 100], expected: 130 },
      { name: 'Empty array', inputs: [[], 42], expected: 42 },
      { name: 'Negative numbers', inputs: [[-1, -2, -3], 10], expected: 4 },
      { name: 'Single element', inputs: [[7], 0], expected: 7 },
    ],
    hints: [
      'Use Arrays.stream(nums).reduce(initial, Integer::sum).',
      'Alternatively, use a for loop with an accumulator variable.',
      'The reduce pattern: result = initial; for each element: result = result + element.',
    ],
  },
];
