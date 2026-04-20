import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'ip-1',
    title: 'Maximum Sum Subarray of Size K',
    difficulty: 'Easy',
    description:
      '**Pattern: Sliding Window**\n\nGiven an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.\n\nUse the sliding window technique: maintain a window of size k and slide it across the array, updating the sum by subtracting the element leaving the window and adding the element entering it.',
    examples: [
      { input: 'nums = [2, 1, 5, 1, 3, 2], k = 3', output: '9', explanation: 'Subarray [5, 1, 3] has the maximum sum of 9.' },
      { input: 'nums = [2, 3, 4, 1, 5], k = 2', output: '7', explanation: 'Subarray [3, 4] has the maximum sum of 7.' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      '1 <= k <= nums.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'maxSumSubarray',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int maxSumSubarray(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
      { name: 'Window size 2', inputs: [[2, 3, 4, 1, 5], 2], expected: 7 },
      { name: 'Single element window', inputs: [[4, -1, 7, 2], 1], expected: 7 },
      { name: 'Entire array as window', inputs: [[1, 2, 3], 3], expected: 6 },
      { name: 'Negative numbers', inputs: [[-1, -2, -3, -4], 2], expected: -3 },
    ],
    hints: [
      'Start by computing the sum of the first k elements.',
      'Slide the window by one position: subtract the leftmost element and add the next element.',
      'Track the maximum sum encountered during the slide.',
    ],
  },
  {
    id: 'ip-2',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    description:
      '**Pattern: Sliding Window**\n\nGiven a string s, find the length of the longest substring without repeating characters.\n\nUse a sliding window with a set or map to track characters in the current window. Expand the right boundary and shrink the left boundary when a duplicate is found.',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The longest substring without repeating characters is "abc" with length 3.' },
      { input: 's = "bbbbb"', output: '1', explanation: 'The longest substring is "b" with length 1.' },
      { input: 's = "pwwkew"', output: '3', explanation: '"wke" is the longest substring without repeating characters.' },
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's consists of English letters, digits, symbols and spaces',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'lengthOfLongestSubstring',
      params: [{ name: 's', type: 'String' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: ['abcabcbb'], expected: 3 },
      { name: 'All same characters', inputs: ['bbbbb'], expected: 1 },
      { name: 'Mixed repeats', inputs: ['pwwkew'], expected: 3 },
      { name: 'Empty string', inputs: [''], expected: 0 },
      { name: 'All unique', inputs: ['abcdef'], expected: 6 },
    ],
    hints: [
      'Use a HashSet to track characters in the current window.',
      'When you encounter a duplicate, shrink the window from the left until the duplicate is removed.',
      'A HashMap storing the last index of each character can make shrinking more efficient.',
    ],
  },
  {
    id: 'ip-3',
    title: 'Container With Most Water',
    difficulty: 'Medium',
    description:
      '**Pattern: Two Pointers**\n\nGiven n non-negative integers height[0], height[1], ..., height[n-1] where each represents a point at coordinate (i, height[i]), find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water the container can store.\n\nUse two pointers starting from both ends and move the pointer with the shorter height inward.',
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explanation: 'Lines at index 1 (height 8) and index 8 (height 7) form a container with area 7 * 7 = 49.' },
      { input: 'height = [1,1]', output: '1' },
    ],
    constraints: [
      '2 <= height.length <= 10^5',
      '0 <= height[i] <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'maxArea',
      params: [{ name: 'height', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
      { name: 'Two elements', inputs: [[1, 1]], expected: 1 },
      { name: 'Descending heights', inputs: [[5, 4, 3, 2, 1]], expected: 6 },
      { name: 'Same heights', inputs: [[3, 3, 3, 3]], expected: 9 },
    ],
    hints: [
      'Start with two pointers at the beginning and end of the array.',
      'The area is determined by the shorter line and the distance between the lines.',
      'Move the pointer pointing to the shorter line inward to potentially find a taller line.',
    ],
  },
  {
    id: 'ip-4',
    title: 'Three Sum Count',
    difficulty: 'Medium',
    description:
      '**Pattern: Two Pointers**\n\nGiven an array of integers nums, return the number of unique triplets [nums[i], nums[j], nums[k]] such that i != j != k and nums[i] + nums[j] + nums[k] == 0.\n\nSort the array first, then for each element use two pointers on the remaining portion to find pairs that sum to the negative of the current element. Skip duplicates to count only unique triplets.',
    examples: [
      { input: 'nums = [-1, 0, 1, 2, -1, -4]', output: '2', explanation: 'The unique triplets are [-1, -1, 2] and [-1, 0, 1].' },
      { input: 'nums = [0, 0, 0]', output: '1', explanation: 'The only triplet is [0, 0, 0].' },
    ],
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'threeSumCount',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int threeSumCount(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[-1, 0, 1, 2, -1, -4]], expected: 2 },
      { name: 'All zeros', inputs: [[0, 0, 0]], expected: 1 },
      { name: 'No triplet', inputs: [[1, 2, 3]], expected: 0 },
      { name: 'Multiple triplets', inputs: [[-2, -1, 0, 1, 2, 3]], expected: 2 },
    ],
    hints: [
      'Sort the array first to enable the two-pointer technique.',
      'Fix one element and use two pointers for the remaining two.',
      'Skip duplicate values for all three positions to avoid counting the same triplet twice.',
    ],
  },
  {
    id: 'ip-5',
    title: 'Happy Number',
    difficulty: 'Easy',
    description:
      '**Pattern: Fast & Slow Pointers**\n\nA happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Return true if n is a happy number.\n\nUse the fast and slow pointer (Floyd\'s cycle detection) approach: the slow pointer computes one step, the fast pointer computes two steps. If they meet at 1, it\'s happy.',
    examples: [
      { input: 'n = 19', output: 'true', explanation: '1² + 9² = 82 → 8² + 2² = 68 → 6² + 8² = 100 → 1² + 0² + 0² = 1. The number reaches 1.' },
      { input: 'n = 2', output: 'false', explanation: 'The process enters a cycle that never reaches 1.' },
    ],
    constraints: ['1 <= n <= 2^31 - 1'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isHappy',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isHappy(int n) {
        // Write your solution here
        return false;
    }
}`,
    testCases: [
      { name: 'Happy number 19', inputs: [19], expected: true },
      { name: 'Not happy number 2', inputs: [2], expected: false },
      { name: 'Happy number 1', inputs: [1], expected: true },
      { name: 'Happy number 7', inputs: [7], expected: true },
      { name: 'Not happy number 4', inputs: [4], expected: false },
    ],
    hints: [
      'Write a helper function to compute the sum of squares of digits.',
      'Use two runners: slow computes one step, fast computes two steps.',
      'If the fast runner reaches 1, return true. If slow == fast and neither is 1, return false.',
    ],
  },
  {
    id: 'ip-6',
    title: 'Find the Duplicate Number',
    difficulty: 'Medium',
    description:
      '**Pattern: Fast & Slow Pointers**\n\nGiven an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, there is exactly one repeated number. Find and return this repeated number without modifying the array and using only constant extra space.\n\nTreat the array as a linked list where nums[i] points to index nums[i]. Use Floyd\'s cycle detection to find the entrance of the cycle, which is the duplicate number.',
    examples: [
      { input: 'nums = [1, 3, 4, 2, 2]', output: '2' },
      { input: 'nums = [3, 1, 3, 4, 2]', output: '3' },
    ],
    constraints: [
      '1 <= n <= 10^5',
      'nums.length == n + 1',
      '1 <= nums[i] <= n',
      'There is only one repeated number, but it could be repeated more than once',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findDuplicate',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int findDuplicate(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Duplicate at end', inputs: [[1, 3, 4, 2, 2]], expected: 2 },
      { name: 'Duplicate at start', inputs: [[3, 1, 3, 4, 2]], expected: 3 },
      { name: 'Multiple occurrences', inputs: [[2, 2, 2, 2, 2]], expected: 2 },
      { name: 'Duplicate is 1', inputs: [[1, 1, 2]], expected: 1 },
    ],
    hints: [
      'Think of the array as a linked list: index i points to nums[i].',
      'Use Floyd\'s algorithm: a slow pointer moves one step, a fast pointer moves two steps.',
      'After they meet, reset one pointer to the start and move both one step at a time to find the cycle entrance.',
    ],
  },
  {
    id: 'ip-7',
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    description:
      '**Pattern: Monotonic Stack**\n\nGiven n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nUse a monotonic decreasing stack: for each bar, while the stack is not empty and the current bar is taller than the stack top, pop and calculate the trapped water between the current bar and the new stack top.',
    examples: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', output: '6', explanation: '6 units of water are trapped between the bars.' },
      { input: 'height = [4,2,0,3,2,5]', output: '9' },
    ],
    constraints: [
      'n == height.length',
      '1 <= n <= 2 * 10^4',
      '0 <= height[i] <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'trap',
      params: [{ name: 'height', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int trap(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Classic case', inputs: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
      { name: 'Valley case', inputs: [[4, 2, 0, 3, 2, 5]], expected: 9 },
      { name: 'No water', inputs: [[1, 2, 3, 4, 5]], expected: 0 },
      { name: 'Flat surface', inputs: [[3, 3, 3]], expected: 0 },
      { name: 'Single bar', inputs: [[5]], expected: 0 },
    ],
    hints: [
      'A monotonic decreasing stack stores indices of bars in decreasing height order.',
      'When you find a bar taller than the stack top, water can be trapped between the current bar and the one below the top.',
      'The water height is min(left boundary, right boundary) - bottom height, multiplied by the width.',
    ],
  },
  {
    id: 'ip-8',
    title: 'Largest Rectangle in Histogram',
    difficulty: 'Hard',
    description:
      '**Pattern: Monotonic Stack**\n\nGiven an array of integers heights representing the histogram\'s bar heights where the width of each bar is 1, return the area of the largest rectangle in the histogram.\n\nUse a monotonic increasing stack to efficiently find, for each bar, how far left and right it can extend as the shortest bar.',
    examples: [
      { input: 'heights = [2,1,5,6,2,3]', output: '10', explanation: 'The largest rectangle has area 10, formed by heights[2] and heights[3] (5 and 6, width 2).' },
      { input: 'heights = [2,4]', output: '4' },
    ],
    constraints: [
      '1 <= heights.length <= 10^5',
      '0 <= heights[i] <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'largestRectangleArea',
      params: [{ name: 'heights', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int largestRectangleArea(int[] heights) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[2, 1, 5, 6, 2, 3]], expected: 10 },
      { name: 'Two bars', inputs: [[2, 4]], expected: 4 },
      { name: 'Single bar', inputs: [[7]], expected: 7 },
      { name: 'All same height', inputs: [[3, 3, 3, 3]], expected: 12 },
      { name: 'Descending', inputs: [[5, 4, 3, 2, 1]], expected: 9 },
    ],
    hints: [
      'Use a stack to store indices of bars in increasing height order.',
      'When a shorter bar is encountered, pop bars from the stack and calculate the area with the popped bar as the shortest.',
      'After processing all bars, pop remaining bars from the stack and calculate their areas.',
    ],
  },
  {
    id: 'ip-9',
    title: 'Range Sum Query',
    difficulty: 'Easy',
    description:
      '**Pattern: Prefix Sum**\n\nGiven an integer array nums, return the sum of the elements between indices left and right inclusive (0-indexed).\n\nPrecompute a prefix sum array where prefix[i] stores the sum of nums[0..i-1]. The range sum is then prefix[right+1] - prefix[left].',
    examples: [
      { input: 'nums = [-2, 0, 3, -5, 2, -1], left = 0, right = 2', output: '1', explanation: 'Sum of nums[0..2] = -2 + 0 + 3 = 1.' },
      { input: 'nums = [-2, 0, 3, -5, 2, -1], left = 2, right = 5', output: '-1', explanation: 'Sum of nums[2..5] = 3 + (-5) + 2 + (-1) = -1.' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^5 <= nums[i] <= 10^5',
      '0 <= left <= right < nums.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'rangeSum',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'left', type: 'int' },
        { name: 'right', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int rangeSum(int[] nums, int left, int right) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Full prefix range', inputs: [[-2, 0, 3, -5, 2, -1], 0, 2], expected: 1 },
      { name: 'Suffix range', inputs: [[-2, 0, 3, -5, 2, -1], 2, 5], expected: -1 },
      { name: 'Single element', inputs: [[5, 3, 1], 1, 1], expected: 3 },
      { name: 'Entire array', inputs: [[1, 2, 3, 4], 0, 3], expected: 10 },
    ],
    hints: [
      'Build a prefix sum array of size n+1 where prefix[0] = 0.',
      'prefix[i] = prefix[i-1] + nums[i-1].',
      'The answer is prefix[right+1] - prefix[left].',
    ],
  },
  {
    id: 'ip-10',
    title: 'Subarray Sum Divisible by K',
    difficulty: 'Medium',
    description:
      '**Pattern: Prefix Sum**\n\nGiven an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.\n\nUse the prefix sum modulo technique: two prefix sums with the same remainder mod k define a subarray whose sum is divisible by k. Count how many prefix sums share each remainder.',
    examples: [
      { input: 'nums = [4, 5, 0, -2, -3, 1], k = 5', output: '7', explanation: 'There are 7 subarrays with sum divisible by 5: [4,5,0,-2,-3,1], [5], [5,0], [5,0,-2,-3], [0], [0,-2,-3], [-2,-3].' },
      { input: 'nums = [5], k = 9', output: '0' },
    ],
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-10^4 <= nums[i] <= 10^4',
      '2 <= k <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'subarraysDivByK',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[4, 5, 0, -2, -3, 1], 5], expected: 7 },
      { name: 'No valid subarray', inputs: [[5], 9], expected: 0 },
      { name: 'All divisible', inputs: [[3, 6, 9], 3], expected: 6 },
      { name: 'Negative numbers', inputs: [[-1, 2, 9], 2], expected: 2 },
    ],
    hints: [
      'Compute prefix sums and take each modulo k.',
      'In Java, use ((prefixSum % k) + k) % k to handle negative remainders.',
      'If two prefix sums have the same remainder, the subarray between them is divisible by k. Use a count map.',
    ],
  },
  {
    id: 'ip-11',
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Medium',
    description:
      '**Pattern: Binary Search**\n\nSuppose an array of unique integers sorted in ascending order is rotated at some pivot. Given the rotated array nums, find the minimum element.\n\nUse binary search: compare the middle element with the rightmost element to determine which half is sorted and which half contains the minimum.',
    examples: [
      { input: 'nums = [3, 4, 5, 1, 2]', output: '1', explanation: 'The original sorted array [1,2,3,4,5] was rotated 3 times.' },
      { input: 'nums = [4, 5, 6, 7, 0, 1, 2]', output: '0' },
      { input: 'nums = [11, 13, 15, 17]', output: '11', explanation: 'Not rotated, minimum is the first element.' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 5000',
      '-5000 <= nums[i] <= 5000',
      'All values are unique',
      'nums is sorted and rotated between 1 and n times',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findMin',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Rotated by 3', inputs: [[3, 4, 5, 1, 2]], expected: 1 },
      { name: 'Rotated by 4', inputs: [[4, 5, 6, 7, 0, 1, 2]], expected: 0 },
      { name: 'Not rotated', inputs: [[11, 13, 15, 17]], expected: 11 },
      { name: 'Two elements', inputs: [[2, 1]], expected: 1 },
      { name: 'Single element', inputs: [[1]], expected: 1 },
    ],
    hints: [
      'Compare nums[mid] with nums[right] to decide which half to search.',
      'If nums[mid] > nums[right], the minimum is in the right half.',
      'If nums[mid] <= nums[right], the minimum is in the left half (including mid).',
    ],
  },
  {
    id: 'ip-12',
    title: 'Insert Interval',
    difficulty: 'Medium',
    description:
      '**Pattern: Merge Intervals**\n\nYou are given an array of non-overlapping intervals sorted by start time and a new interval. Insert the new interval and merge if necessary. Return the total number of intervals after insertion and merging.\n\nIterate through the intervals: add all intervals that end before the new one starts, merge all overlapping intervals with the new one, then add the remaining intervals.',
    examples: [
      { input: 'intervals = [[1,3],[6,9]], newInterval = [2,5]', output: '2', explanation: 'After merging [1,3] and [2,5] into [1,5], result is [[1,5],[6,9]] which has 2 intervals.' },
      { input: 'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]', output: '3', explanation: 'After merging, result is [[1,2],[3,10],[12,16]] which has 3 intervals.' },
    ],
    constraints: [
      '0 <= intervals.length <= 10^4',
      'intervals[i].length == 2',
      '0 <= start_i <= end_i <= 10^5',
      'intervals is sorted by start_i in ascending order',
      'newInterval.length == 2',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'insertInterval',
      params: [
        { name: 'intervals', type: 'int[][]' },
        { name: 'newInterval', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int insertInterval(int[][] intervals, int[] newInterval) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Simple merge', inputs: [[[1, 3], [6, 9]], [2, 5]], expected: 2 },
      { name: 'Multiple merges', inputs: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]], expected: 3 },
      { name: 'No merge needed', inputs: [[[1, 2], [5, 6]], [3, 4]], expected: 3 },
      { name: 'Empty intervals', inputs: [[], [1, 5]], expected: 1 },
      { name: 'Merge all', inputs: [[[1, 5], [6, 10]], [3, 8]], expected: 1 },
    ],
    hints: [
      'Process intervals in three groups: before, overlapping, and after the new interval.',
      'For overlapping intervals, merge by taking min of starts and max of ends.',
      'Count the total number of intervals in the final merged result.',
    ],
  },
  {
    id: 'ip-13',
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    description:
      '**Pattern: Top K Elements**\n\nGiven an integer array nums and an integer k, return the k most frequent elements as a sorted array (ascending order).\n\nUse a HashMap to count frequencies, then use a min-heap (priority queue) of size k to efficiently find the top k frequent elements.',
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1, 2]', explanation: 'Elements 1 (freq 3) and 2 (freq 2) are the two most frequent. Returned sorted: [1, 2].' },
      { input: 'nums = [1], k = 1', output: '[1]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      'k is in the range [1, number of unique elements]',
      'The answer is guaranteed to be unique',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'topKFrequent',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[1, 1, 1, 2, 2, 3], 2], expected: [1, 2] },
      { name: 'Single element', inputs: [[1], 1], expected: [1] },
      { name: 'All same frequency', inputs: [[1, 2, 3], 3], expected: [1, 2, 3] },
      { name: 'Negative numbers', inputs: [[-1, -1, 2, 2, 2, 3], 1], expected: [2] },
    ],
    hints: [
      'First, count the frequency of each element using a HashMap.',
      'Use a PriorityQueue (min-heap) of size k, ordered by frequency.',
      'Sort the result array before returning.',
    ],
  },
  {
    id: 'ip-14',
    title: 'Find in Mountain Array',
    difficulty: 'Hard',
    description:
      '**Pattern: Modified Binary Search**\n\nA mountain array is an array that increases to a peak element and then decreases. Given a mountain array and a target value, find the index of the target. If the target appears in both the ascending and descending parts, return the smaller index. Return -1 if not found.\n\nFirst, use binary search to find the peak. Then binary search the ascending part, and if not found, binary search the descending part.',
    examples: [
      { input: 'arr = [1, 2, 3, 4, 5, 3, 1], target = 3', output: '2', explanation: 'Target 3 appears at index 2 (ascending) and index 5 (descending). Return the smaller index 2.' },
      { input: 'arr = [0, 1, 2, 4, 2, 1], target = 3', output: '-1' },
    ],
    constraints: [
      '3 <= arr.length <= 10^4',
      '0 <= arr[i] <= 10^5',
      'arr is guaranteed to be a mountain array',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findInMountainArray',
      params: [
        { name: 'arr', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int findInMountainArray(int[] arr, int target) {
        // Write your solution here
        return -1;
    }
}`,
    testCases: [
      { name: 'Found in ascending part', inputs: [[1, 2, 3, 4, 5, 3, 1], 3], expected: 2 },
      { name: 'Not found', inputs: [[0, 1, 2, 4, 2, 1], 3], expected: -1 },
      { name: 'Target is peak', inputs: [[1, 3, 5, 4, 2], 5], expected: 2 },
      { name: 'Found only in descending', inputs: [[1, 5, 4, 3, 2], 3], expected: 3 },
      { name: 'Target at boundary', inputs: [[0, 5, 3, 1], 1], expected: 3 },
    ],
    hints: [
      'Step 1: Find the peak index using binary search (where arr[mid] > arr[mid+1] and arr[mid] > arr[mid-1]).',
      'Step 2: Binary search the ascending portion [0..peak].',
      'Step 3: If not found, binary search the descending portion [peak..end] with reversed comparison.',
    ],
  },
  {
    id: 'ip-15',
    title: 'Find All Missing Numbers',
    difficulty: 'Medium',
    description:
      '**Pattern: Cyclic Sort**\n\nGiven an array nums of n integers where nums[i] is in the range [1, n], some elements appear twice and others appear once. Find all the numbers in the range [1, n] that do not appear in the array. Return them as a sorted array.\n\nUse cyclic sort: place each number at its correct index (value i at index i-1). After sorting, any index where nums[index] != index+1 indicates a missing number.',
    examples: [
      { input: 'nums = [4, 3, 2, 7, 8, 2, 3, 1]', output: '[5, 6]', explanation: 'Numbers 5 and 6 are missing from the range [1, 8].' },
      { input: 'nums = [1, 1]', output: '[2]', explanation: 'Number 2 is missing from the range [1, 2].' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 10^5',
      '1 <= nums[i] <= n',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'findDisappearedNumbers',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] findDisappearedNumbers(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`,
    testCases: [
      { name: 'Multiple missing', inputs: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [5, 6] },
      { name: 'One missing', inputs: [[1, 1]], expected: [2] },
      { name: 'None missing', inputs: [[1, 2, 3]], expected: [] },
      { name: 'All missing except one', inputs: [[1, 1, 1, 1]], expected: [2, 3, 4] },
    ],
    hints: [
      'Use cyclic sort: swap each element to its correct position (nums[i] should be at index nums[i]-1).',
      'Skip the swap if the element is already in the correct position or a duplicate is already placed.',
      'After sorting, scan the array: if nums[i] != i+1, then i+1 is a missing number.',
    ],
  },
];
