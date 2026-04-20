import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'sq-1',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description:
      'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if open brackets are closed by the same type and in the correct order.\n\nExample:\n- Input: "()" → Output: true\n- Input: "()[]{}" → Output: true\n- Input: "(]" → Output: false',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's consists of parentheses only: ()[]{}',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'isValid',
      params: [{ name: 's', type: 'String' }],
      returnType: 'boolean',
    },
    boilerplate: [
      'import java.util.Stack;',
      '',
      'public class Solution {',
      '    public boolean isValid(String s) {',
      '        // Write your solution here',
      '        return false;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Simple valid', inputs: ['()'], expected: true },
      { name: 'Multiple types', inputs: ['()[]{}'], expected: true },
      { name: 'Mismatched', inputs: ['(]'], expected: false },
      { name: 'Nested valid', inputs: ['{[()]}'], expected: true },
      { name: 'Unclosed bracket', inputs: ['('], expected: false },
    ],
    hints: [
      'Use a stack: push opening brackets, pop and compare when you see a closing bracket.',
      'If the stack is empty when you encounter a closing bracket, it\'s invalid.',
    ],
  },
  {
    id: 'sq-2',
    title: 'Min Stack',
    difficulty: 'Medium',
    description:
      'Design a stack that supports push, pop, top, and retrieving the minimum element, all in O(1) time. Implement the getMin operation: given an array of operations and an array of values, process all operations and return the result of the last getMin call.\n\nOperations: "push" (push value), "pop" (remove top), "getMin" (return current minimum).\n\nExample:\n- Input: ops = ["push","push","push","getMin"], vals = [3,1,2,0] → Output: 1',
    examples: [
      { input: 'ops = ["push","push","push","getMin"], vals = [3,1,2,0]', output: '1' },
      { input: 'ops = ["push","push","pop","getMin"], vals = [2,1,0,0]', output: '2' },
    ],
    constraints: [
      '1 <= ops.length <= 3 * 10^4',
      'ops[i] is "push", "pop", or "getMin"',
      '-2^31 <= val <= 2^31 - 1',
      'pop and getMin are always called on non-empty stacks.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'minStackGetMin',
      params: [
        { name: 'ops', type: 'String[]' },
        { name: 'vals', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.Stack;',
      '',
      'public class Solution {',
      '    public int minStackGetMin(String[] ops, int[] vals) {',
      '        // Write your solution here',
      '        // Process operations and return the result of the last getMin',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic getMin', inputs: [['push', 'push', 'push', 'getMin'], [3, 1, 2, 0]], expected: 1 },
      { name: 'Pop then getMin', inputs: [['push', 'push', 'pop', 'getMin'], [2, 1, 0, 0]], expected: 2 },
      { name: 'Single element', inputs: [['push', 'getMin'], [5, 0]], expected: 5 },
      { name: 'Negative values', inputs: [['push', 'push', 'push', 'getMin'], [-2, 0, -3, 0]], expected: -3 },
    ],
    hints: [
      'Use two stacks: one for values and one for tracking minimums.',
      'When pushing, also push onto the min stack if the value is <= current minimum.',
    ],
  },
  {
    id: 'sq-3',
    title: 'Evaluate Reverse Polish Notation',
    difficulty: 'Medium',
    description:
      'Evaluate the value of an arithmetic expression in Reverse Polish Notation (postfix). Valid operators are +, -, *, /. Each operand may be an integer or another expression. Division truncates toward zero.\n\nExample:\n- Input: ["2","1","+","3","*"] → Output: 9 ((2+1)*3)\n- Input: ["4","13","5","/","+"] → Output: 6 (4+(13/5))',
    examples: [
      { input: 'tokens = ["2","1","+","3","*"]', output: '9', explanation: '(2 + 1) * 3 = 9' },
      { input: 'tokens = ["4","13","5","/","+"]', output: '6', explanation: '4 + (13 / 5) = 6' },
    ],
    constraints: [
      '1 <= tokens.length <= 10^4',
      'tokens[i] is an operator (+, -, *, /) or an integer in range [-200, 200].',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'evalRPN',
      params: [{ name: 'tokens', type: 'String[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.Stack;',
      '',
      'public class Solution {',
      '    public int evalRPN(String[] tokens) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Addition and multiplication', inputs: [['2', '1', '+', '3', '*']], expected: 9 },
      { name: 'Division truncates', inputs: [['4', '13', '5', '/', '+']], expected: 6 },
      { name: 'Complex expression', inputs: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22 },
      { name: 'Single number', inputs: [['42']], expected: 42 },
    ],
    hints: [
      'Use a stack: push numbers, and when you see an operator, pop two operands, compute, and push the result.',
      'Be careful with operand order for subtraction and division.',
    ],
  },
  {
    id: 'sq-4',
    title: 'Daily Temperatures',
    difficulty: 'Medium',
    description:
      'Given an array of daily temperatures, return an array where each element tells you how many days you would have to wait until a warmer temperature. If there is no future warmer day, put 0.\n\nExample:\n- Input: [73,74,75,71,69,72,76,73] → Output: [1,1,4,2,1,1,0,0]\n- Input: [30,40,50,60] → Output: [1,1,1,0]',
    examples: [
      { input: 'temperatures = [73,74,75,71,69,72,76,73]', output: '[1,1,4,2,1,1,0,0]' },
      { input: 'temperatures = [30,40,50,60]', output: '[1,1,1,0]' },
    ],
    constraints: [
      '1 <= temperatures.length <= 10^5',
      '30 <= temperatures[i] <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'dailyTemperatures',
      params: [{ name: 'temperatures', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'import java.util.Stack;',
      '',
      'public class Solution {',
      '    public int[] dailyTemperatures(int[] temperatures) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed temperatures', inputs: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] },
      { name: 'Increasing temps', inputs: [[30, 40, 50, 60]], expected: [1, 1, 1, 0] },
      { name: 'Decreasing temps', inputs: [[60, 50, 40, 30]], expected: [0, 0, 0, 0] },
      { name: 'Single day', inputs: [[70]], expected: [0] },
    ],
    hints: [
      'Use a monotonic decreasing stack of indices.',
      'When the current temperature is higher than the stack top, pop and compute the difference in indices.',
    ],
  },
  {
    id: 'sq-5',
    title: 'Implement Queue Using Stacks',
    difficulty: 'Easy',
    description:
      'Implement a FIFO queue using two stacks. Given an array of operations ("enqueue", "dequeue") and corresponding values, process all operations and return the result of the last dequeue.\n\nExample:\n- Input: ops = ["enqueue","enqueue","enqueue","dequeue"], vals = [1,2,3,0] → Output: 1\n- Input: ops = ["enqueue","dequeue","enqueue","dequeue"], vals = [10,0,20,0] → Output: 20',
    examples: [
      { input: 'ops = ["enqueue","enqueue","enqueue","dequeue"], vals = [1,2,3,0]', output: '1' },
      { input: 'ops = ["enqueue","dequeue","enqueue","dequeue"], vals = [10,0,20,0]', output: '20' },
    ],
    constraints: [
      '1 <= ops.length <= 100',
      'dequeue is only called when the queue is non-empty.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'queueUsingStacks',
      params: [
        { name: 'ops', type: 'String[]' },
        { name: 'vals', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.Stack;',
      '',
      'public class Solution {',
      '    public int queueUsingStacks(String[] ops, int[] vals) {',
      '        // Implement a queue using two stacks',
      '        // Return the result of the last dequeue operation',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'FIFO order', inputs: [['enqueue', 'enqueue', 'enqueue', 'dequeue'], [1, 2, 3, 0]], expected: 1 },
      { name: 'Interleaved ops', inputs: [['enqueue', 'dequeue', 'enqueue', 'dequeue'], [10, 0, 20, 0]], expected: 20 },
      { name: 'Single enqueue/dequeue', inputs: [['enqueue', 'dequeue'], [42, 0]], expected: 42 },
      { name: 'Multiple dequeues', inputs: [['enqueue', 'enqueue', 'dequeue', 'dequeue'], [5, 10, 0, 0]], expected: 10 },
    ],
    hints: [
      'Use two stacks: one for enqueue and one for dequeue.',
      'When dequeue stack is empty, transfer all elements from the enqueue stack.',
    ],
  },
  {
    id: 'sq-6',
    title: 'Next Greater Element',
    difficulty: 'Medium',
    description:
      'Given an array of integers, for each element find the next greater element to its right. If no such element exists, output -1 for that position. Return the result array.\n\nExample:\n- Input: [4, 5, 2, 25] → Output: [5, 25, 25, -1]\n- Input: [13, 7, 6, 12] → Output: [-1, 12, 12, -1]',
    examples: [
      { input: 'nums = [4, 5, 2, 25]', output: '[5, 25, 25, -1]' },
      { input: 'nums = [13, 7, 6, 12]', output: '[-1, 12, 12, -1]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'nextGreaterElement',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'import java.util.Stack;',
      '',
      'public class Solution {',
      '    public int[] nextGreaterElement(int[] nums) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[4, 5, 2, 25]], expected: [5, 25, 25, -1] },
      { name: 'Decreasing then spike', inputs: [[13, 7, 6, 12]], expected: [-1, 12, 12, -1] },
      { name: 'All increasing', inputs: [[1, 2, 3, 4]], expected: [2, 3, 4, -1] },
      { name: 'All decreasing', inputs: [[4, 3, 2, 1]], expected: [-1, -1, -1, -1] },
    ],
    hints: [
      'Use a monotonic decreasing stack of indices.',
      'Iterate from right to left, or left to right resolving elements when a greater one is found.',
    ],
  },
  {
    id: 'sq-7',
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    description:
      'Given an array of integers and a window size k, return the maximum value in each sliding window of size k as the window moves from left to right.\n\nExample:\n- Input: nums = [1,3,-1,-3,5,3,6,7], k = 3 → Output: [3,3,5,5,6,7]\n- Input: nums = [1], k = 1 → Output: [1]',
    examples: [
      { input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3', output: '[3, 3, 5, 5, 6, 7]' },
      { input: 'nums = [1], k = 1', output: '[1]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      '1 <= k <= nums.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'maxSlidingWindow',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'import java.util.ArrayDeque;',
      'import java.util.Deque;',
      '',
      'public class Solution {',
      '    public int[] maxSlidingWindow(int[] nums, int k) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
      { name: 'Window size 1', inputs: [[1], 1], expected: [1] },
      { name: 'All same elements', inputs: [[5, 5, 5, 5], 2], expected: [5, 5, 5] },
      { name: 'Decreasing array', inputs: [[9, 8, 7, 6, 5], 3], expected: [9, 8, 7] },
    ],
    hints: [
      'Use a deque (double-ended queue) to maintain indices of useful elements.',
      'Remove elements from the front if they\'re outside the window, and from the back if they\'re smaller than the current element.',
    ],
  },
];
