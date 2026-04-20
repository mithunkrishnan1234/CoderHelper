import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'dp-1',
    title: 'Climbing Stairs',
    difficulty: 'Medium',
    description:
      'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return the number of distinct ways to climb to the top.\n\nExample:\nInput: n = 2\nOutput: 2\nExplanation: 1+1 or 2\n\nInput: n = 3\nOutput: 3\nExplanation: 1+1+1, 1+2, 2+1',
    examples: [
      { input: 'n = 2', output: '2', explanation: 'Two ways: 1+1 or 2' },
      { input: 'n = 3', output: '3', explanation: 'Three ways: 1+1+1, 1+2, 2+1' },
    ],
    constraints: [
      '1 <= n <= 45',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'climbStairs',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Two steps', inputs: [2], expected: 2 },
      { name: 'Three steps', inputs: [3], expected: 3 },
      { name: 'One step', inputs: [1], expected: 1 },
      { name: 'Five steps', inputs: [5], expected: 8 },
      { name: 'Ten steps', inputs: [10], expected: 89 },
    ],
    hints: [
      'This is essentially a Fibonacci sequence.',
      'dp[i] = dp[i-1] + dp[i-2], where dp[1] = 1, dp[2] = 2.',
      'You can optimize space to O(1) using two variables.',
    ],
  },
  {
    id: 'dp-2',
    title: 'Coin Change',
    difficulty: 'Medium',
    description:
      'Given an array of coin denominations and a total amount, return the fewest number of coins needed to make up that amount. If it cannot be made up, return -1. You have an infinite supply of each coin denomination.\n\nExample:\nInput: coins = [1, 5, 10], amount = 12\nOutput: 3\nExplanation: 10 + 1 + 1\n\nInput: coins = [2], amount = 3\nOutput: -1',
    examples: [
      { input: 'coins = [1, 5, 10], amount = 12', output: '3', explanation: '10 + 1 + 1' },
      { input: 'coins = [2], amount = 3', output: '-1' },
    ],
    constraints: [
      '1 <= coins.length <= 12',
      '1 <= coins[i] <= 2^31 - 1',
      '0 <= amount <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'coinChange',
      params: [
        { name: 'coins', type: 'int[]' },
        { name: 'amount', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int coinChange(int[] coins, int amount) {
        // Write your solution here
        return -1;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[1, 5, 10], 12], expected: 3 },
      { name: 'Impossible', inputs: [[2], 3], expected: -1 },
      { name: 'Zero amount', inputs: [[1], 0], expected: 0 },
      { name: 'Exact coin', inputs: [[1, 2, 5], 5], expected: 1 },
      { name: 'Multiple coins needed', inputs: [[1, 2, 5], 11], expected: 3 },
    ],
    hints: [
      'Use bottom-up DP. dp[i] = minimum coins to make amount i.',
      'For each amount from 1 to target, try each coin.',
      'dp[i] = min(dp[i], dp[i - coin] + 1) for each valid coin.',
    ],
  },
  {
    id: 'dp-3',
    title: 'Longest Common Subsequence',
    difficulty: 'Medium',
    description:
      'Given two strings, return the length of their longest common subsequence. A subsequence is a sequence that appears in the same relative order but not necessarily contiguously.\n\nExample:\nInput: text1 = "abcde", text2 = "ace"\nOutput: 3\nExplanation: LCS is "ace"\n\nInput: text1 = "abc", text2 = "def"\nOutput: 0',
    examples: [
      { input: 'text1 = "abcde", text2 = "ace"', output: '3', explanation: 'LCS is "ace"' },
      { input: 'text1 = "abc", text2 = "def"', output: '0' },
    ],
    constraints: [
      '1 <= text1.length, text2.length <= 1000',
      'text1 and text2 consist of lowercase English letters only',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'longestCommonSubsequence',
      params: [
        { name: 'text1', type: 'String' },
        { name: 'text2', type: 'String' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Subsequence exists', inputs: ['abcde', 'ace'], expected: 3 },
      { name: 'No common', inputs: ['abc', 'def'], expected: 0 },
      { name: 'Same strings', inputs: ['abc', 'abc'], expected: 3 },
      { name: 'One char match', inputs: ['a', 'a'], expected: 1 },
      { name: 'Partial overlap', inputs: ['abcba', 'abcbcba'], expected: 5 },
    ],
    hints: [
      'Use a 2D DP table of size (m+1) x (n+1).',
      'If characters match: dp[i][j] = dp[i-1][j-1] + 1.',
      'If not: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
    ],
  },
  {
    id: 'dp-4',
    title: '0/1 Knapsack',
    difficulty: 'Hard',
    description:
      'Given n items where each item has a weight and a value, and a knapsack capacity W, find the maximum total value you can carry. Each item can be used at most once.\n\nExample:\nInput: weights = [1, 3, 4, 5], values = [1, 4, 5, 7], capacity = 7\nOutput: 9\nExplanation: Take items with weight 3 (value 4) and weight 4 (value 5)\n\nInput: weights = [2, 3], values = [3, 4], capacity = 4\nOutput: 4',
    examples: [
      { input: 'weights = [1,3,4,5], values = [1,4,5,7], capacity = 7', output: '9' },
      { input: 'weights = [2,3], values = [3,4], capacity = 4', output: '4' },
    ],
    constraints: [
      '1 <= n <= 100',
      '1 <= weights[i], values[i] <= 1000',
      '1 <= capacity <= 1000',
      'weights.length == values.length',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'knapsack',
      params: [
        { name: 'weights', type: 'int[]' },
        { name: 'values', type: 'int[]' },
        { name: 'capacity', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int knapsack(int[] weights, int[] values, int capacity) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[1, 3, 4, 5], [1, 4, 5, 7], 7], expected: 9 },
      { name: 'Cannot fit larger item', inputs: [[2, 3], [3, 4], 4], expected: 4 },
      { name: 'All items fit', inputs: [[1, 2, 3], [6, 10, 12], 10], expected: 28 },
      { name: 'No capacity', inputs: [[1, 2], [3, 4], 0], expected: 0 },
      { name: 'Single item fits', inputs: [[5], [10], 5], expected: 10 },
    ],
    hints: [
      'Use 2D DP: dp[i][w] = max value using first i items with capacity w.',
      'For each item, choose to include or exclude it.',
      'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]).',
      'Can be optimized to 1D array by iterating capacity in reverse.',
    ],
  },
  {
    id: 'dp-5',
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    description:
      'Given an integer array, return the length of the longest strictly increasing subsequence.\n\nExample:\nInput: nums = [10, 9, 2, 5, 3, 7, 101, 18]\nOutput: 4\nExplanation: [2, 3, 7, 101]\n\nInput: nums = [0, 1, 0, 3, 2, 3]\nOutput: 4',
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4', explanation: 'LIS: [2, 3, 7, 101]' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4' },
    ],
    constraints: [
      '1 <= nums.length <= 2500',
      '-10^4 <= nums[i] <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'lengthOfLIS',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int lengthOfLIS(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
      { name: 'Mixed', inputs: [[0, 1, 0, 3, 2, 3]], expected: 4 },
      { name: 'All same', inputs: [[7, 7, 7, 7]], expected: 1 },
      { name: 'Already sorted', inputs: [[1, 2, 3, 4, 5]], expected: 5 },
      { name: 'Decreasing', inputs: [[5, 4, 3, 2, 1]], expected: 1 },
    ],
    hints: [
      'O(n²) DP: dp[i] = length of LIS ending at index i.',
      'For each i, check all j < i where nums[j] < nums[i].',
      'O(n log n) is possible using binary search with a patience sorting approach.',
    ],
  },
  {
    id: 'dp-6',
    title: 'Edit Distance',
    difficulty: 'Hard',
    description:
      'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You can insert, delete, or replace a character.\n\nExample:\nInput: word1 = "horse", word2 = "ros"\nOutput: 3\nExplanation: horse → rorse → rose → ros\n\nInput: word1 = "intention", word2 = "execution"\nOutput: 5',
    examples: [
      { input: 'word1 = "horse", word2 = "ros"', output: '3', explanation: 'horse → rorse → rose → ros' },
      { input: 'word1 = "intention", word2 = "execution"', output: '5' },
    ],
    constraints: [
      '0 <= word1.length, word2.length <= 500',
      'word1 and word2 consist of lowercase English letters',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'minDistance',
      params: [
        { name: 'word1', type: 'String' },
        { name: 'word2', type: 'String' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int minDistance(String word1, String word2) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: ['horse', 'ros'], expected: 3 },
      { name: 'Longer strings', inputs: ['intention', 'execution'], expected: 5 },
      { name: 'Empty to non-empty', inputs: ['', 'abc'], expected: 3 },
      { name: 'Same strings', inputs: ['abc', 'abc'], expected: 0 },
      { name: 'Single char difference', inputs: ['a', 'b'], expected: 1 },
    ],
    hints: [
      'Use 2D DP: dp[i][j] = edit distance between word1[0..i-1] and word2[0..j-1].',
      'If characters match: dp[i][j] = dp[i-1][j-1].',
      'Otherwise: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]).',
    ],
  },
  {
    id: 'dp-7',
    title: 'Unique Paths',
    difficulty: 'Medium',
    description:
      'A robot is located at the top-left corner of an m×n grid. It can only move right or down. How many unique paths are there to reach the bottom-right corner?\n\nExample:\nInput: m = 3, n = 7\nOutput: 28\n\nInput: m = 3, n = 2\nOutput: 3',
    examples: [
      { input: 'm = 3, n = 7', output: '28' },
      { input: 'm = 3, n = 2', output: '3', explanation: 'Right→Down→Down, Down→Right→Down, Down→Down→Right' },
    ],
    constraints: [
      '1 <= m, n <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'uniquePaths',
      params: [
        { name: 'm', type: 'int' },
        { name: 'n', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int uniquePaths(int m, int n) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: '3x7 grid', inputs: [3, 7], expected: 28 },
      { name: '3x2 grid', inputs: [3, 2], expected: 3 },
      { name: '1x1 grid', inputs: [1, 1], expected: 1 },
      { name: '2x2 grid', inputs: [2, 2], expected: 2 },
      { name: '1x5 grid (single row)', inputs: [1, 5], expected: 1 },
    ],
    hints: [
      'dp[i][j] = dp[i-1][j] + dp[i][j-1].',
      'First row and first column all have 1 path.',
      'Can also be solved with combinatorics: C(m+n-2, m-1).',
    ],
  },
  {
    id: 'dp-8',
    title: 'House Robber',
    difficulty: 'Medium',
    description:
      'You are a robber planning to rob houses along a street. Each house has a certain amount of money. Adjacent houses have connected security systems — if two adjacent houses are robbed on the same night, the police will be alerted. Return the maximum amount of money you can rob without alerting the police.\n\nExample:\nInput: nums = [1, 2, 3, 1]\nOutput: 4\nExplanation: Rob house 1 (1) + house 3 (3) = 4\n\nInput: nums = [2, 7, 9, 3, 1]\nOutput: 12\nExplanation: Rob house 1 (2) + house 3 (9) + house 5 (1) = 12',
    examples: [
      { input: 'nums = [1, 2, 3, 1]', output: '4', explanation: 'Rob houses 1 and 3' },
      { input: 'nums = [2, 7, 9, 3, 1]', output: '12', explanation: 'Rob houses 1, 3, and 5' },
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 400',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'rob',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int rob(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Four houses', inputs: [[1, 2, 3, 1]], expected: 4 },
      { name: 'Five houses', inputs: [[2, 7, 9, 3, 1]], expected: 12 },
      { name: 'Single house', inputs: [[5]], expected: 5 },
      { name: 'Two houses', inputs: [[1, 2]], expected: 2 },
      { name: 'All same value', inputs: [[3, 3, 3, 3, 3]], expected: 9 },
    ],
    hints: [
      'dp[i] = max(dp[i-1], dp[i-2] + nums[i]).',
      'At each house, decide: skip it (take dp[i-1]) or rob it (take dp[i-2] + nums[i]).',
      'Only need two variables instead of an array.',
    ],
  },
];
