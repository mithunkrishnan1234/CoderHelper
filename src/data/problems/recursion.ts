import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'rec-1',
    title: 'Tower of Hanoi',
    difficulty: 'Medium',
    description:
      'The Tower of Hanoi is a classic puzzle. Given n disks, return the minimum number of moves required to move all disks from the source peg to the destination peg using an auxiliary peg. You may only move one disk at a time, and no disk may be placed on top of a smaller disk.\n\nExample:\nInput: n = 3\nOutput: 7\n\nInput: n = 1\nOutput: 1',
    examples: [
      { input: 'n = 3', output: '7', explanation: 'Minimum moves = 2^n - 1 = 7' },
      { input: 'n = 1', output: '1' },
    ],
    constraints: [
      '1 <= n <= 20',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'towerOfHanoi',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int towerOfHanoi(int n) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Three disks', inputs: [3], expected: 7 },
      { name: 'One disk', inputs: [1], expected: 1 },
      { name: 'Two disks', inputs: [2], expected: 3 },
      { name: 'Four disks', inputs: [4], expected: 15 },
      { name: 'Five disks', inputs: [5], expected: 31 },
    ],
    hints: [
      'Think recursively: move n-1 disks to auxiliary, move the largest, then move n-1 from auxiliary to destination.',
      'The formula is 2^n - 1, but try to derive it through recursion.',
      'Base case: 1 disk requires 1 move.',
    ],
  },
  {
    id: 'rec-2',
    title: 'Generate All Subsets',
    difficulty: 'Medium',
    description:
      'Given an array of distinct integers, return the total number of subsets (including the empty subset). Generate them using recursion/backtracking.\n\nExample:\nInput: nums = [1, 2, 3]\nOutput: 8\n\nInput: nums = [0]\nOutput: 2',
    examples: [
      { input: 'nums = [1, 2, 3]', output: '8', explanation: 'Subsets: [], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]' },
      { input: 'nums = [0]', output: '2' },
    ],
    constraints: [
      '1 <= nums.length <= 15',
      '-10 <= nums[i] <= 10',
      'All elements are unique',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'countSubsets',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countSubsets(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Three elements', inputs: [[1, 2, 3]], expected: 8 },
      { name: 'Single element', inputs: [[0]], expected: 2 },
      { name: 'Two elements', inputs: [[1, 2]], expected: 4 },
      { name: 'Four elements', inputs: [[1, 2, 3, 4]], expected: 16 },
      { name: 'Empty array', inputs: [[]], expected: 1 },
    ],
    hints: [
      'For each element, you have two choices: include it or exclude it.',
      'Use backtracking to explore both choices.',
      'The total is always 2^n, but implement it recursively to practice.',
    ],
  },
  {
    id: 'rec-3',
    title: 'Generate Permutations',
    difficulty: 'Medium',
    description:
      'Given an array of distinct integers, return the total number of unique permutations. Generate them using recursion/backtracking.\n\nExample:\nInput: nums = [1, 2, 3]\nOutput: 6\n\nInput: nums = [1]\nOutput: 1',
    examples: [
      { input: 'nums = [1, 2, 3]', output: '6', explanation: 'Permutations: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]' },
      { input: 'nums = [1]', output: '1' },
    ],
    constraints: [
      '1 <= nums.length <= 8',
      '-10 <= nums[i] <= 10',
      'All elements are unique',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'countPermutations',
      params: [{ name: 'nums', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countPermutations(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Three elements', inputs: [[1, 2, 3]], expected: 6 },
      { name: 'Single element', inputs: [[1]], expected: 1 },
      { name: 'Two elements', inputs: [[1, 2]], expected: 2 },
      { name: 'Four elements', inputs: [[1, 2, 3, 4]], expected: 24 },
    ],
    hints: [
      'For each position, try placing each unused element.',
      'Use a boolean array or swap technique to track used elements.',
      'The count is n!, but practice implementing the backtracking.',
    ],
  },
  {
    id: 'rec-4',
    title: 'N-Queens',
    difficulty: 'Hard',
    description:
      'The N-Queens puzzle asks: how many ways can you place n queens on an n×n chessboard so that no two queens threaten each other? Return the number of distinct solutions.\n\nExample:\nInput: n = 4\nOutput: 2\n\nInput: n = 1\nOutput: 1',
    examples: [
      { input: 'n = 4', output: '2' },
      { input: 'n = 1', output: '1' },
    ],
    constraints: [
      '1 <= n <= 9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'solveNQueens',
      params: [{ name: 'n', type: 'int' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int solveNQueens(int n) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'n = 4', inputs: [4], expected: 2 },
      { name: 'n = 1', inputs: [1], expected: 1 },
      { name: 'n = 2 (no solution)', inputs: [2], expected: 0 },
      { name: 'n = 5', inputs: [5], expected: 10 },
      { name: 'n = 8', inputs: [8], expected: 92 },
    ],
    hints: [
      'Place queens row by row.',
      'For each row, try each column and check if it is safe.',
      'Check column conflicts, and both diagonals.',
      'Use sets or arrays to track occupied columns and diagonals.',
    ],
  },
  {
    id: 'rec-5',
    title: 'Word Search in Grid',
    difficulty: 'Hard',
    description:
      'Given an m×n grid of characters (as a 1D char array of length m*n, row-major) and a word, determine if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontal or vertical). The same cell may not be used more than once. Also provide the number of columns as a parameter.\n\nExample:\nInput: board = [\'A\',\'B\',\'C\',\'E\',\'S\',\'F\',\'C\',\'S\',\'A\',\'D\',\'E\',\'E\'], cols = 4, word = "ABCCED"\nOutput: true\n\nInput: board = [\'A\',\'B\',\'C\',\'E\',\'S\',\'F\',\'C\',\'S\',\'A\',\'D\',\'E\',\'E\'], cols = 4, word = "SEE"\nOutput: true',
    examples: [
      { input: 'board = [A,B,C,E,S,F,C,S,A,D,E,E], cols = 4, word = "ABCCED"', output: 'true' },
      { input: 'board = [A,B,C,E,S,F,C,S,A,D,E,E], cols = 4, word = "SEE"', output: 'true' },
    ],
    constraints: [
      '1 <= board.length <= 200',
      '1 <= cols <= 20',
      'board.length is divisible by cols',
      '1 <= word.length <= 15',
      'board and word consist of uppercase and lowercase English letters',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'exist',
      params: [
        { name: 'board', type: 'char[]' },
        { name: 'cols', type: 'int' },
        { name: 'word', type: 'String' },
      ],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean exist(char[] board, int cols, String word) {
        // Write your solution here
        // Reconstruct 2D grid: rows = board.length / cols
        return false;
    }
}`,
    testCases: [
      {
        name: 'Word found (ABCCED)',
        inputs: [['A', 'B', 'C', 'E', 'S', 'F', 'C', 'S', 'A', 'D', 'E', 'E'], 4, 'ABCCED'],
        expected: true,
      },
      {
        name: 'Word found (SEE)',
        inputs: [['A', 'B', 'C', 'E', 'S', 'F', 'C', 'S', 'A', 'D', 'E', 'E'], 4, 'SEE'],
        expected: true,
      },
      {
        name: 'Word not found (ABCB)',
        inputs: [['A', 'B', 'C', 'E', 'S', 'F', 'C', 'S', 'A', 'D', 'E', 'E'], 4, 'ABCB'],
        expected: false,
      },
      {
        name: 'Single cell match',
        inputs: [['A'], 1, 'A'],
        expected: true,
      },
    ],
    hints: [
      'Use DFS/backtracking starting from each cell.',
      'Mark visited cells to avoid reuse.',
      'Restore the cell after backtracking.',
    ],
  },
  {
    id: 'rec-6',
    title: 'Combination Sum',
    difficulty: 'Medium',
    description:
      'Given an array of distinct positive integers (candidates) and a target integer, return the number of unique combinations that sum to the target. The same number may be chosen unlimited times. Two combinations are unique if the frequency of at least one chosen number is different.\n\nExample:\nInput: candidates = [2, 3, 6, 7], target = 7\nOutput: 2\nExplanation: [2,2,3] and [7]\n\nInput: candidates = [2, 3, 5], target = 8\nOutput: 3',
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '2', explanation: 'Combinations: [2,2,3] and [7]' },
      { input: 'candidates = [2,3,5], target = 8', output: '3', explanation: 'Combinations: [2,2,2,2], [2,3,3], [3,5]' },
    ],
    constraints: [
      '1 <= candidates.length <= 30',
      '2 <= candidates[i] <= 40',
      'All elements are distinct',
      '1 <= target <= 40',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'combinationSum',
      params: [
        { name: 'candidates', type: 'int[]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int combinationSum(int[] candidates, int target) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Two combinations', inputs: [[2, 3, 6, 7], 7], expected: 2 },
      { name: 'Three combinations', inputs: [[2, 3, 5], 8], expected: 3 },
      { name: 'No combination', inputs: [[2], 3], expected: 0 },
      { name: 'Single candidate equals target', inputs: [[7], 7], expected: 1 },
      { name: 'Multiple ways', inputs: [[1, 2, 3], 4], expected: 4 },
    ],
    hints: [
      'Use backtracking. At each step, try adding each candidate.',
      'To avoid duplicates, start from the current index, not 0.',
      'If the remaining target becomes 0, you found a valid combination.',
    ],
  },
  {
    id: 'rec-7',
    title: 'Letter Combinations of Phone Number',
    difficulty: 'Medium',
    description:
      'Given a string containing digits from 2-9, return the count of all possible letter combinations that the digits could represent (like on a phone keypad). Mapping: 2=abc, 3=def, 4=ghi, 5=jkl, 6=mno, 7=pqrs, 8=tuv, 9=wxyz.\n\nExample:\nInput: digits = "23"\nOutput: 9\n\nInput: digits = "2"\nOutput: 3',
    examples: [
      { input: 'digits = "23"', output: '9', explanation: '3 letters for 2 × 3 letters for 3 = 9' },
      { input: 'digits = "2"', output: '3' },
    ],
    constraints: [
      '0 <= digits.length <= 4',
      'digits[i] is a digit in the range [2, 9]',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'letterCombinations',
      params: [{ name: 'digits', type: 'String' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int letterCombinations(String digits) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Two digits', inputs: ['23'], expected: 9 },
      { name: 'Single digit', inputs: ['2'], expected: 3 },
      { name: 'Empty string', inputs: [''], expected: 0 },
      { name: 'Digit 7 (4 letters)', inputs: ['7'], expected: 4 },
      { name: 'Three digits', inputs: ['234'], expected: 27 },
    ],
    hints: [
      'Map each digit to its letters.',
      'Use recursion: for each digit, try each of its letters.',
      'The count is the product of the number of letters for each digit.',
    ],
  },
  {
    id: 'rec-8',
    title: 'Rat in a Maze',
    difficulty: 'Hard',
    description:
      'Given an n×n maze represented as a 1D int array (row-major, 0 = blocked, 1 = open), find the number of paths from the top-left corner (0,0) to the bottom-right corner (n-1,n-1). The rat can move right or down only. Also provide the dimension n.\n\nExample:\nInput: maze = [1,0,0,0, 1,1,0,1, 0,1,0,0, 1,1,1,1], n = 4\nOutput: 2\n\nInput: maze = [1,1, 1,1], n = 2\nOutput: 2',
    examples: [
      { input: 'maze = [1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1], n = 4', output: '2' },
      { input: 'maze = [1,1,1,1], n = 2', output: '2' },
    ],
    constraints: [
      '1 <= n <= 10',
      'maze[0] == 1 and maze[n*n - 1] == 1',
      'maze[i] is 0 or 1',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'countPaths',
      params: [
        { name: 'maze', type: 'int[]' },
        { name: 'n', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countPaths(int[] maze, int n) {
        // Write your solution here
        // Reconstruct 2D grid: maze[i * n + j]
        return 0;
    }
}`,
    testCases: [
      { name: '4x4 maze', inputs: [[1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1], 4], expected: 2 },
      { name: '2x2 all open', inputs: [[1, 1, 1, 1], 2], expected: 2 },
      { name: '1x1 maze', inputs: [[1], 1], expected: 1 },
      { name: 'No path', inputs: [[1, 0, 0, 0], 2], expected: 0 },
      { name: '3x3 single path', inputs: [[1, 1, 1, 0, 0, 1, 0, 0, 1], 3], expected: 1 },
    ],
    hints: [
      'Use recursion starting from (0,0).',
      'At each cell, try moving right and down.',
      'Base case: if you reach (n-1, n-1), return 1.',
      'If a cell is blocked or out of bounds, return 0.',
    ],
  },
];
