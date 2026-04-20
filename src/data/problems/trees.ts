import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'tr-1',
    title: 'Inorder Traversal',
    difficulty: 'Easy',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), return the inorder traversal as an int array (left, root, right).\n\nExample:\nInput: tree = [1, -1, 2, -1, -1, 3, -1]\nOutput: [1, 3, 2]\n\nInput: tree = [1]\nOutput: [1]',
    examples: [
      { input: 'tree = [1, -1, 2, -1, -1, 3, -1]', output: '[1, 3, 2]' },
      { input: 'tree = [1]', output: '[1]' },
    ],
    constraints: [
      '0 <= number of nodes <= 100',
      '-100 <= Node.val <= 100',
      '-1 represents a null node',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'inorderTraversal',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] inorderTraversal(int[] tree) {
        // Write your solution here
        // tree is level-order representation, -1 = null
        // For node at index i: left child = 2*i+1, right child = 2*i+2
        return new int[]{};
    }
}`,
    testCases: [
      { name: 'Right-skewed tree', inputs: [[1, -1, 2, -1, -1, 3, -1]], expected: [1, 3, 2] },
      { name: 'Single node', inputs: [[1]], expected: [1] },
      { name: 'Empty tree', inputs: [[]], expected: [] },
      { name: 'Complete tree', inputs: [[1, 2, 3]], expected: [2, 1, 3] },
      { name: 'Left-skewed', inputs: [[3, 2, -1, 1, -1]], expected: [1, 2, 3] },
    ],
    hints: [
      'Build the tree from the level-order array first, or navigate using index math.',
      'For node at index i: left = 2*i+1, right = 2*i+2.',
      'Inorder: traverse left, visit root, traverse right.',
    ],
  },
  {
    id: 'tr-2',
    title: 'Preorder Traversal',
    difficulty: 'Easy',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), return the preorder traversal as an int array (root, left, right).\n\nExample:\nInput: tree = [1, -1, 2, -1, -1, 3, -1]\nOutput: [1, 2, 3]\n\nInput: tree = [1, 2, 3]\nOutput: [1, 2, 3]',
    examples: [
      { input: 'tree = [1, -1, 2, -1, -1, 3, -1]', output: '[1, 2, 3]' },
      { input: 'tree = [1, 2, 3]', output: '[1, 2, 3]' },
    ],
    constraints: [
      '0 <= number of nodes <= 100',
      '-100 <= Node.val <= 100',
      '-1 represents a null node',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'preorderTraversal',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] preorderTraversal(int[] tree) {
        // Write your solution here
        // tree is level-order representation, -1 = null
        return new int[]{};
    }
}`,
    testCases: [
      { name: 'Right-skewed tree', inputs: [[1, -1, 2, -1, -1, 3, -1]], expected: [1, 2, 3] },
      { name: 'Complete tree', inputs: [[1, 2, 3]], expected: [1, 2, 3] },
      { name: 'Single node', inputs: [[5]], expected: [5] },
      { name: 'Empty tree', inputs: [[]], expected: [] },
      { name: 'Left-skewed', inputs: [[3, 2, -1, 1, -1]], expected: [3, 2, 1] },
    ],
    hints: [
      'Preorder: visit root, traverse left, traverse right.',
      'Use the index formula: left = 2*i+1, right = 2*i+2.',
    ],
  },
  {
    id: 'tr-3',
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), return the maximum depth (number of nodes along the longest path from root to a leaf).\n\nExample:\nInput: tree = [3, 9, 20, -1, -1, 15, 7]\nOutput: 3\n\nInput: tree = [1, -1, 2]\nOutput: 2',
    examples: [
      { input: 'tree = [3, 9, 20, -1, -1, 15, 7]', output: '3' },
      { input: 'tree = [1, -1, 2]', output: '2' },
    ],
    constraints: [
      '0 <= number of nodes <= 10^4',
      '-100 <= Node.val <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'maxDepth',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int maxDepth(int[] tree) {
        // Write your solution here
        return 0;
    }
}`,
    testCases: [
      { name: 'Balanced tree depth 3', inputs: [[3, 9, 20, -1, -1, 15, 7]], expected: 3 },
      { name: 'Right-only depth 2', inputs: [[1, -1, 2]], expected: 2 },
      { name: 'Empty tree', inputs: [[]], expected: 0 },
      { name: 'Single node', inputs: [[1]], expected: 1 },
      { name: 'Left-skewed depth 3', inputs: [[1, 2, -1, 3, -1]], expected: 3 },
    ],
    hints: [
      'Use recursion: depth = 1 + max(depth(left), depth(right)).',
      'Base case: null node returns 0.',
    ],
  },
  {
    id: 'tr-4',
    title: 'Balanced Binary Tree',
    difficulty: 'Easy',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), determine if it is height-balanced. A tree is balanced if the depth of the two subtrees of every node never differs by more than one.\n\nExample:\nInput: tree = [3, 9, 20, -1, -1, 15, 7]\nOutput: true\n\nInput: tree = [1, 2, 2, 3, 3, -1, -1, 4, 4, -1, -1]\nOutput: false',
    examples: [
      { input: 'tree = [3, 9, 20, -1, -1, 15, 7]', output: 'true' },
      { input: 'tree = [1, 2, 2, 3, 3, -1, -1, 4, 4]', output: 'false' },
    ],
    constraints: [
      '0 <= number of nodes <= 5000',
      '-10^4 <= Node.val <= 10^4',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'isBalanced',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isBalanced(int[] tree) {
        // Write your solution here
        return true;
    }
}`,
    testCases: [
      { name: 'Balanced tree', inputs: [[3, 9, 20, -1, -1, 15, 7]], expected: true },
      { name: 'Unbalanced tree', inputs: [[1, 2, 2, 3, 3, -1, -1, 4, 4]], expected: false },
      { name: 'Empty tree', inputs: [[]], expected: true },
      { name: 'Single node', inputs: [[1]], expected: true },
      { name: 'Linear tree', inputs: [[1, 2, -1, 3, -1]], expected: false },
    ],
    hints: [
      'Compute height recursively and check balance at each node.',
      'Return -1 if an imbalance is found to short-circuit.',
    ],
  },
  {
    id: 'tr-5',
    title: 'Level Order Traversal',
    difficulty: 'Medium',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), return the level-order traversal as a flattened int array (visiting nodes level by level, left to right, skipping nulls).\n\nExample:\nInput: tree = [3, 9, 20, -1, -1, 15, 7]\nOutput: [3, 9, 20, 15, 7]\n\nInput: tree = [1]\nOutput: [1]',
    examples: [
      { input: 'tree = [3, 9, 20, -1, -1, 15, 7]', output: '[3, 9, 20, 15, 7]' },
      { input: 'tree = [1]', output: '[1]' },
    ],
    constraints: [
      '0 <= number of nodes <= 2000',
      '-1000 <= Node.val <= 1000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'levelOrder',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] levelOrder(int[] tree) {
        // Write your solution here
        // Use a queue (BFS) to traverse level by level
        return new int[]{};
    }
}`,
    testCases: [
      { name: 'Three-level tree', inputs: [[3, 9, 20, -1, -1, 15, 7]], expected: [3, 9, 20, 15, 7] },
      { name: 'Single node', inputs: [[1]], expected: [1] },
      { name: 'Empty tree', inputs: [[]], expected: [] },
      { name: 'Left-skewed', inputs: [[1, 2, -1, 3, -1]], expected: [1, 2, 3] },
      { name: 'Complete binary tree', inputs: [[1, 2, 3, 4, 5, 6, 7]], expected: [1, 2, 3, 4, 5, 6, 7] },
    ],
    hints: [
      'Use a queue (BFS). Start with the root.',
      'For each node, add its non-null children to the queue.',
      'Collect node values as you dequeue them.',
    ],
  },
  {
    id: 'tr-6',
    title: 'Lowest Common Ancestor',
    difficulty: 'Medium',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes) and two node values p and q, find the lowest common ancestor (LCA) and return its value. Both p and q are guaranteed to exist in the tree. All node values are unique.\n\nExample:\nInput: tree = [3, 5, 1, 6, 2, 0, 8, -1, -1, 7, 4], p = 5, q = 1\nOutput: 3\n\nInput: tree = [3, 5, 1, 6, 2, 0, 8, -1, -1, 7, 4], p = 5, q = 4\nOutput: 5',
    examples: [
      { input: 'tree = [3,5,1,6,2,0,8,-1,-1,7,4], p = 5, q = 1', output: '3' },
      { input: 'tree = [3,5,1,6,2,0,8,-1,-1,7,4], p = 5, q = 4', output: '5', explanation: 'A node can be a descendant of itself' },
    ],
    constraints: [
      '2 <= number of nodes <= 10^5',
      'All node values are unique',
      'p != q',
      'p and q exist in the tree',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'lowestCommonAncestor',
      params: [
        { name: 'tree', type: 'int[]' },
        { name: 'p', type: 'int' },
        { name: 'q', type: 'int' },
      ],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int lowestCommonAncestor(int[] tree, int p, int q) {
        // Write your solution here
        return -1;
    }
}`,
    testCases: [
      { name: 'LCA is root', inputs: [[3, 5, 1, 6, 2, 0, 8, -1, -1, 7, 4], 5, 1], expected: 3 },
      { name: 'LCA is one of the nodes', inputs: [[3, 5, 1, 6, 2, 0, 8, -1, -1, 7, 4], 5, 4], expected: 5 },
      { name: 'LCA of siblings', inputs: [[1, 2, 3], 2, 3], expected: 1 },
      { name: 'Two-node tree', inputs: [[1, 2, -1], 1, 2], expected: 1 },
    ],
    hints: [
      'Build the tree, then use recursion.',
      'If the current node is p or q, return it.',
      'Recurse on left and right. If both return non-null, current node is the LCA.',
    ],
  },
  {
    id: 'tr-7',
    title: 'Validate Binary Search Tree',
    difficulty: 'Medium',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), determine if it is a valid binary search tree (BST). A BST has the property that for every node, all values in its left subtree are strictly less, and all values in its right subtree are strictly greater.\n\nExample:\nInput: tree = [2, 1, 3]\nOutput: true\n\nInput: tree = [5, 1, 4, -1, -1, 3, 6]\nOutput: false',
    examples: [
      { input: 'tree = [2, 1, 3]', output: 'true' },
      { input: 'tree = [5, 1, 4, -1, -1, 3, 6]', output: 'false', explanation: 'Node 4 is in the right subtree of 5 but has child 3 < 5' },
    ],
    constraints: [
      '1 <= number of nodes <= 10^4',
      '-2^31 <= Node.val <= 2^31 - 1',
      'Node value -1 is reserved for null',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'isValidBST',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isValidBST(int[] tree) {
        // Write your solution here
        return true;
    }
}`,
    testCases: [
      { name: 'Valid BST', inputs: [[2, 1, 3]], expected: true },
      { name: 'Invalid BST', inputs: [[5, 1, 4, -1, -1, 3, 6]], expected: false },
      { name: 'Single node', inputs: [[1]], expected: true },
      { name: 'Left-skewed valid', inputs: [[3, 2, -1, 1, -1]], expected: true },
      { name: 'Equal values invalid', inputs: [[2, 2, 2]], expected: false },
    ],
    hints: [
      'Use a helper function with min/max bounds.',
      'For each node, ensure its value is within (min, max).',
      'Update bounds as you go left (max = node.val) and right (min = node.val).',
    ],
  },
  {
    id: 'tr-8',
    title: 'Path Sum',
    difficulty: 'Easy',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes) and a target sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the target sum.\n\nExample:\nInput: tree = [5, 4, 8, 11, -1, 13, 4, 7, 2, -1, -1, -1, -1, -1, 1], targetSum = 22\nOutput: true\nExplanation: Path 5 → 4 → 11 → 2 = 22\n\nInput: tree = [1, 2, 3], targetSum = 5\nOutput: false',
    examples: [
      { input: 'tree = [5,4,8,11,-1,13,4,7,2,-1,-1,-1,-1,-1,1], targetSum = 22', output: 'true', explanation: '5 → 4 → 11 → 2' },
      { input: 'tree = [1, 2, 3], targetSum = 5', output: 'false' },
    ],
    constraints: [
      '0 <= number of nodes <= 5000',
      '-1000 <= Node.val <= 1000',
      '-1000 <= targetSum <= 1000',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'hasPathSum',
      params: [
        { name: 'tree', type: 'int[]' },
        { name: 'targetSum', type: 'int' },
      ],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean hasPathSum(int[] tree, int targetSum) {
        // Write your solution here
        return false;
    }
}`,
    testCases: [
      { name: 'Path exists', inputs: [[5, 4, 8, 11, -1, 13, 4, 7, 2, -1, -1, -1, -1, -1, 1], 22], expected: true },
      { name: 'No valid path', inputs: [[1, 2, 3], 5], expected: false },
      { name: 'Empty tree', inputs: [[], 0], expected: false },
      { name: 'Single node match', inputs: [[5], 5], expected: true },
      { name: 'Single node no match', inputs: [[5], 1], expected: false },
    ],
    hints: [
      'Use recursion: subtract the current node value from targetSum.',
      'At a leaf, check if remaining sum equals the leaf value.',
      'Return true if either subtree has a valid path.',
    ],
  },
  {
    id: 'tr-9',
    title: 'Invert Binary Tree',
    difficulty: 'Easy',
    description:
      'Given a binary tree represented as a level-order int array (-1 for null nodes), invert the tree (swap left and right children at every node) and return the result as a level-order int array.\n\nExample:\nInput: tree = [4, 2, 7, 1, 3, 6, 9]\nOutput: [4, 7, 2, 9, 6, 3, 1]\n\nInput: tree = [2, 1, 3]\nOutput: [2, 3, 1]',
    examples: [
      { input: 'tree = [4, 2, 7, 1, 3, 6, 9]', output: '[4, 7, 2, 9, 6, 3, 1]' },
      { input: 'tree = [2, 1, 3]', output: '[2, 3, 1]' },
    ],
    constraints: [
      '0 <= number of nodes <= 100',
      '-100 <= Node.val <= 100',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'invertTree',
      params: [{ name: 'tree', type: 'int[]' }],
      returnType: 'int[]',
    },
    boilerplate: `public class Solution {
    public int[] invertTree(int[] tree) {
        // Write your solution here
        // Swap children at every level
        return tree;
    }
}`,
    testCases: [
      { name: 'Complete tree', inputs: [[4, 2, 7, 1, 3, 6, 9]], expected: [4, 7, 2, 9, 6, 3, 1] },
      { name: 'Three nodes', inputs: [[2, 1, 3]], expected: [2, 3, 1] },
      { name: 'Empty tree', inputs: [[]], expected: [] },
      { name: 'Single node', inputs: [[1]], expected: [1] },
      { name: 'With nulls', inputs: [[1, 2, -1]], expected: [1, -1, 2] },
    ],
    hints: [
      'Recursively swap left and right children.',
      'You can work directly on the array: for node at index i, swap children at 2i+1 and 2i+2.',
      'Be careful with null nodes (-1) — they swap too.',
    ],
  },
];
