import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'ss-1',
    title: 'Binary Search',
    difficulty: 'Easy',
    description:
      'Given a sorted array of integers and a target value, return the index of the target if found, or -1 if not found.\n\nExample:\nInput: nums = [1, 3, 5, 7, 9], target = 5\nOutput: 2\n\nInput: nums = [1, 3, 5, 7, 9], target = 4\nOutput: -1',
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], target = 5', output: '2' },
      { input: 'nums = [1, 3, 5, 7, 9], target = 4', output: '-1' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^4 <= nums[i] <= 10^4',
      'nums is sorted in ascending order',
      'All values in nums are unique',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'binarySearch',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int binarySearch(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
    testCases: [
      { name: 'Target in middle', inputs: [[1, 3, 5, 7, 9], 5], expected: 2 },
      { name: 'Target not found', inputs: [[1, 3, 5, 7, 9], 4], expected: -1 },
      { name: 'Target at start', inputs: [[2, 4, 6, 8], 2], expected: 0 },
      { name: 'Target at end', inputs: [[2, 4, 6, 8], 8], expected: 3 },
      { name: 'Single element found', inputs: [[5], 5], expected: 0 },
      { name: 'Single element not found', inputs: [[5], 3], expected: -1 },
    ],
    hints: [
      'Use two pointers: left and right.',
      'Compare the middle element with the target.',
      'If target < mid, search the left half; if target > mid, search the right half.',
    ],
  },
  {
    id: 'ss-2',
    title: 'First and Last Position in Sorted Array',
    difficulty: 'Medium',
    description:
      'Given a sorted array of integers and a target value, find the starting and ending position of the target. Return [-1, -1] if the target is not found. Return the result as an int[] of length 2.\n\nExample:\nInput: nums = [5, 7, 7, 8, 8, 10], target = 8\nOutput: [3, 4]\n\nInput: nums = [5, 7, 7, 8, 8, 10], target = 6\nOutput: [-1, -1]',
    examples: [
      { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3, 4]' },
      { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1, -1]' },
    ],
    constraints: [
      '0 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      'nums is sorted in non-decreasing order',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'searchRange',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] searchRange(int[] nums, int target) {
        // Write your solution here
        return new int[]{-1, -1};
    }
}`,
    testCases: [
      { name: 'Target appears twice', inputs: [[5, 7, 7, 8, 8, 10], 8], expected: [3, 4] },
      { name: 'Target not found', inputs: [[5, 7, 7, 8, 8, 10], 6], expected: [-1, -1] },
      { name: 'Empty array', inputs: [[], 0], expected: [-1, -1] },
      { name: 'Single element match', inputs: [[1], 1], expected: [0, 0] },
      { name: 'All same elements', inputs: [[2, 2, 2, 2], 2], expected: [0, 3] },
    ],
    hints: [
      'Use binary search twice: once to find the leftmost position, once for the rightmost.',
      'For leftmost, when you find the target keep searching left.',
      'For rightmost, when you find the target keep searching right.',
    ],
  },
  {
    id: 'ss-3',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    description:
      'Given a rotated sorted array (no duplicates) and a target, return the index of the target or -1 if not found. The array was originally sorted in ascending order and then rotated at some pivot.\n\nExample:\nInput: nums = [4, 5, 6, 7, 0, 1, 2], target = 0\nOutput: 4\n\nInput: nums = [4, 5, 6, 7, 0, 1, 2], target = 3\nOutput: -1',
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
    ],
    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values are unique',
      'nums was sorted then rotated',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'search',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
}`,
    testCases: [
      { name: 'Target in right half', inputs: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 },
      { name: 'Target not present', inputs: [[4, 5, 6, 7, 0, 1, 2], 3], expected: -1 },
      { name: 'Target in left half', inputs: [[4, 5, 6, 7, 0, 1, 2], 5], expected: 1 },
      { name: 'Not rotated', inputs: [[1, 2, 3, 4, 5], 3], expected: 2 },
      { name: 'Single element', inputs: [[1], 1], expected: 0 },
    ],
    hints: [
      'Use modified binary search.',
      'Determine which half is sorted by comparing nums[left] with nums[mid].',
      'Check if the target lies in the sorted half, then narrow down accordingly.',
    ],
  },
  {
    id: 'ss-4',
    title: 'Merge Sort',
    difficulty: 'Medium',
    description:
      'Implement merge sort. Given an array of integers, return a new sorted array using the merge sort algorithm.\n\nExample:\nInput: nums = [5, 2, 3, 1]\nOutput: [1, 2, 3, 5]\n\nInput: nums = [3, 1, 2]\nOutput: [1, 2, 3]',
    examples: [
      { input: 'nums = [5, 2, 3, 1]', output: '[1, 2, 3, 5]' },
      { input: 'nums = [3, 1, 2]', output: '[1, 2, 3]' },
    ],
    constraints: [
      '1 <= nums.length <= 5 * 10^4',
      '-5 * 10^4 <= nums[i] <= 5 * 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'mergeSort',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] mergeSort(int[] nums) {
        // Write your solution here
        return nums;
    }
}`,
    testCases: [
      { name: 'Unsorted array', inputs: [[5, 2, 3, 1]], expected: [1, 2, 3, 5] },
      { name: 'Already sorted', inputs: [[1, 2, 3]], expected: [1, 2, 3] },
      { name: 'Reverse sorted', inputs: [[5, 4, 3, 2, 1]], expected: [1, 2, 3, 4, 5] },
      { name: 'Single element', inputs: [[1]], expected: [1] },
      { name: 'Duplicates', inputs: [[3, 1, 2, 3, 1]], expected: [1, 1, 2, 3, 3] },
    ],
    hints: [
      'Divide the array into two halves recursively.',
      'Merge the two sorted halves back together.',
      'Use a temporary array to merge.',
    ],
  },
  {
    id: 'ss-5',
    title: 'Quick Sort',
    difficulty: 'Medium',
    description:
      'Implement quick sort. Given an array of integers, return a new sorted array using the quick sort algorithm.\n\nExample:\nInput: nums = [10, 7, 8, 9, 1, 5]\nOutput: [1, 5, 7, 8, 9, 10]\n\nInput: nums = [4, 2]\nOutput: [2, 4]',
    examples: [
      { input: 'nums = [10, 7, 8, 9, 1, 5]', output: '[1, 5, 7, 8, 9, 10]' },
      { input: 'nums = [4, 2]', output: '[2, 4]' },
    ],
    constraints: [
      '1 <= nums.length <= 5 * 10^4',
      '-5 * 10^4 <= nums[i] <= 5 * 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'quickSort',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] quickSort(int[] nums) {
        // Write your solution here
        return nums;
    }
}`,
    testCases: [
      { name: 'Mixed array', inputs: [[10, 7, 8, 9, 1, 5]], expected: [1, 5, 7, 8, 9, 10] },
      { name: 'Two elements', inputs: [[4, 2]], expected: [2, 4] },
      { name: 'Already sorted', inputs: [[1, 2, 3, 4]], expected: [1, 2, 3, 4] },
      { name: 'Single element', inputs: [[42]], expected: [42] },
      { name: 'Negative numbers', inputs: [[-3, -1, -2, 0, 2]], expected: [-3, -2, -1, 0, 2] },
    ],
    hints: [
      'Pick a pivot element (e.g., last element).',
      'Partition the array so that elements less than the pivot come before it.',
      'Recursively sort the sub-arrays before and after the pivot.',
    ],
  },
  {
    id: 'ss-6',
    title: 'Find Peak Element',
    difficulty: 'Medium',
    description:
      'A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element and return its index. If the array contains multiple peaks, return the index of any one of them. You may assume that nums[-1] = nums[n] = -∞.\n\nExample:\nInput: nums = [1, 2, 3, 1]\nOutput: 2\n\nInput: nums = [1, 2, 1, 3, 5, 6, 4]\nOutput: 5 (or 1, both are valid peaks)',
    examples: [
      { input: 'nums = [1, 2, 3, 1]', output: '2' },
      { input: 'nums = [1, 2, 1, 3, 5, 6, 4]', output: '5', explanation: 'Index 1 or 5 are both valid peaks' },
    ],
    constraints: [
      '1 <= nums.length <= 1000',
      '-2^31 <= nums[i] <= 2^31 - 1',
      'nums[i] != nums[i + 1] for all valid i',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findPeakElement',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int findPeakElement(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Single peak', inputs: [[1, 2, 3, 1]], expected: 2 },
      { name: 'Peak at end region', inputs: [[1, 2, 1, 3, 5, 6, 4]], expected: 5 },
      { name: 'Single element', inputs: [[1]], expected: 0 },
      { name: 'Two elements ascending', inputs: [[1, 2]], expected: 1 },
      { name: 'Two elements descending', inputs: [[2, 1]], expected: 0 },
    ],
    hints: [
      'A linear scan works in O(n), but can you do better?',
      'Use binary search: if nums[mid] < nums[mid+1], the peak is to the right.',
      'If nums[mid] > nums[mid+1], the peak is at mid or to the left.',
    ],
  },
  {
    id: 'ss-7',
    title: 'Search Insert Position',
    difficulty: 'Easy',
    description:
      'Given a sorted array of distinct integers and a target value, return the index where the target is found. If not found, return the index where it would be inserted in order.\n\nExample:\nInput: nums = [1, 3, 5, 6], target = 5\nOutput: 2\n\nInput: nums = [1, 3, 5, 6], target = 2\nOutput: 1',
    examples: [
      { input: 'nums = [1, 3, 5, 6], target = 5', output: '2' },
      { input: 'nums = [1, 3, 5, 6], target = 2', output: '1' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^4 <= nums[i] <= 10^4',
      'nums contains distinct values sorted in ascending order',
      '-10^4 <= target <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'searchInsert',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int searchInsert(int[] nums, int target) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Target found', inputs: [[1, 3, 5, 6], 5], expected: 2 },
      { name: 'Insert in middle', inputs: [[1, 3, 5, 6], 2], expected: 1 },
      { name: 'Insert at end', inputs: [[1, 3, 5, 6], 7], expected: 4 },
      { name: 'Insert at start', inputs: [[1, 3, 5, 6], 0], expected: 0 },
      { name: 'Single element insert after', inputs: [[1], 2], expected: 1 },
    ],
    hints: [
      'This is a classic binary search problem.',
      'When the target is not found, the left pointer will be at the insertion point.',
    ],
  },
  {
    id: 'ss-8',
    title: 'Kth Smallest Element',
    difficulty: 'Hard',
    description:
      'Given an unsorted array of integers and an integer k, return the kth smallest element in the array. k is 1-indexed (k=1 means the smallest).\n\nExample:\nInput: nums = [3, 2, 1, 5, 6, 4], k = 2\nOutput: 2\n\nInput: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4\nOutput: 3',
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '2' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '3' },
    ],
    constraints: [
      '1 <= k <= nums.length <= 10^4',
      '-10^4 <= nums[i] <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'kthSmallest',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int kthSmallest(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[3, 2, 1, 5, 6, 4], 2], expected: 2 },
      { name: 'Duplicates', inputs: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 3 },
      { name: 'k equals 1 (minimum)', inputs: [[7, 10, 4, 3, 20, 15], 1], expected: 3 },
      { name: 'k equals length (maximum)', inputs: [[7, 10, 4, 3, 20, 15], 6], expected: 20 },
      { name: 'Single element', inputs: [[1], 1], expected: 1 },
    ],
    hints: [
      'Sorting gives O(n log n). Can you do better?',
      'Consider using a min-heap or max-heap of size k.',
      'Quickselect algorithm gives average O(n) time.',
    ],
  },
];
