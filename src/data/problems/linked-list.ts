import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'll-1',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    description:
      'Given a linked list represented as an integer array, reverse it and return the reversed array.\n\nExample:\n- Input: [1, 2, 3, 4, 5] → Output: [5, 4, 3, 2, 1]\n- Input: [1] → Output: [1]',
    examples: [
      { input: 'list = [1, 2, 3, 4, 5]', output: '[5, 4, 3, 2, 1]' },
      { input: 'list = [1]', output: '[1]' },
    ],
    constraints: [
      '0 <= list.length <= 5000',
      '-5000 <= list[i] <= 5000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'reverseList',
      params: [{ name: 'list', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] reverseList(int[] list) {',
      '        // Treat the array as a linked list and reverse it',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
      { name: 'Single element', inputs: [[1]], expected: [1] },
      { name: 'Two elements', inputs: [[1, 2]], expected: [2, 1] },
      { name: 'Empty list', inputs: [[]], expected: [] },
    ],
    hints: [
      'Use three pointers: prev, current, and next.',
      'Iterate through the list, reversing each link.',
    ],
  },
  {
    id: 'll-2',
    title: 'Detect Cycle',
    difficulty: 'Medium',
    description:
      'Given a linked list represented as an integer array and a pos value indicating where the tail connects back to (0-indexed, -1 means no cycle), determine if the linked list has a cycle. Return true if there is a cycle.\n\nExample:\n- Input: list = [3, 2, 0, -4], pos = 1 → Output: true (tail connects to index 1)\n- Input: list = [1, 2], pos = -1 → Output: false',
    examples: [
      { input: 'list = [3,2,0,-4], pos = 1', output: 'true', explanation: 'Tail connects to node at index 1.' },
      { input: 'list = [1, 2], pos = -1', output: 'false' },
    ],
    constraints: [
      '0 <= list.length <= 10^4',
      '-10^5 <= list[i] <= 10^5',
      '-1 <= pos < list.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'hasCycle',
      params: [
        { name: 'list', type: 'int[]' },
        { name: 'pos', type: 'int' },
      ],
      returnType: 'boolean',
    },
    boilerplate: [
      'public class Solution {',
      '    public boolean hasCycle(int[] list, int pos) {',
      '        // pos indicates where the tail connects back to (-1 = no cycle)',
      '        // Simulate cycle detection',
      '        // Write your solution here',
      '        return false;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Has cycle', inputs: [[3, 2, 0, -4], 1], expected: true },
      { name: 'No cycle', inputs: [[1, 2], -1], expected: false },
      { name: 'Self-loop', inputs: [[1], 0], expected: true },
      { name: 'Empty list', inputs: [[], -1], expected: false },
    ],
    hints: [
      'The pos parameter tells you if a cycle exists: pos >= 0 means cycle.',
      'In a real linked list, use Floyd\'s Tortoise and Hare algorithm with slow and fast pointers.',
    ],
  },
  {
    id: 'll-3',
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    description:
      'Given two sorted linked lists represented as integer arrays, merge them into one sorted array.\n\nExample:\n- Input: list1 = [1, 2, 4], list2 = [1, 3, 4] → Output: [1, 1, 2, 3, 4, 4]\n- Input: list1 = [], list2 = [0] → Output: [0]',
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1, 1, 2, 3, 4, 4]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' },
    ],
    constraints: [
      '0 <= list1.length, list2.length <= 50',
      '-100 <= list1[i], list2[i] <= 100',
      'Both lists are sorted in non-decreasing order.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'mergeTwoLists',
      params: [
        { name: 'list1', type: 'int[]' },
        { name: 'list2', type: 'int[]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] mergeTwoLists(int[] list1, int[] list2) {',
      '        // Merge two sorted lists into one sorted array',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic merge', inputs: [[1, 2, 4], [1, 3, 4]], expected: [1, 1, 2, 3, 4, 4] },
      { name: 'One empty list', inputs: [[], [0]], expected: [0] },
      { name: 'Both empty', inputs: [[], []], expected: [] },
      { name: 'Non-overlapping', inputs: [[1, 2, 3], [4, 5, 6]], expected: [1, 2, 3, 4, 5, 6] },
    ],
    hints: [
      'Use two pointers, comparing elements from each list.',
      'Append any remaining elements from the non-exhausted list.',
    ],
  },
  {
    id: 'll-4',
    title: 'Remove Nth Node From End',
    difficulty: 'Medium',
    description:
      'Given a linked list represented as an integer array and an integer n, remove the nth node from the end of the list and return the resulting array.\n\nExample:\n- Input: list = [1, 2, 3, 4, 5], n = 2 → Output: [1, 2, 3, 5]\n- Input: list = [1], n = 1 → Output: []',
    examples: [
      { input: 'list = [1,2,3,4,5], n = 2', output: '[1, 2, 3, 5]' },
      { input: 'list = [1], n = 1', output: '[]' },
    ],
    constraints: [
      '1 <= list.length <= 30',
      '0 <= list[i] <= 100',
      '1 <= n <= list.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'removeNthFromEnd',
      params: [
        { name: 'list', type: 'int[]' },
        { name: 'n', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] removeNthFromEnd(int[] list, int n) {',
      '        // Remove the nth node from the end',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Remove from middle', inputs: [[1, 2, 3, 4, 5], 2], expected: [1, 2, 3, 5] },
      { name: 'Remove only element', inputs: [[1], 1], expected: [] },
      { name: 'Remove first element', inputs: [[1, 2], 2], expected: [2] },
      { name: 'Remove last element', inputs: [[1, 2, 3], 1], expected: [1, 2] },
    ],
    hints: [
      'Use two pointers separated by n nodes.',
      'When the fast pointer reaches the end, the slow pointer is at the node before the target.',
    ],
  },
  {
    id: 'll-5',
    title: 'Find Middle Element',
    difficulty: 'Easy',
    description:
      'Given a linked list represented as an integer array, return the middle element. If there are two middle elements, return the second one.\n\nExample:\n- Input: [1, 2, 3, 4, 5] → Output: 3\n- Input: [1, 2, 3, 4, 5, 6] → Output: 4',
    examples: [
      { input: 'list = [1, 2, 3, 4, 5]', output: '3' },
      { input: 'list = [1, 2, 3, 4, 5, 6]', output: '4', explanation: 'Two middle nodes: 3 and 4, return the second.' },
    ],
    constraints: [
      '1 <= list.length <= 100',
      '1 <= list[i] <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'middleElement',
      params: [{ name: 'list', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int middleElement(int[] list) {',
      '        // Find and return the middle element',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Odd length', inputs: [[1, 2, 3, 4, 5]], expected: 3 },
      { name: 'Even length', inputs: [[1, 2, 3, 4, 5, 6]], expected: 4 },
      { name: 'Single element', inputs: [[1]], expected: 1 },
      { name: 'Two elements', inputs: [[1, 2]], expected: 2 },
    ],
    hints: [
      'Use slow and fast pointers: slow moves 1 step, fast moves 2 steps.',
      'When fast reaches the end, slow is at the middle.',
    ],
  },
  {
    id: 'll-6',
    title: 'Remove Duplicates from Sorted List',
    difficulty: 'Easy',
    description:
      'Given a sorted linked list represented as an integer array, delete all duplicates such that each element appears only once. Return the resulting array.\n\nExample:\n- Input: [1, 1, 2] → Output: [1, 2]\n- Input: [1, 1, 2, 3, 3] → Output: [1, 2, 3]',
    examples: [
      { input: 'list = [1, 1, 2]', output: '[1, 2]' },
      { input: 'list = [1, 1, 2, 3, 3]', output: '[1, 2, 3]' },
    ],
    constraints: [
      '0 <= list.length <= 300',
      '-100 <= list[i] <= 100',
      'The list is sorted in non-decreasing order.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'deleteDuplicates',
      params: [{ name: 'list', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] deleteDuplicates(int[] list) {',
      '        // Remove duplicates from sorted list',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic duplicates', inputs: [[1, 1, 2]], expected: [1, 2] },
      { name: 'Multiple duplicates', inputs: [[1, 1, 2, 3, 3]], expected: [1, 2, 3] },
      { name: 'No duplicates', inputs: [[1, 2, 3]], expected: [1, 2, 3] },
      { name: 'Empty list', inputs: [[]], expected: [] },
    ],
    hints: [
      'Since the list is sorted, duplicates are adjacent.',
      'Skip nodes where node.val == node.next.val.',
    ],
  },
  {
    id: 'll-7',
    title: 'Add Two Numbers',
    difficulty: 'Medium',
    description:
      'Given two non-empty arrays representing two non-negative integers (digits stored in reverse order), add them and return the sum as an array in reverse order. Each element contains a single digit.\n\nExample:\n- Input: l1 = [2, 4, 3], l2 = [5, 6, 4] → Output: [7, 0, 8] (342 + 465 = 807)\n- Input: l1 = [9, 9, 9], l2 = [1] → Output: [0, 0, 0, 1] (999 + 1 = 1000)',
    examples: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4]', output: '[7, 0, 8]', explanation: '342 + 465 = 807' },
      { input: 'l1 = [9,9,9], l2 = [1]', output: '[0, 0, 0, 1]', explanation: '999 + 1 = 1000' },
    ],
    constraints: [
      '1 <= l1.length, l2.length <= 100',
      '0 <= l1[i], l2[i] <= 9',
      'The numbers do not contain leading zeros except the number 0 itself.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'addTwoNumbers',
      params: [
        { name: 'l1', type: 'int[]' },
        { name: 'l2', type: 'int[]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] addTwoNumbers(int[] l1, int[] l2) {',
      '        // Add two numbers represented as reversed digit arrays',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic addition', inputs: [[2, 4, 3], [5, 6, 4]], expected: [7, 0, 8] },
      { name: 'Carry propagation', inputs: [[9, 9, 9], [1]], expected: [0, 0, 0, 1] },
      { name: 'Different lengths', inputs: [[1, 8], [0]], expected: [1, 8] },
      { name: 'Both zeros', inputs: [[0], [0]], expected: [0] },
    ],
    hints: [
      'Iterate through both arrays simultaneously, summing corresponding digits plus carry.',
      'Don\'t forget to handle the final carry if it exists.',
    ],
  },
];
