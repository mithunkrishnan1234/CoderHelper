import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'gr-1',
    title: 'BFS Traversal',
    difficulty: 'Medium',
    description:
      'Given an undirected graph with n nodes (0-indexed) and a list of edges, perform a Breadth-First Search starting from node 0. Return the visited order as an int array. When multiple neighbors are available, visit them in ascending order.\n\nExample:\nInput: n = 5, edges = [[0,1],[0,2],[1,3],[2,4]]\nOutput: [0, 1, 2, 3, 4]\n\nInput: n = 3, edges = [[0,1],[1,2]]\nOutput: [0, 1, 2]',
    examples: [
      { input: 'n = 5, edges = [[0,1],[0,2],[1,3],[2,4]]', output: '[0, 1, 2, 3, 4]' },
      { input: 'n = 3, edges = [[0,1],[1,2]]', output: '[0, 1, 2]' },
    ],
    constraints: [
      '1 <= n <= 1000',
      '0 <= edges.length <= n*(n-1)/2',
      'edges[i].length == 2',
      '0 <= edges[i][j] < n',
      'No duplicate edges or self-loops',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'bfs',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] bfs(int n, int[][] edges) {
        // Write your solution here
        // Build adjacency list, then BFS from node 0
        return new int[]{};
    }
}`,
    testCases: [
      { name: 'Tree-like graph', inputs: [5, [[0, 1], [0, 2], [1, 3], [2, 4]]], expected: [0, 1, 2, 3, 4] },
      { name: 'Linear graph', inputs: [3, [[0, 1], [1, 2]]], expected: [0, 1, 2] },
      { name: 'Single node', inputs: [1, []], expected: [0] },
      { name: 'Disconnected (from 0)', inputs: [4, [[0, 1], [2, 3]]], expected: [0, 1] },
      { name: 'Complete graph K3', inputs: [3, [[0, 1], [0, 2], [1, 2]]], expected: [0, 1, 2] },
    ],
    hints: [
      'Build an adjacency list from the edges.',
      'Use a queue. Start by enqueuing node 0.',
      'Sort neighbors to ensure ascending visit order.',
      'Track visited nodes with a boolean array.',
    ],
  },
  {
    id: 'gr-2',
    title: 'DFS Traversal',
    difficulty: 'Medium',
    description:
      'Given an undirected graph with n nodes (0-indexed) and a list of edges, perform a Depth-First Search starting from node 0. Return the visited order as an int array. When multiple neighbors are available, visit them in ascending order.\n\nExample:\nInput: n = 5, edges = [[0,1],[0,2],[1,3],[2,4]]\nOutput: [0, 1, 3, 2, 4]\n\nInput: n = 3, edges = [[0,1],[1,2]]\nOutput: [0, 1, 2]',
    examples: [
      { input: 'n = 5, edges = [[0,1],[0,2],[1,3],[2,4]]', output: '[0, 1, 3, 2, 4]' },
      { input: 'n = 3, edges = [[0,1],[1,2]]', output: '[0, 1, 2]' },
    ],
    constraints: [
      '1 <= n <= 1000',
      '0 <= edges.length <= n*(n-1)/2',
      'edges[i].length == 2',
      '0 <= edges[i][j] < n',
      'No duplicate edges or self-loops',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'dfs',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] dfs(int n, int[][] edges) {
        // Write your solution here
        // Build adjacency list, then DFS from node 0
        return new int[]{};
    }
}`,
    testCases: [
      { name: 'Tree-like graph', inputs: [5, [[0, 1], [0, 2], [1, 3], [2, 4]]], expected: [0, 1, 3, 2, 4] },
      { name: 'Linear graph', inputs: [3, [[0, 1], [1, 2]]], expected: [0, 1, 2] },
      { name: 'Single node', inputs: [1, []], expected: [0] },
      { name: 'Disconnected (from 0)', inputs: [4, [[0, 1], [2, 3]]], expected: [0, 1] },
      { name: 'Complete graph K3', inputs: [3, [[0, 1], [0, 2], [1, 2]]], expected: [0, 1, 2] },
    ],
    hints: [
      'Build an adjacency list. Sort neighbors in ascending order.',
      'Use recursion or a stack for DFS.',
      'Track visited nodes to avoid cycles.',
    ],
  },
  {
    id: 'gr-3',
    title: 'Detect Cycle in Undirected Graph',
    difficulty: 'Medium',
    description:
      'Given an undirected graph with n nodes (0-indexed) and a list of edges, determine if the graph contains a cycle. Return true if a cycle exists, false otherwise.\n\nExample:\nInput: n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]\nOutput: true\n\nInput: n = 3, edges = [[0,1],[1,2]]\nOutput: false',
    examples: [
      { input: 'n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]', output: 'true' },
      { input: 'n = 3, edges = [[0,1],[1,2]]', output: 'false' },
    ],
    constraints: [
      '1 <= n <= 1000',
      '0 <= edges.length <= n*(n-1)/2',
      'No duplicate edges or self-loops',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'hasCycle',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
      ],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean hasCycle(int n, int[][] edges) {
        // Write your solution here
        return false;
    }
}`,
    testCases: [
      { name: 'Square cycle', inputs: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], expected: true },
      { name: 'No cycle (linear)', inputs: [3, [[0, 1], [1, 2]]], expected: false },
      { name: 'No edges', inputs: [2, []], expected: false },
      { name: 'Triangle', inputs: [3, [[0, 1], [1, 2], [0, 2]]], expected: true },
      { name: 'Tree (no cycle)', inputs: [5, [[0, 1], [0, 2], [1, 3], [1, 4]]], expected: false },
    ],
    hints: [
      'Use DFS and track the parent of each node.',
      'If you visit a neighbor that is already visited and not the parent, there is a cycle.',
      'Alternatively, use Union-Find (Disjoint Set Union).',
    ],
  },
  {
    id: 'gr-4',
    title: 'Detect Cycle in Directed Graph',
    difficulty: 'Medium',
    description:
      'Given a directed graph with n nodes (0-indexed) and a list of directed edges [from, to], determine if the graph contains a cycle. Return true if a cycle exists, false otherwise.\n\nExample:\nInput: n = 4, edges = [[0,1],[1,2],[2,3]]\nOutput: false\n\nInput: n = 3, edges = [[0,1],[1,2],[2,0]]\nOutput: true',
    examples: [
      { input: 'n = 4, edges = [[0,1],[1,2],[2,3]]', output: 'false' },
      { input: 'n = 3, edges = [[0,1],[1,2],[2,0]]', output: 'true' },
    ],
    constraints: [
      '1 <= n <= 1000',
      '0 <= edges.length <= n*(n-1)',
      'edges[i].length == 2',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'hasCycleDirected',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
      ],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean hasCycleDirected(int n, int[][] edges) {
        // Write your solution here
        return false;
    }
}`,
    testCases: [
      { name: 'No cycle (linear)', inputs: [4, [[0, 1], [1, 2], [2, 3]]], expected: false },
      { name: 'Simple cycle', inputs: [3, [[0, 1], [1, 2], [2, 0]]], expected: true },
      { name: 'Self-loop', inputs: [2, [[0, 0]]], expected: true },
      { name: 'No edges', inputs: [3, []], expected: false },
      { name: 'Diamond no cycle', inputs: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: false },
    ],
    hints: [
      'Use DFS with three states: unvisited, in-progress, completed.',
      'If you visit a node that is in-progress, there is a cycle (back edge).',
      'Alternatively, use Kahn\'s algorithm (topological sort with BFS).',
    ],
  },
  {
    id: 'gr-5',
    title: 'Topological Sort',
    difficulty: 'Hard',
    description:
      'Given a directed acyclic graph (DAG) with n nodes (0-indexed) and a list of directed edges [from, to], return a topological ordering as an int array. If multiple valid orderings exist, return the lexicographically smallest one. If the graph has a cycle, return an empty array.\n\nExample:\nInput: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]]\nOutput: [0, 1, 2, 3]\n\nInput: n = 2, edges = [[1,0]]\nOutput: [1, 0]',
    examples: [
      { input: 'n = 4, edges = [[0,1],[0,2],[1,3],[2,3]]', output: '[0, 1, 2, 3]' },
      { input: 'n = 2, edges = [[1,0]]', output: '[1, 0]' },
    ],
    constraints: [
      '1 <= n <= 1000',
      '0 <= edges.length <= n*(n-1)/2',
      'The graph is a DAG (no cycles in valid input)',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'topologicalSort',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
      ],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] topologicalSort(int n, int[][] edges) {
        // Write your solution here
        return new int[]{};
    }
}`,
    testCases: [
      { name: 'Diamond DAG', inputs: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: [0, 1, 2, 3] },
      { name: 'Two nodes', inputs: [2, [[1, 0]]], expected: [1, 0] },
      { name: 'No edges', inputs: [3, []], expected: [0, 1, 2] },
      { name: 'Linear chain', inputs: [3, [[0, 1], [1, 2]]], expected: [0, 1, 2] },
      { name: 'Has cycle', inputs: [2, [[0, 1], [1, 0]]], expected: [] },
    ],
    hints: [
      'Use Kahn\'s algorithm: BFS with in-degree tracking.',
      'Use a priority queue (min-heap) instead of a regular queue for lexicographic order.',
      'If the result has fewer than n nodes, there is a cycle.',
    ],
  },
  {
    id: 'gr-6',
    title: 'Number of Islands',
    difficulty: 'Medium',
    description:
      'Given a 2D grid represented as a 1D char array (row-major) of \'1\' (land) and \'0\' (water), and the number of columns, count the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.\n\nExample:\nInput: grid = [\'1\',\'1\',\'1\',\'1\',\'0\',\'0\',\'1\',\'0\',\'0\',\'1\',\'1\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\',\'0\'], cols = 5\nOutput: 1\n\nInput: grid = [\'1\',\'1\',\'0\',\'0\',\'0\',\'0\',\'1\',\'0\',\'0\',\'0\',\'0\',\'0\',\'1\',\'0\',\'0\',\'0\',\'0\',\'1\',\'0\',\'1\'], cols = 5\nOutput: 3',
    examples: [
      { input: 'grid = [1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0], cols = 5', output: '1' },
      { input: 'grid = [1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1], cols = 5', output: '3' },
    ],
    constraints: [
      '1 <= grid.length <= 90000',
      '1 <= cols <= 300',
      'grid[i] is \'0\' or \'1\'',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'numIslands',
      params: [
        { name: 'grid', type: 'char[]' },
        { name: 'cols', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int numIslands(char[] grid, int cols) {
        // Write your solution here
        // rows = grid.length / cols
        // grid[i * cols + j] gives cell at row i, col j
        return 0;
    }
}`,
    testCases: [
      {
        name: 'Single island',
        inputs: [['1', '1', '1', '1', '0', '0', '1', '0', '0', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'], 5],
        expected: 1,
      },
      {
        name: 'Three islands',
        inputs: [['1', '1', '0', '0', '0', '0', '1', '0', '0', '0', '0', '0', '1', '0', '0', '0', '0', '1', '0', '1'], 5],
        expected: 3,
      },
      { name: 'All water', inputs: [['0', '0', '0', '0'], 2], expected: 0 },
      { name: 'All land', inputs: [['1', '1', '1', '1'], 2], expected: 1 },
      { name: 'Single cell land', inputs: [['1'], 1], expected: 1 },
    ],
    hints: [
      'Iterate through each cell. When you find a \'1\', increment count and flood-fill (BFS/DFS) to mark connected land as visited.',
      'Mark visited cells by changing \'1\' to \'0\'.',
    ],
  },
  {
    id: 'gr-7',
    title: 'Shortest Path (Unweighted)',
    difficulty: 'Medium',
    description:
      'Given an undirected, unweighted graph with n nodes (0-indexed) and a list of edges, find the shortest path distance from a source node to a destination node. Return -1 if no path exists.\n\nExample:\nInput: n = 5, edges = [[0,1],[1,2],[2,3],[3,4],[0,4]], src = 0, dest = 4\nOutput: 1\n\nInput: n = 4, edges = [[0,1],[1,2]], src = 0, dest = 3\nOutput: -1',
    examples: [
      { input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4],[0,4]], src = 0, dest = 4', output: '1' },
      { input: 'n = 4, edges = [[0,1],[1,2]], src = 0, dest = 3', output: '-1' },
    ],
    constraints: [
      '1 <= n <= 1000',
      '0 <= edges.length <= n*(n-1)/2',
      '0 <= src, dest < n',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'shortestPath',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
        { name: 'src', type: 'int' },
        { name: 'dest', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int shortestPath(int n, int[][] edges, int src, int dest) {
        // Write your solution here
        return -1;
    }
}`,
    testCases: [
      { name: 'Direct edge exists', inputs: [5, [[0, 1], [1, 2], [2, 3], [3, 4], [0, 4]], 0, 4], expected: 1 },
      { name: 'No path', inputs: [4, [[0, 1], [1, 2]], 0, 3], expected: -1 },
      { name: 'Same source and dest', inputs: [3, [[0, 1], [1, 2]], 0, 0], expected: 0 },
      { name: 'Two-hop path', inputs: [3, [[0, 1], [1, 2]], 0, 2], expected: 2 },
      { name: 'Single node', inputs: [1, [], 0, 0], expected: 0 },
    ],
    hints: [
      'Use BFS from the source node.',
      'BFS naturally finds the shortest path in an unweighted graph.',
      'Track distance with a dist array initialized to -1.',
    ],
  },
  {
    id: 'gr-8',
    title: 'Number of Connected Components',
    difficulty: 'Hard',
    description:
      'Given an undirected graph with n nodes (0-indexed) and a list of edges, return the number of connected components in the graph.\n\nExample:\nInput: n = 5, edges = [[0,1],[1,2],[3,4]]\nOutput: 2\n\nInput: n = 5, edges = [[0,1],[0,2],[0,3],[0,4]]\nOutput: 1',
    examples: [
      { input: 'n = 5, edges = [[0,1],[1,2],[3,4]]', output: '2' },
      { input: 'n = 5, edges = [[0,1],[0,2],[0,3],[0,4]]', output: '1' },
    ],
    constraints: [
      '1 <= n <= 2000',
      '0 <= edges.length <= n*(n-1)/2',
      'No duplicate edges or self-loops',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'countComponents',
      params: [
        { name: 'n', type: 'int' },
        { name: 'edges', type: 'int[][]' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countComponents(int n, int[][] edges) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Two components', inputs: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
      { name: 'One component (star)', inputs: [5, [[0, 1], [0, 2], [0, 3], [0, 4]]], expected: 1 },
      { name: 'All isolated', inputs: [4, []], expected: 4 },
      { name: 'Single node', inputs: [1, []], expected: 1 },
      { name: 'Fully connected', inputs: [3, [[0, 1], [1, 2], [0, 2]]], expected: 1 },
    ],
    hints: [
      'Use DFS or BFS from each unvisited node. Each traversal is one component.',
      'Alternatively, use Union-Find (Disjoint Set Union).',
      'Count how many times you start a new traversal.',
    ],
  },
];
