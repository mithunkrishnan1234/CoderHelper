import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'mat-1',
    title: 'Matrix Transpose',
    difficulty: 'Easy',
    description:
      'Given a 2D integer matrix, return its transpose. The transpose of a matrix flips the matrix over its main diagonal, switching rows and columns.\n\nExample:\n- Input: [[1,2,3],[4,5,6],[7,8,9]] → Output: [[1,4,7],[2,5,8],[3,6,9]]\n- Input: [[1,2],[3,4],[5,6]] → Output: [[1,3,5],[2,4,6]]',
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[1,4,7],[2,5,8],[3,6,9]]' },
      { input: 'matrix = [[1,2],[3,4],[5,6]]', output: '[[1,3,5],[2,4,6]]' },
    ],
    constraints: [
      '1 <= matrix.length, matrix[0].length <= 1000',
      '-10^9 <= matrix[i][j] <= 10^9',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'transpose',
      params: [{ name: 'matrix', type: 'int[][]' }],
      returnType: 'int[][]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[][] transpose(int[][] matrix) {',
      '        // Write your solution here',
      '        return new int[][]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Square matrix', inputs: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [[1, 4, 7], [2, 5, 8], [3, 6, 9]] },
      { name: 'Non-square matrix', inputs: [[[1, 2], [3, 4], [5, 6]]], expected: [[1, 3, 5], [2, 4, 6]] },
      { name: 'Single row', inputs: [[[1, 2, 3]]], expected: [[1], [2], [3]] },
      { name: '1x1 matrix', inputs: [[[7]]], expected: [[7]] },
    ],
    hints: [
      'Create a new matrix with dimensions [cols][rows].',
      'result[j][i] = matrix[i][j].',
    ],
  },
  {
    id: 'mat-2',
    title: 'Spiral Order Traversal',
    difficulty: 'Medium',
    description:
      'Given an m x n matrix, return all elements in spiral order (clockwise from the outer layer inward).\n\nExample:\n- Input: [[1,2,3],[4,5,6],[7,8,9]] → Output: [1,2,3,6,9,8,7,4,5]\n- Input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]] → Output: [1,2,3,4,8,12,11,10,9,5,6,7]',
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' },
      { input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]', output: '[1,2,3,4,8,12,11,10,9,5,6,7]' },
    ],
    constraints: [
      '1 <= m, n <= 10',
      '-100 <= matrix[i][j] <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'spiralOrder',
      params: [{ name: 'matrix', type: 'int[][]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] spiralOrder(int[][] matrix) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: '3x3 matrix', inputs: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 3, 6, 9, 8, 7, 4, 5] },
      { name: '3x4 matrix', inputs: [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]], expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
      { name: 'Single row', inputs: [[[1, 2, 3]]], expected: [1, 2, 3] },
      { name: 'Single column', inputs: [[[1], [2], [3]]], expected: [1, 2, 3] },
    ],
    hints: [
      'Track four boundaries: top, bottom, left, right.',
      'Traverse right, then down, then left, then up, and shrink boundaries after each pass.',
    ],
  },
  {
    id: 'mat-3',
    title: 'Rotate Matrix 90 Degrees',
    difficulty: 'Medium',
    description:
      'Given an n x n 2D matrix, rotate it 90 degrees clockwise and return the result.\n\nExample:\n- Input: [[1,2,3],[4,5,6],[7,8,9]] → Output: [[7,4,1],[8,5,2],[9,6,3]]\n- Input: [[1,2],[3,4]] → Output: [[3,1],[4,2]]',
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[[7,4,1],[8,5,2],[9,6,3]]' },
      { input: 'matrix = [[1,2],[3,4]]', output: '[[3,1],[4,2]]' },
    ],
    constraints: [
      '1 <= n <= 20',
      '-1000 <= matrix[i][j] <= 1000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'rotateMatrix',
      params: [{ name: 'matrix', type: 'int[][]' }],
      returnType: 'int[][]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[][] rotateMatrix(int[][] matrix) {',
      '        // Write your solution here',
      '        return matrix;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: '3x3 matrix', inputs: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] },
      { name: '2x2 matrix', inputs: [[[1, 2], [3, 4]]], expected: [[3, 1], [4, 2]] },
      { name: '1x1 matrix', inputs: [[[1]]], expected: [[1]] },
      { name: '4x4 matrix', inputs: [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]], expected: [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]] },
    ],
    hints: [
      'Transpose the matrix, then reverse each row.',
      'Alternatively, result[j][n-1-i] = matrix[i][j].',
    ],
  },
  {
    id: 'mat-4',
    title: 'Search in Sorted Matrix',
    difficulty: 'Medium',
    description:
      'Write an efficient algorithm that searches for a target value in an m x n matrix. Each row is sorted left to right, and the first element of each row is greater than the last element of the previous row. Return true if the target is found.\n\nExample:\n- Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 → Output: true\n- Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 → Output: false',
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3', output: 'true' },
      { input: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13', output: 'false' },
    ],
    constraints: [
      '1 <= m, n <= 100',
      '-10^4 <= matrix[i][j], target <= 10^4',
      'Rows are sorted and first element of each row > last of previous row.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'searchMatrix',
      params: [
        { name: 'matrix', type: 'int[][]' },
        { name: 'target', type: 'int' },
      ],
      returnType: 'boolean',
    },
    boilerplate: [
      'public class Solution {',
      '    public boolean searchMatrix(int[][] matrix, int target) {',
      '        // Write your solution here',
      '        return false;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Target exists', inputs: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3], expected: true },
      { name: 'Target missing', inputs: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13], expected: false },
      { name: 'Single element found', inputs: [[[5]], 5], expected: true },
      { name: 'Target at end', inputs: [[[1, 2], [3, 4]], 4], expected: true },
    ],
    hints: [
      'Treat the 2D matrix as a flattened sorted array and use binary search.',
      'Map index mid to row = mid / cols, col = mid % cols.',
    ],
  },
  {
    id: 'mat-5',
    title: 'Set Matrix Zeroes',
    difficulty: 'Medium',
    description:
      'Given an m x n matrix, if an element is 0, set its entire row and column to 0. Return the modified matrix.\n\nExample:\n- Input: [[1,1,1],[1,0,1],[1,1,1]] → Output: [[1,0,1],[0,0,0],[1,0,1]]\n- Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]] → Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]',
    examples: [
      { input: 'matrix = [[1,1,1],[1,0,1],[1,1,1]]', output: '[[1,0,1],[0,0,0],[1,0,1]]' },
      { input: 'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]', output: '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]' },
    ],
    constraints: [
      '1 <= m, n <= 200',
      '-2^31 <= matrix[i][j] <= 2^31 - 1',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'setZeroes',
      params: [{ name: 'matrix', type: 'int[][]' }],
      returnType: 'int[][]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[][] setZeroes(int[][] matrix) {',
      '        // Write your solution here',
      '        return matrix;',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: 'Center zero', inputs: [[[1, 1, 1], [1, 0, 1], [1, 1, 1]]], expected: [[1, 0, 1], [0, 0, 0], [1, 0, 1]] },
      { name: 'Corner zeroes', inputs: [[[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]], expected: [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] },
      { name: 'No zeroes', inputs: [[[1, 2], [3, 4]]], expected: [[1, 2], [3, 4]] },
      { name: 'All zeroes', inputs: [[[0, 0], [0, 0]]], expected: [[0, 0], [0, 0]] },
    ],
    hints: [
      'First pass: record which rows and columns contain zeroes.',
      'Use the first row and first column as markers to achieve O(1) extra space.',
    ],
  },
  {
    id: 'mat-6',
    title: 'Diagonal Traversal',
    difficulty: 'Medium',
    description:
      'Given an m x n matrix, return all elements in diagonal order. Start from the top-left, alternate direction each diagonal (first up-right, then down-left, etc.).\n\nExample:\n- Input: [[1,2,3],[4,5,6],[7,8,9]] → Output: [1,2,4,7,5,3,6,8,9]\n- Input: [[1,2],[3,4]] → Output: [1,2,3,4]',
    examples: [
      { input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,4,7,5,3,6,8,9]' },
      { input: 'matrix = [[1,2],[3,4]]', output: '[1,2,3,4]' },
    ],
    constraints: [
      '1 <= m, n <= 100',
      '-10^5 <= matrix[i][j] <= 10^5',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'diagonalTraversal',
      params: [{ name: 'matrix', type: 'int[][]' }],
      returnType: 'int[]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[] diagonalTraversal(int[][] matrix) {',
      '        // Write your solution here',
      '        return new int[]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: '3x3 matrix', inputs: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: [1, 2, 4, 7, 5, 3, 6, 8, 9] },
      { name: '2x2 matrix', inputs: [[[1, 2], [3, 4]]], expected: [1, 2, 3, 4] },
      { name: 'Single element', inputs: [[[5]]], expected: [5] },
      { name: 'Single row', inputs: [[[1, 2, 3, 4]]], expected: [1, 2, 3, 4] },
    ],
    hints: [
      'There are m + n - 1 diagonals. On even diagonals go up-right, on odd go down-left.',
      'Handle boundary conditions when the diagonal hits the edges.',
    ],
  },
  {
    id: 'mat-7',
    title: 'Matrix Multiplication',
    difficulty: 'Medium',
    description:
      'Given two matrices A (m x k) and B (k x n), return their product C (m x n) where C[i][j] = sum of A[i][p] * B[p][j] for all p.\n\nExample:\n- Input: A = [[1,2],[3,4]], B = [[5,6],[7,8]] → Output: [[19,22],[43,50]]\n- Input: A = [[1,0,2]], B = [[2],[0],[1]] → Output: [[4]]',
    examples: [
      { input: 'A = [[1,2],[3,4]], B = [[5,6],[7,8]]', output: '[[19,22],[43,50]]' },
      { input: 'A = [[1,0,2]], B = [[2],[0],[1]]', output: '[[4]]' },
    ],
    constraints: [
      '1 <= m, k, n <= 100',
      '-100 <= A[i][j], B[i][j] <= 100',
      'Number of columns of A equals number of rows of B.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'multiply',
      params: [
        { name: 'A', type: 'int[][]' },
        { name: 'B', type: 'int[][]' },
      ],
      returnType: 'int[][]',
    },
    boilerplate: [
      'public class Solution {',
      '    public int[][] multiply(int[][] A, int[][] B) {',
      '        // Write your solution here',
      '        return new int[][]{};',
      '    }',
      '}',
    ].join('\n'),
    testCases: [
      { name: '2x2 matrices', inputs: [[[1, 2], [3, 4]], [[5, 6], [7, 8]]], expected: [[19, 22], [43, 50]] },
      { name: 'Row times column', inputs: [[[1, 0, 2]], [[2], [0], [1]]], expected: [[4]] },
      { name: 'Identity multiplication', inputs: [[[1, 0], [0, 1]], [[3, 4], [5, 6]]], expected: [[3, 4], [5, 6]] },
      { name: 'Rectangular matrices', inputs: [[[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]]], expected: [[58, 64], [139, 154]] },
    ],
    hints: [
      'Use three nested loops: i over rows of A, j over columns of B, p over the shared dimension.',
      'C[i][j] += A[i][p] * B[p][j].',
    ],
  },
];
