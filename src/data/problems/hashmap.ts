import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'hm-1',
    title: 'Two Sum (HashMap)',
    difficulty: 'Easy',
    description:
      'Given an array of integers and a target, return the indices of the two numbers that add up to the target. Use a HashMap for an efficient solution. Return indices in ascending order.\n\nExample:\n- Input: nums = [2,7,11,15], target = 9 → Output: [0,1]\n- Input: nums = [3,2,4], target = 6 → Output: [1,2]',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0, 1]' },
      { input: 'nums = [3,2,4], target = 6', output: '[1, 2]' },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
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
      'import java.util.HashMap;',
      '',
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
      'Iterate once: for each element, check if target - element exists in the map.',
      'Store value → index mappings as you iterate.',
    ],
  },
  {
    id: 'hm-2',
    title: 'First Unique Character',
    difficulty: 'Easy',
    description:
      'Given a string, find the index of the first non-repeating character. If it doesn\'t exist, return -1.\n\nExample:\n- Input: "leetcode" → Output: 0\n- Input: "loveleetcode" → Output: 2\n- Input: "aabb" → Output: -1',
    examples: [
      { input: 's = "leetcode"', output: '0' },
      { input: 's = "loveleetcode"', output: '2' },
      { input: 's = "aabb"', output: '-1' },
    ],
    constraints: [
      '1 <= s.length <= 10^5',
      's consists of only lowercase English letters.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'firstUniqChar',
      params: [{ name: 's', type: 'String' }],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.HashMap;',
      '',
      'public class Solution {',
      '    public int firstUniqChar(String s) {',
      '        // Write your solution here',
      '        return -1;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'First char unique', inputs: ['leetcode'], expected: 0 },
      { name: 'Unique in middle', inputs: ['loveleetcode'], expected: 2 },
      { name: 'No unique char', inputs: ['aabb'], expected: -1 },
      { name: 'Single character', inputs: ['z'], expected: 0 },
    ],
    hints: [
      'Count character frequencies with a HashMap, then iterate to find the first with count 1.',
      'Alternatively, use an int array of size 26 for lowercase letters.',
    ],
  },
  {
    id: 'hm-3',
    title: 'Group Anagrams Count',
    difficulty: 'Medium',
    description:
      'Given an array of strings, group the anagrams together and return the number of anagram groups.\n\nExample:\n- Input: ["eat","tea","tan","ate","nat","bat"] → Output: 3 (groups: [eat,tea,ate], [tan,nat], [bat])\n- Input: [""] → Output: 1\n- Input: ["a"] → Output: 1',
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '3', explanation: 'Groups: [eat,tea,ate], [tan,nat], [bat]' },
      { input: 'strs = [""]', output: '1' },
    ],
    constraints: [
      '1 <= strs.length <= 10^4',
      '0 <= strs[i].length <= 100',
      'strs[i] consists of lowercase English letters.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'groupAnagramsCount',
      params: [{ name: 'strs', type: 'String[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.HashMap;',
      'import java.util.Arrays;',
      '',
      'public class Solution {',
      '    public int groupAnagramsCount(String[] strs) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Multiple groups', inputs: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: 3 },
      { name: 'Single empty string', inputs: [['']], expected: 1 },
      { name: 'No anagrams', inputs: [['abc', 'def', 'ghi']], expected: 3 },
      { name: 'All anagrams', inputs: [['abc', 'bca', 'cab']], expected: 1 },
    ],
    hints: [
      'Sort each string\'s characters to create a canonical key.',
      'Use a HashMap with the sorted string as key; the number of distinct keys is the answer.',
    ],
  },
  {
    id: 'hm-4',
    title: 'Valid Sudoku Check',
    difficulty: 'Medium',
    description:
      'Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated: each row, column, and 3x3 sub-box must contain digits 1-9 without repetition. The board is represented as a 2D int array where 0 represents an empty cell.\n\nExample:\n- A valid partially filled board → true\n- A board with a duplicate in a row → false',
    examples: [
      {
        input: 'A valid Sudoku board (see constraints)',
        output: 'true',
      },
      {
        input: 'A board with duplicate 8 in first column',
        output: 'false',
      },
    ],
    constraints: [
      'board.length == 9',
      'board[i].length == 9',
      '0 <= board[i][j] <= 9 (0 means empty)',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'isValidSudoku',
      params: [{ name: 'board', type: 'int[][]' }],
      returnType: 'boolean',
    },
    boilerplate: [
      'import java.util.HashSet;',
      '',
      'public class Solution {',
      '    public boolean isValidSudoku(int[][] board) {',
      '        // Write your solution here',
      '        return false;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      {
        name: 'Valid board',
        inputs: [[
          [5, 3, 0, 0, 7, 0, 0, 0, 0],
          [6, 0, 0, 1, 9, 5, 0, 0, 0],
          [0, 9, 8, 0, 0, 0, 0, 6, 0],
          [8, 0, 0, 0, 6, 0, 0, 0, 3],
          [4, 0, 0, 8, 0, 3, 0, 0, 1],
          [7, 0, 0, 0, 2, 0, 0, 0, 6],
          [0, 6, 0, 0, 0, 0, 2, 8, 0],
          [0, 0, 0, 4, 1, 9, 0, 0, 5],
          [0, 0, 0, 0, 8, 0, 0, 7, 9],
        ]],
        expected: true,
      },
      {
        name: 'Duplicate in row',
        inputs: [[
          [5, 3, 0, 0, 7, 0, 0, 0, 0],
          [6, 0, 0, 1, 9, 5, 0, 0, 0],
          [0, 9, 8, 0, 0, 0, 0, 6, 0],
          [8, 0, 0, 0, 6, 0, 0, 0, 3],
          [4, 0, 0, 8, 0, 3, 0, 0, 1],
          [7, 0, 0, 0, 2, 0, 0, 0, 6],
          [0, 6, 0, 0, 0, 0, 2, 8, 0],
          [0, 0, 0, 4, 1, 9, 0, 0, 5],
          [0, 0, 0, 0, 8, 0, 0, 7, 7],
        ]],
        expected: false,
      },
      {
        name: 'Duplicate in column',
        inputs: [[
          [5, 3, 0, 0, 7, 0, 0, 0, 0],
          [5, 0, 0, 1, 9, 0, 0, 0, 0],
          [0, 9, 8, 0, 0, 0, 0, 6, 0],
          [8, 0, 0, 0, 6, 0, 0, 0, 3],
          [4, 0, 0, 8, 0, 3, 0, 0, 1],
          [7, 0, 0, 0, 2, 0, 0, 0, 6],
          [0, 6, 0, 0, 0, 0, 2, 8, 0],
          [0, 0, 0, 4, 1, 9, 0, 0, 0],
          [0, 0, 0, 0, 8, 0, 0, 7, 9],
        ]],
        expected: false,
      },
    ],
    hints: [
      'Use HashSets for each row, column, and 3x3 box.',
      'Encode box index as (row / 3) * 3 + (col / 3).',
    ],
  },
  {
    id: 'hm-5',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Medium',
    description:
      'Given an unsorted array of integers, find the length of the longest consecutive elements sequence. Your algorithm should run in O(n) time.\n\nExample:\n- Input: [100, 4, 200, 1, 3, 2] → Output: 4 (sequence: 1,2,3,4)\n- Input: [0,3,7,2,5,8,4,6,0,1] → Output: 9',
    examples: [
      { input: 'nums = [100,4,200,1,3,2]', output: '4', explanation: 'The longest consecutive sequence is [1,2,3,4].' },
      { input: 'nums = [0,3,7,2,5,8,4,6,0,1]', output: '9' },
    ],
    constraints: [
      '0 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'longestConsecutive',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.HashSet;',
      '',
      'public class Solution {',
      '    public int longestConsecutive(int[] nums) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[100, 4, 200, 1, 3, 2]], expected: 4 },
      { name: 'Longer sequence', inputs: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]], expected: 9 },
      { name: 'Empty array', inputs: [[]], expected: 0 },
      { name: 'Single element', inputs: [[7]], expected: 1 },
    ],
    hints: [
      'Add all numbers to a HashSet.',
      'Only start counting a sequence from n if n-1 is NOT in the set (it\'s the start of a sequence).',
    ],
  },
  {
    id: 'hm-6',
    title: 'Subarray Sum Equals K',
    difficulty: 'Medium',
    description:
      'Given an array of integers and an integer k, return the total number of continuous subarrays whose sum equals k.\n\nExample:\n- Input: nums = [1,1,1], k = 2 → Output: 2\n- Input: nums = [1,2,3], k = 3 → Output: 2 (subarrays [1,2] and [3])',
    examples: [
      { input: 'nums = [1,1,1], k = 2', output: '2' },
      { input: 'nums = [1,2,3], k = 3', output: '2', explanation: 'Subarrays [1,2] and [3].' },
    ],
    constraints: [
      '1 <= nums.length <= 2 * 10^4',
      '-1000 <= nums[i] <= 1000',
      '-10^7 <= k <= 10^7',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'subarraySum',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: [
      'import java.util.HashMap;',
      '',
      'public class Solution {',
      '    public int subarraySum(int[] nums, int k) {',
      '        // Write your solution here',
      '        return 0;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Basic case', inputs: [[1, 1, 1], 2], expected: 2 },
      { name: 'Multiple subarrays', inputs: [[1, 2, 3], 3], expected: 2 },
      { name: 'Negative numbers', inputs: [[1, -1, 0], 0], expected: 3 },
      { name: 'Single element equals k', inputs: [[5], 5], expected: 1 },
    ],
    hints: [
      'Use prefix sums: if prefixSum[j] - prefixSum[i] = k, then subarray [i+1..j] sums to k.',
      'Store prefix sum frequencies in a HashMap.',
    ],
  },
  {
    id: 'hm-7',
    title: 'Isomorphic Strings',
    difficulty: 'Easy',
    description:
      'Given two strings s and t, determine if they are isomorphic. Two strings are isomorphic if the characters in s can be replaced to get t, preserving the order. No two characters may map to the same character, but a character may map to itself.\n\nExample:\n- Input: s = "egg", t = "add" → Output: true\n- Input: s = "foo", t = "bar" → Output: false\n- Input: s = "paper", t = "title" → Output: true',
    examples: [
      { input: 's = "egg", t = "add"', output: 'true' },
      { input: 's = "foo", t = "bar"', output: 'false' },
      { input: 's = "paper", t = "title"', output: 'true' },
    ],
    constraints: [
      '1 <= s.length <= 5 * 10^4',
      't.length == s.length',
      's and t consist of any valid ASCII character.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'isIsomorphic',
      params: [
        { name: 's', type: 'String' },
        { name: 't', type: 'String' },
      ],
      returnType: 'boolean',
    },
    boilerplate: [
      'import java.util.HashMap;',
      '',
      'public class Solution {',
      '    public boolean isIsomorphic(String s, String t) {',
      '        // Write your solution here',
      '        return false;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Isomorphic', inputs: ['egg', 'add'], expected: true },
      { name: 'Not isomorphic', inputs: ['foo', 'bar'], expected: false },
      { name: 'Pattern match', inputs: ['paper', 'title'], expected: true },
      { name: 'Single chars', inputs: ['a', 'b'], expected: true },
    ],
    hints: [
      'Use two HashMaps: one for s→t mapping and one for t→s mapping.',
      'If a mapping conflict is found, return false.',
    ],
  },
  {
    id: 'hm-8',
    title: 'Contains Duplicate Within K Distance',
    difficulty: 'Easy',
    description:
      'Given an integer array nums and an integer k, return true if there are two distinct indices i and j such that nums[i] == nums[j] and abs(i - j) <= k.\n\nExample:\n- Input: nums = [1,2,3,1], k = 3 → Output: true\n- Input: nums = [1,0,1,1], k = 1 → Output: true\n- Input: nums = [1,2,3,1,2,3], k = 2 → Output: false',
    examples: [
      { input: 'nums = [1,2,3,1], k = 3', output: 'true' },
      { input: 'nums = [1,0,1,1], k = 1', output: 'true' },
      { input: 'nums = [1,2,3,1,2,3], k = 2', output: 'false' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '0 <= k <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'containsNearbyDuplicate',
      params: [
        { name: 'nums', type: 'int[]' },
        { name: 'k', type: 'int' },
      ],
      returnType: 'boolean',
    },
    boilerplate: [
      'import java.util.HashMap;',
      '',
      'public class Solution {',
      '    public boolean containsNearbyDuplicate(int[] nums, int k) {',
      '        // Write your solution here',
      '        return false;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Duplicate within range', inputs: [[1, 2, 3, 1], 3], expected: true },
      { name: 'Adjacent duplicates', inputs: [[1, 0, 1, 1], 1], expected: true },
      { name: 'Duplicate out of range', inputs: [[1, 2, 3, 1, 2, 3], 2], expected: false },
      { name: 'No duplicates', inputs: [[1, 2, 3, 4], 3], expected: false },
    ],
    hints: [
      'Use a HashMap to store the last index where each value was seen.',
      'Alternatively, use a HashSet as a sliding window of size k.',
    ],
  },
];
