import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'grd-1',
    title: 'Activity Selection',
    difficulty: 'Medium',
    description:
      'Given n activities with start and end times, find the maximum number of activities that can be performed by a single person, assuming that a person can only work on one activity at a time. Activities are given as two arrays: start times and end times.\n\nExample:\nInput: start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9]\nOutput: 4\nExplanation: Activities (1,2), (3,4), (5,7), (8,9)\n\nInput: start = [1, 2], end = [3, 4]\nOutput: 2',
    examples: [
      { input: 'start = [1,3,0,5,8,5], end = [2,4,6,7,9,9]', output: '4', explanation: 'Select activities (1,2), (3,4), (5,7), (8,9)' },
      { input: 'start = [1,2], end = [3,4]', output: '2' },
    ],
    constraints: [
      '1 <= n <= 10^4',
      '0 <= start[i] < end[i] <= 10^5',
      'start.length == end.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'maxActivities',
      params: [
        { name: 'start', type: 'int[]' },
        { name: 'end', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int maxActivities(int[] start, int[] end) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Multiple non-overlapping', inputs: [[1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]], expected: 4 },
      { name: 'Two sequential', inputs: [[1, 2], [3, 4]], expected: 2 },
      { name: 'All overlapping', inputs: [[0, 0, 0], [10, 10, 10]], expected: 1 },
      { name: 'Single activity', inputs: [[0], [1]], expected: 1 },
      { name: 'Nested intervals', inputs: [[1, 2, 3], [10, 5, 4]], expected: 2 },
    ],
    hints: [
      'Sort activities by their end time.',
      'Greedily select the activity that finishes earliest and does not overlap with the last selected.',
      'This is a classic greedy interval scheduling problem.',
    ],
  },
  {
    id: 'grd-2',
    title: 'Merge Intervals',
    difficulty: 'Medium',
    description:
      'Given a collection of intervals represented as a flattened int array (pairs of [start, end]), merge all overlapping intervals and return the number of merged intervals.\n\nExample:\nInput: intervals = [1,3, 2,6, 8,10, 15,18]\nOutput: 3\nExplanation: Merged: [1,6], [8,10], [15,18]\n\nInput: intervals = [1,4, 4,5]\nOutput: 1\nExplanation: Merged: [1,5]',
    examples: [
      { input: 'intervals = [1,3,2,6,8,10,15,18]', output: '3', explanation: 'Merged: [1,6], [8,10], [15,18]' },
      { input: 'intervals = [1,4,4,5]', output: '1', explanation: 'Merged: [1,5]' },
    ],
    constraints: [
      '1 <= number of intervals <= 10^4',
      '0 <= start <= end <= 10^4',
      'intervals.length is even',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'mergeIntervals',
      params: [{ name: 'intervals', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int mergeIntervals(int[] intervals) {
        // Write your solution here
        // intervals is a flat array: [s1, e1, s2, e2, ...]
        return 0;
    }
}`,
    testCases: [
      { name: 'Some overlapping', inputs: [[1, 3, 2, 6, 8, 10, 15, 18]], expected: 3 },
      { name: 'Touching intervals', inputs: [[1, 4, 4, 5]], expected: 1 },
      { name: 'No overlap', inputs: [[1, 2, 3, 4, 5, 6]], expected: 3 },
      { name: 'All overlap', inputs: [[1, 10, 2, 5, 3, 8]], expected: 1 },
      { name: 'Single interval', inputs: [[1, 5]], expected: 1 },
    ],
    hints: [
      'Parse pairs from the flat array. Sort by start time.',
      'Iterate and merge: if current start <= previous end, extend the end.',
      'Count how many merged intervals remain.',
    ],
  },
  {
    id: 'grd-3',
    title: 'Minimum Platforms',
    difficulty: 'Medium',
    description:
      'Given arrival and departure times of trains at a station, find the minimum number of platforms required so that no train has to wait. Arrival and departure arrays are sorted.\n\nExample:\nInput: arrivals = [900, 940, 950, 1100, 1500, 1800], departures = [910, 1200, 1120, 1130, 1900, 2000]\nOutput: 3\n\nInput: arrivals = [100, 200], departures = [150, 250]\nOutput: 1',
    examples: [
      { input: 'arrivals = [900,940,950,1100,1500,1800], departures = [910,1200,1120,1130,1900,2000]', output: '3' },
      { input: 'arrivals = [100,200], departures = [150,250]', output: '1' },
    ],
    constraints: [
      '1 <= n <= 10^4',
      '0 <= arrivals[i], departures[i] <= 2359',
      'arrivals[i] <= departures[i]',
      'arrivals.length == departures.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'minPlatforms',
      params: [
        { name: 'arrivals', type: 'int[]' },
        { name: 'departures', type: 'int[]' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int minPlatforms(int[] arrivals, int[] departures) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Multiple overlaps', inputs: [[900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]], expected: 3 },
      { name: 'No overlap', inputs: [[100, 200], [150, 250]], expected: 1 },
      { name: 'All at once', inputs: [[100, 100, 100], [200, 200, 200]], expected: 3 },
      { name: 'Single train', inputs: [[500], [600]], expected: 1 },
      { name: 'Sequential trains', inputs: [[100, 200, 300], [150, 250, 350]], expected: 1 },
    ],
    hints: [
      'Sort both arrival and departure arrays.',
      'Use two pointers: one for arrivals, one for departures.',
      'If the next event is an arrival, increment platforms; if departure, decrement.',
      'Track the maximum platforms needed at any point.',
    ],
  },
  {
    id: 'grd-4',
    title: 'Jump Game',
    difficulty: 'Medium',
    description:
      'Given an array of non-negative integers where each element represents the maximum jump length from that position, determine if you can reach the last index starting from the first index.\n\nExample:\nInput: nums = [2, 3, 1, 1, 4]\nOutput: true\nExplanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\nInput: nums = [3, 2, 1, 0, 4]\nOutput: false\nExplanation: You always arrive at index 3 where you are stuck.',
    examples: [
      { input: 'nums = [2, 3, 1, 1, 4]', output: 'true', explanation: 'Jump from 0→1→4' },
      { input: 'nums = [3, 2, 1, 0, 4]', output: 'false', explanation: 'Stuck at index 3' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '0 <= nums[i] <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'canJump',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean canJump(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
    testCases: [
      { name: 'Can reach end', inputs: [[2, 3, 1, 1, 4]], expected: true },
      { name: 'Stuck at zero', inputs: [[3, 2, 1, 0, 4]], expected: false },
      { name: 'Single element', inputs: [[0]], expected: true },
      { name: 'All ones', inputs: [[1, 1, 1, 1]], expected: true },
      { name: 'Large first jump', inputs: [[5, 0, 0, 0, 0]], expected: true },
      { name: 'Zero at start with more elements', inputs: [[0, 1]], expected: false },
    ],
    hints: [
      'Track the farthest index you can reach.',
      'Iterate through the array. At each index, update the farthest reachable position.',
      'If at any point the current index exceeds the farthest, return false.',
    ],
  },
];
