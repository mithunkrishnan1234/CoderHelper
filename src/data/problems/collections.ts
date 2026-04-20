import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'col-1',
    title: 'Remove All Occurrences',
    difficulty: 'Easy',
    description:
      'Given an array of integers and a target value, remove all occurrences of the target and return the resulting array.\n\nExample:\n- Input: nums = [3, 2, 3, 4, 3, 5], val = 3 → Output: [2, 4, 5]\n- Input: nums = [1, 1, 1], val = 1 → Output: []',
    examples: [
      { input: 'nums = [3,2,3,4,3,5], val = 3', output: '[2, 4, 5]' },
      { input: 'nums = [1,1,1], val = 1', output: '[]' },
    ],
    constraints: [
      '0 <= nums.length <= 100',
      '0 <= nums[i] <= 50',
      '0 <= val <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'removeAll',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'val', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] removeAll(int[] nums, int val) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Multiple occurrences', inputs: [[3, 2, 3, 4, 3, 5], 3], expected: [2, 4, 5] },
      { name: 'All same value', inputs: [[1, 1, 1], 1], expected: [] },
      { name: 'Value not present', inputs: [[1, 2, 3], 4], expected: [1, 2, 3] },
      { name: 'Empty array', inputs: [[], 5], expected: [] },
    ],
    hints: [
      'Use an ArrayList to collect elements that are not equal to val.',
      'Alternatively, use a two-pointer approach.',
    ],
  },
  {
    id: 'col-2',
    title: 'Find Intersection of Two Lists',
    difficulty: 'Easy',
    description:
      'Given two integer arrays, return a sorted array of their intersection (common elements). Each element in the result should appear as many times as it appears in both arrays.\n\nExample:\n- Input: nums1 = [1,2,2,1], nums2 = [2,2] → Output: [2,2]\n- Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] → Output: [4,9]',
    examples: [
      { input: 'nums1 = [1,2,2,1], nums2 = [2,2]', output: '[2, 2]' },
      { input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]', output: '[4, 9]' },
    ],
    constraints: [
      '1 <= nums1.length, nums2.length <= 1000',
      '0 <= nums1[i], nums2[i] <= 1000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'intersect',
      params: [
        { name: 'nums1', type: 'int[]' },
        { name: 'nums2', type: 'int[]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] intersect(int[] nums1, int[] nums2) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Duplicate intersection', inputs: [[1, 2, 2, 1], [2, 2]], expected: [2, 2] },
      { name: 'Mixed values', inputs: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [4, 9] },
      { name: 'No intersection', inputs: [[1, 2, 3], [4, 5, 6]], expected: [] },
      { name: 'Identical arrays', inputs: [[1, 2, 3], [1, 2, 3]], expected: [1, 2, 3] },
    ],
    hints: [
      'Use a HashMap to count occurrences in one array, then iterate the other.',
      'Sort both arrays and use two pointers for an alternative approach.',
    ],
  },
  {
    id: 'col-3',
    title: 'Sort by Frequency',
    difficulty: 'Medium',
    description:
      'Given an array of integers, sort them by decreasing frequency. If two elements have the same frequency, sort them in increasing order. Return the sorted array.\n\nExample:\n- Input: [1,1,2,2,2,3] → Output: [2,2,2,1,1,3]\n- Input: [2,3,1,3,2] → Output: [2,2,3,3,1]',
    examples: [
      { input: 'nums = [1,1,2,2,2,3]', output: '[2, 2, 2, 1, 1, 3]' },
      { input: 'nums = [2,3,1,3,2]', output: '[2, 2, 3, 3, 1]' },
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '-100 <= nums[i] <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'sortByFrequency',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] sortByFrequency(int[] nums) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Different frequencies', inputs: [[1, 1, 2, 2, 2, 3]], expected: [2, 2, 2, 1, 1, 3] },
      { name: 'Tie-breaking by value', inputs: [[2, 3, 1, 3, 2]], expected: [2, 2, 3, 3, 1] },
      { name: 'All same frequency', inputs: [[3, 1, 2]], expected: [1, 2, 3] },
      { name: 'Single element', inputs: [[5]], expected: [5] },
    ],
    hints: [
      'Count frequencies with a HashMap.',
      'Use a custom comparator: compare by frequency descending, then by value ascending.',
    ],
  },
  {
    id: 'col-4',
    title: 'Find Kth Largest Element',
    difficulty: 'Medium',
    description:
      'Given an unsorted array of integers and an integer k, return the kth largest element. Note that it is the kth largest in sorted order, not the kth distinct element.\n\nExample:\n- Input: nums = [3,2,1,5,6,4], k = 2 → Output: 5\n- Input: nums = [3,2,3,1,2,4,5,5,6], k = 4 → Output: 4',
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' },
    ],
    constraints: [
      '1 <= k <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findKthLargest',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int findKthLargest(int[] nums, int k) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[3, 2, 1, 5, 6, 4], 2], expected: 5 },
      { name: 'With duplicates', inputs: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4 },
      { name: 'k equals 1 (max)', inputs: [[7, 3, 9, 1], 1], expected: 9 },
      { name: 'k equals length (min)', inputs: [[5, 2, 8], 3], expected: 2 },
    ],
    hints: [
      'Sort the array and return the element at index length - k.',
      'For better performance, use a min-heap of size k or Quickselect algorithm.',
    ],
  },
  {
    id: 'col-5',
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    description:
      'Given k sorted integer arrays, merge them into one sorted array and return it.\n\nExample:\n- Input: [[1,4,5],[1,3,4],[2,6]] → Output: [1,1,2,3,4,4,5,6]\n- Input: [[],[1]] → Output: [1]',
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1, 1, 2, 3, 4, 4, 5, 6]' },
      { input: 'lists = [[],[1]]', output: '[1]' },
    ],
    constraints: [
      '0 <= k <= 10^4',
      '0 <= lists[i].length <= 500',
      '-10^4 <= lists[i][j] <= 10^4',
      'Each lists[i] is sorted in ascending order.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'mergeKSorted',
      params: [{ name: 'lists', type: 'int[][]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] mergeKSorted(int[][] lists) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Three lists', inputs: [[[1, 4, 5], [1, 3, 4], [2, 6]]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
      { name: 'One empty list', inputs: [[[], [1]]], expected: [1] },
      { name: 'All empty', inputs: [[[], []]], expected: [] },
      { name: 'Single list', inputs: [[[1, 2, 3]]], expected: [1, 2, 3] },
    ],
    hints: [
      'Use a PriorityQueue (min-heap) to always pick the smallest current element.',
      'Alternatively, merge lists pairwise (divide and conquer).',
    ],
  },
  {
    id: 'col-6',
    title: 'Rotate List',
    difficulty: 'Medium',
    description:
      'Given an array of integers and a non-negative integer k, rotate the list to the right by k places and return the resulting array. This is similar to rotating an ArrayList.\n\nExample:\n- Input: nums = [1,2,3,4,5], k = 2 → Output: [4,5,1,2,3]\n- Input: nums = [0,1,2], k = 4 → Output: [2,0,1]',
    examples: [
      { input: 'nums = [1,2,3,4,5], k = 2', output: '[4, 5, 1, 2, 3]' },
      { input: 'nums = [0,1,2], k = 4', output: '[2, 0, 1]' },
    ],
    constraints: [
      '1 <= nums.length <= 500',
      '-100 <= nums[i] <= 100',
      '0 <= k <= 2 * 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'rotateList',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] rotateList(int[] nums, int k) {',
      '        // Write your solution here',
      '        return nums;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic rotation', inputs: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
      { name: 'k > length', inputs: [[0, 1, 2], 4], expected: [2, 0, 1] },
      { name: 'k equals zero', inputs: [[1, 2, 3], 0], expected: [1, 2, 3] },
      { name: 'k equals length', inputs: [[1, 2, 3], 3], expected: [1, 2, 3] },
    ],
    hints: [
      'Use Collections.rotate() or implement it manually using k % size.',
      'The reversal trick works: reverse the whole list, then reverse each half.',
    ],
  },
];
