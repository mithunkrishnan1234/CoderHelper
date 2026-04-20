import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'arr-1',
    title: 'Find Maximum Element',
    difficulty: 'Easy',
    description:
      'Given an array of integers, return the maximum element.\n\nExample:\n- Input: [3, 7, 2, 8, 1] → Output: 8\n- Input: [-5, -1, -9] → Output: -1',
    examples: [
      { input: 'nums = [3, 7, 2, 8, 1]', output: '8' },
      { input: 'nums = [-5, -1, -9]', output: '-1' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
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
      '    public int findMax(int[] nums) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic positive numbers', inputs: [[3, 7, 2, 8, 1]], expected: 8 },
      { name: 'All negative numbers', inputs: [[-5, -1, -9]], expected: -1 },
      { name: 'Single element', inputs: [[42]], expected: 42 },
      { name: 'Duplicates of max', inputs: [[5, 5, 3, 5]], expected: 5 },
    ],
    hints: [
      'Initialize max with the first element, then iterate through the rest.',
      'Consider using Integer.MIN_VALUE as the initial value.',
    ],
  },
  {
    id: 'arr-2',
    title: 'Find Second Largest',
    difficulty: 'Easy',
    description:
      'Given an array of integers with at least two distinct values, return the second largest element.\n\nExample:\n- Input: [12, 35, 1, 10, 34, 1] → Output: 34\n- Input: [10, 5, 10] → Output: 5',
    examples: [
      { input: 'nums = [12, 35, 1, 10, 34, 1]', output: '34' },
      { input: 'nums = [10, 5, 10]', output: '5' },
    ],
    constraints: [
      '2 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      'There are at least two distinct values.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'secondLargest',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int secondLargest(int[] nums) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[12, 35, 1, 10, 34, 1]], expected: 34 },
      { name: 'Duplicates of max', inputs: [[10, 5, 10]], expected: 5 },
      { name: 'Two elements', inputs: [[1, 2]], expected: 1 },
      { name: 'Negative numbers', inputs: [[-3, -1, -7, -2]], expected: -2 },
    ],
    hints: [
      'Track both the largest and second largest as you iterate.',
      'Be careful to skip duplicates of the largest value.',
    ],
  },
  {
    id: 'arr-3',
    title: 'Rotate Array by K',
    difficulty: 'Medium',
    description:
      'Given an array of integers and a non-negative integer k, rotate the array to the right by k steps and return the result.\n\nExample:\n- Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3 → Output: [5, 6, 7, 1, 2, 3, 4]\n- Input: nums = [-1, -100, 3, 99], k = 2 → Output: [3, 99, -1, -100]',
    examples: [
      { input: 'nums = [1,2,3,4,5,6,7], k = 3', output: '[5,6,7,1,2,3,4]' },
      { input: 'nums = [-1,-100,3,99], k = 2', output: '[3,99,-1,-100]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '0 <= k <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'rotate',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] rotate(int[] nums, int k) {',
      '        // Write your solution here',
      '        return nums;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic rotation', inputs: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [5, 6, 7, 1, 2, 3, 4] },
      { name: 'k larger than length', inputs: [[1, 2, 3], 5], expected: [2, 3, 1] },
      { name: 'k equals zero', inputs: [[1, 2, 3], 0], expected: [1, 2, 3] },
      { name: 'Single element', inputs: [[1], 7], expected: [1] },
    ],
    hints: [
      'Use k % nums.length to handle k larger than the array length.',
      'Try reversing subarrays: reverse entire array, then reverse first k elements, then reverse the rest.',
    ],
  },
  {
    id: 'arr-4',
    title: 'Remove Duplicates from Sorted Array',
    difficulty: 'Easy',
    description:
      'Given a sorted array of integers, remove the duplicates in-place and return a new array containing only the unique elements.\n\nExample:\n- Input: [1, 1, 2] → Output: [1, 2]\n- Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] → Output: [0, 1, 2, 3, 4]',
    examples: [
      { input: 'nums = [1, 1, 2]', output: '[1, 2]' },
      { input: 'nums = [0,0,1,1,1,2,2,3,3,4]', output: '[0, 1, 2, 3, 4]' },
    ],
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-100 <= nums[i] <= 100',
      'nums is sorted in non-decreasing order.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'removeDuplicates',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] removeDuplicates(int[] nums) {',
      '        // Write your solution here',
      '        return nums;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic duplicates', inputs: [[1, 1, 2]], expected: [1, 2] },
      { name: 'Multiple duplicates', inputs: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], expected: [0, 1, 2, 3, 4] },
      { name: 'No duplicates', inputs: [[1, 2, 3]], expected: [1, 2, 3] },
      { name: 'All same', inputs: [[5, 5, 5, 5]], expected: [5] },
    ],
    hints: [
      'Use two pointers: one for reading and one for writing.',
      'Since the array is sorted, duplicates are adjacent.',
    ],
  },
  {
    id: 'arr-5',
    title: 'Move Zeroes to End',
    difficulty: 'Easy',
    description:
      'Given an array of integers, move all zeroes to the end while maintaining the relative order of the non-zero elements. Return the modified array.\n\nExample:\n- Input: [0, 1, 0, 3, 12] → Output: [1, 3, 12, 0, 0]\n- Input: [0] → Output: [0]',
    examples: [
      { input: 'nums = [0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]' },
      { input: 'nums = [0]', output: '[0]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-2^31 <= nums[i] <= 2^31 - 1',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'moveZeroes',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] moveZeroes(int[] nums) {',
      '        // Write your solution here',
      '        return nums;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
      { name: 'Single zero', inputs: [[0]], expected: [0] },
      { name: 'No zeroes', inputs: [[1, 2, 3]], expected: [1, 2, 3] },
      { name: 'All zeroes', inputs: [[0, 0, 0]], expected: [0, 0, 0] },
    ],
    hints: [
      'Use a write pointer to place non-zero elements, then fill the rest with zeroes.',
      'Swap non-zero elements towards the front.',
    ],
  },
  {
    id: 'arr-6',
    title: 'Two Sum',
    difficulty: 'Medium',
    description:
      'Given an array of integers and a target, return the indices of the two numbers that add up to the target. You may assume each input has exactly one solution and you may not use the same element twice. Return the indices in ascending order.\n\nExample:\n- Input: nums = [2, 7, 11, 15], target = 9 → Output: [0, 1]\n- Input: nums = [3, 2, 4], target = 6 → Output: [1, 2]',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0, 1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1, 2]' },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Exactly one valid answer exists.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'twoSum',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] twoSum(int[] nums, int target) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[2, 7, 11, 15], 9], expected: [0, 1] },
      { name: 'Non-adjacent pair', inputs: [[3, 2, 4], 6], expected: [1, 2] },
      { name: 'Negative numbers', inputs: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
      { name: 'Same value pair', inputs: [[3, 3], 6], expected: [0, 1] },
    ],
    hints: [
      'A brute-force O(n²) approach checks every pair.',
      'Use a HashMap to store each number\'s index as you iterate for O(n) time.',
    ],
  },
  {
    id: 'arr-7',
    title: 'Merge Two Sorted Arrays',
    difficulty: 'Easy',
    description:
      'Given two sorted integer arrays, merge them into one sorted array and return it.\n\nExample:\n- Input: nums1 = [1, 3, 5], nums2 = [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]\n- Input: nums1 = [1], nums2 = [] → Output: [1]',
    examples: [
      { input: 'nums1 = [1,3,5], nums2 = [2,4,6]', output: '[1, 2, 3, 4, 5, 6]' },
      { input: 'nums1 = [1], nums2 = []', output: '[1]' },
    ],
    constraints: [
      '0 <= nums1.length, nums2.length <= 10^4',
      '-10^9 <= nums1[i], nums2[i] <= 10^9',
      'Both arrays are sorted in non-decreasing order.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'mergeSorted',
      params: [
        { name: 'nums1', type: 'int[]' },
        { name: 'nums2', type: 'int[]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] mergeSorted(int[] nums1, int[] nums2) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic merge', inputs: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
      { name: 'One empty array', inputs: [[1], []], expected: [1] },
      { name: 'Both empty', inputs: [[], []], expected: [] },
      { name: 'Overlapping values', inputs: [[1, 2, 2], [2, 3]], expected: [1, 2, 2, 2, 3] },
    ],
    hints: [
      'Use two pointers, one for each array, and compare elements.',
      'Don\'t forget to append remaining elements from the non-exhausted array.',
    ],
  },
  {
    id: 'arr-8',
    title: 'Find Missing Number',
    difficulty: 'Easy',
    description:
      'Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one number that is missing from the array.\n\nExample:\n- Input: [3, 0, 1] → Output: 2\n- Input: [9,6,4,2,3,5,7,0,1] → Output: 8',
    examples: [
      { input: 'nums = [3, 0, 1]', output: '2' },
      { input: 'nums = [9,6,4,2,3,5,7,0,1]', output: '8' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 10^4',
      '0 <= nums[i] <= n',
      'All numbers are unique.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'missingNumber',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int missingNumber(int[] nums) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Missing in middle', inputs: [[3, 0, 1]], expected: 2 },
      { name: 'Larger array', inputs: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
      { name: 'Missing zero', inputs: [[1]], expected: 0 },
      { name: 'Missing last', inputs: [[0, 1, 2]], expected: 3 },
    ],
    hints: [
      'The sum of 0..n is n*(n+1)/2. Subtract the actual sum.',
      'Alternatively, use XOR: a ^ a = 0, so XOR all indices and values.',
    ],
  },
  {
    id: 'arr-9',
    title: "Kadane's Maximum Subarray",
    difficulty: 'Medium',
    description:
      'Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return the sum.\n\nExample:\n- Input: [-2,1,-3,4,-1,2,1,-5,4] → Output: 6 (subarray [4,-1,2,1])\n- Input: [1] → Output: 1',
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'Subarray [4,-1,2,1] has the largest sum.' },
      { input: 'nums = [5,4,-1,7,8]', output: '23' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'maxSubArray',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'public class Solution {',
      '    public int maxSubArray(int[] nums) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Mixed values', inputs: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
      { name: 'All positive', inputs: [[5, 4, -1, 7, 8]], expected: 23 },
      { name: 'All negative', inputs: [[-3, -2, -5, -1]], expected: -1 },
      { name: 'Single element', inputs: [[1]], expected: 1 },
    ],
    hints: [
      'Track the current subarray sum and reset it when it drops below 0.',
      'Keep a global max that is updated whenever the current sum exceeds it.',
    ],
  },
  {
    id: 'arr-10',
    title: 'Product of Array Except Self',
    difficulty: 'Hard',
    description:
      'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must solve it without using division.\n\nExample:\n- Input: [1,2,3,4] → Output: [24,12,8,6]\n- Input: [-1,1,0,-3,3] → Output: [0,0,9,0,0]',
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24, 12, 8, 6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0, 0, 9, 0, 0]' },
    ],
    constraints: [
      '2 <= nums.length <= 10^5',
      '-30 <= nums[i] <= 30',
      'The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'productExceptSelf',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] productExceptSelf(int[] nums) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
      { name: 'Contains zero', inputs: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
      { name: 'Two elements', inputs: [[2, 3]], expected: [3, 2] },
      { name: 'Multiple zeroes', inputs: [[0, 0, 1]], expected: [0, 0, 0] },
    ],
    hints: [
      'Build prefix products (left to right) and suffix products (right to left).',
      'answer[i] = prefixProduct[i] * suffixProduct[i].',
      'You can do it in O(1) extra space by using the output array for prefix products and a running suffix variable.',
    ],
  },
];
