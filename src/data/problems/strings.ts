import type { Problem } from '../../types';

export const problems: Problem[] = [
  {
    id: 'str-1',
    title: 'Reverse a String',
    difficulty: 'Easy',
    description:
      'Given a string, return a new string with the characters in reverse order.',
    examples: [
      { input: 's = "hello"', output: '"olleh"' },
      { input: 's = "Java"', output: '"avaJ"' },
    ],
    constraints: ['0 <= s.length <= 10000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'reverseString',
      params: [{ name: 's', type: 'String' }],
      returnType: 'String',
    },
    boilerplate: `public class Solution {
    public String reverseString(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic string', inputs: ['hello'], expected: 'olleh' },
      { name: 'Single character', inputs: ['a'], expected: 'a' },
      { name: 'Empty string', inputs: [''], expected: '' },
      { name: 'Palindrome', inputs: ['racecar'], expected: 'racecar' },
      { name: 'With spaces', inputs: ['hello world'], expected: 'dlrow olleh' },
    ],
    hints: [
      'Use a StringBuilder and its reverse() method.',
      'Or iterate from the end of the string to the beginning.',
    ],
  },
  {
    id: 'str-2',
    title: 'Count Vowels',
    difficulty: 'Easy',
    description:
      'Given a string, return the number of vowels (a, e, i, o, u) it contains. Count both uppercase and lowercase vowels.',
    examples: [
      { input: 's = "Hello World"', output: '3', explanation: 'The vowels are: e, o, o.' },
    ],
    constraints: ['0 <= s.length <= 10000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'countVowels',
      params: [{ name: 's', type: 'String' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countVowels(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Mixed case', inputs: ['Hello World'], expected: 3 },
      { name: 'All vowels', inputs: ['aeiou'], expected: 5 },
      { name: 'No vowels', inputs: ['bcdfg'], expected: 0 },
      { name: 'Empty string', inputs: [''], expected: 0 },
      { name: 'Uppercase vowels', inputs: ['AEIOU'], expected: 5 },
    ],
    hints: [
      'Convert the string to lowercase, then check each character against "aeiou".',
      'Use a counter and increment for each vowel found.',
    ],
  },
  {
    id: 'str-3',
    title: 'Check Palindrome String',
    difficulty: 'Easy',
    description:
      'Given a string, return true if it is a palindrome (reads the same forwards and backwards), ignoring case. Only consider alphabetic characters.',
    examples: [
      { input: 's = "Racecar"', output: 'true' },
      { input: 's = "hello"', output: 'false' },
    ],
    constraints: ['0 <= s.length <= 10000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isPalindrome',
      params: [{ name: 's', type: 'String' }],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isPalindrome(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Palindrome mixed case', inputs: ['Racecar'], expected: true },
      { name: 'Not a palindrome', inputs: ['hello'], expected: false },
      { name: 'Empty string', inputs: [''], expected: true },
      { name: 'Single character', inputs: ['a'], expected: true },
      { name: 'With spaces and punctuation', inputs: ['A man a plan a canal Panama'], expected: true },
    ],
    hints: [
      'First, filter out non-alphabetic characters and convert to lowercase.',
      'Then use two pointers from both ends moving toward the center.',
    ],
  },
  {
    id: 'str-4',
    title: 'Count Words in a String',
    difficulty: 'Easy',
    description:
      'Given a string, return the number of words in it. Words are separated by one or more spaces. Leading and trailing spaces should be ignored.',
    examples: [
      { input: 's = "Hello World"', output: '2' },
      { input: 's = "  Java is fun  "', output: '3' },
    ],
    constraints: ['0 <= s.length <= 10000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'countWords',
      params: [{ name: 's', type: 'String' }],
      returnType: 'int',
    },
    boilerplate: `public class Solution {
    public int countWords(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Two words', inputs: ['Hello World'], expected: 2 },
      { name: 'Extra spaces', inputs: ['  Java is fun  '], expected: 3 },
      { name: 'Empty string', inputs: [''], expected: 0 },
      { name: 'Only spaces', inputs: ['   '], expected: 0 },
      { name: 'Single word', inputs: ['hello'], expected: 1 },
      { name: 'Multiple spaces between', inputs: ['a  b  c'], expected: 3 },
    ],
    hints: [
      'Use trim() to remove leading/trailing spaces, then split on "\\\\s+".',
      'Handle the empty string case separately — splitting an empty string gives an array of length 1.',
    ],
  },
  {
    id: 'str-5',
    title: 'Capitalize First Letter of Each Word',
    difficulty: 'Medium',
    description:
      'Given a string of words separated by single spaces, return a new string where the first letter of each word is capitalized and the rest are lowercase.',
    examples: [
      { input: 's = "hello world"', output: '"Hello World"' },
      { input: 's = "jAVA programming"', output: '"Java Programming"' },
    ],
    constraints: ['0 <= s.length <= 10000', 'Words are separated by single spaces.'],
    methodSignature: {
      className: 'Solution',
      methodName: 'capitalizeWords',
      params: [{ name: 's', type: 'String' }],
      returnType: 'String',
    },
    boilerplate: `public class Solution {
    public String capitalizeWords(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic lowercase', inputs: ['hello world'], expected: 'Hello World' },
      { name: 'Mixed case', inputs: ['jAVA programming'], expected: 'Java Programming' },
      { name: 'Single word', inputs: ['java'], expected: 'Java' },
      { name: 'Empty string', inputs: [''], expected: '' },
      { name: 'Already capitalized', inputs: ['Hello World'], expected: 'Hello World' },
    ],
    hints: [
      'Split the string by spaces, capitalize each word, then join with spaces.',
      'To capitalize a word: uppercase the first char and lowercase the rest.',
    ],
  },
  {
    id: 'str-6',
    title: 'Remove Duplicate Characters',
    difficulty: 'Medium',
    description:
      'Given a string, return a new string with duplicate characters removed. Keep only the first occurrence of each character. Preserve the original order.',
    examples: [
      { input: 's = "programming"', output: '"progamin"', explanation: 'Remove the second r, second m, and second g.' },
    ],
    constraints: ['0 <= s.length <= 10000', 'The string contains only printable ASCII characters.'],
    methodSignature: {
      className: 'Solution',
      methodName: 'removeDuplicates',
      params: [{ name: 's', type: 'String' }],
      returnType: 'String',
    },
    boilerplate: `public class Solution {
    public String removeDuplicates(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'With duplicates', inputs: ['programming'], expected: 'progamin' },
      { name: 'No duplicates', inputs: ['abcdef'], expected: 'abcdef' },
      { name: 'All same', inputs: ['aaaa'], expected: 'a' },
      { name: 'Empty string', inputs: [''], expected: '' },
      { name: 'Mixed case', inputs: ['AaBbCc'], expected: 'AaBbCc' },
    ],
    hints: [
      'Use a LinkedHashSet or a boolean array to track seen characters.',
      'Iterate through the string and append only unseen characters to a StringBuilder.',
    ],
  },
  {
    id: 'str-7',
    title: 'First Non-Repeating Character',
    difficulty: 'Medium',
    description:
      'Given a string, find and return the first character that does not repeat anywhere in the string. If all characters repeat, return a hyphen \'-\'.',
    examples: [
      { input: 's = "swiss"', output: '"w"', explanation: 's repeats, w appears once (first non-repeating).' },
      { input: 's = "aabb"', output: '"-"', explanation: 'All characters repeat.' },
    ],
    constraints: ['0 <= s.length <= 10000', 'The string contains only lowercase English letters.'],
    methodSignature: {
      className: 'Solution',
      methodName: 'firstNonRepeating',
      params: [{ name: 's', type: 'String' }],
      returnType: 'char',
    },
    boilerplate: `public class Solution {
    public char firstNonRepeating(String s) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Basic case', inputs: ['swiss'], expected: 'w' },
      { name: 'All repeat', inputs: ['aabb'], expected: '-' },
      { name: 'First char unique', inputs: ['abcabc'], expected: '-' },
      { name: 'Single char', inputs: ['z'], expected: 'z' },
      { name: 'Last char unique', inputs: ['aabbc'], expected: 'c' },
      { name: 'Empty string', inputs: [''], expected: '-' },
    ],
    hints: [
      'Count the frequency of each character using an array of size 26 or a HashMap.',
      'Then iterate through the string again to find the first character with frequency 1.',
    ],
  },
  {
    id: 'str-8',
    title: 'Check Anagram',
    difficulty: 'Medium',
    description:
      'Given two strings, return true if they are anagrams of each other (contain exactly the same characters in any order), ignoring case. Non-alphabetic characters should be ignored.',
    examples: [
      { input: 's1 = "Listen", s2 = "Silent"', output: 'true' },
      { input: 's1 = "Hello", s2 = "World"', output: 'false' },
    ],
    constraints: ['0 <= s1.length, s2.length <= 10000'],
    methodSignature: {
      className: 'Solution',
      methodName: 'isAnagram',
      params: [
        { name: 's1', type: 'String' },
        { name: 's2', type: 'String' },
      ],
      returnType: 'boolean',
    },
    boilerplate: `public class Solution {
    public boolean isAnagram(String s1, String s2) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Classic anagram', inputs: ['Listen', 'Silent'], expected: true },
      { name: 'Not anagram', inputs: ['Hello', 'World'], expected: false },
      { name: 'Different lengths', inputs: ['abc', 'ab'], expected: false },
      { name: 'Empty strings', inputs: ['', ''], expected: true },
      { name: 'Same string', inputs: ['test', 'test'], expected: true },
      { name: 'Anagram with spaces', inputs: ['Astronomer', 'Moon starer'], expected: true },
    ],
    hints: [
      'Convert both strings to lowercase and filter only alphabetic characters.',
      'Sort both character arrays and compare, or use a frequency count array.',
    ],
  },
  {
    id: 'str-9',
    title: 'Longest Common Prefix',
    difficulty: 'Medium',
    description:
      'Given an array of strings, find the longest common prefix shared by all strings. If there is no common prefix, return an empty string.',
    examples: [
      { input: 'strs = ["flower", "flow", "flight"]', output: '"fl"' },
      { input: 'strs = ["dog", "racecar", "car"]', output: '""', explanation: 'No common prefix.' },
    ],
    constraints: [
      '1 <= strs.length <= 200',
      '0 <= strs[i].length <= 200',
      'All strings contain only lowercase English letters.',
    ],
    methodSignature: {
      className: 'Solution',
      methodName: 'longestCommonPrefix',
      params: [{ name: 'strs', type: 'String[]' }],
      returnType: 'String',
    },
    boilerplate: `public class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your code here
    }
}`,
    testCases: [
      { name: 'Common prefix fl', inputs: [['flower', 'flow', 'flight']], expected: 'fl' },
      { name: 'No common prefix', inputs: [['dog', 'racecar', 'car']], expected: '' },
      { name: 'Single string', inputs: [['alone']], expected: 'alone' },
      { name: 'All identical', inputs: [['test', 'test', 'test']], expected: 'test' },
      { name: 'Empty string in array', inputs: [['', 'abc', 'abd']], expected: '' },
    ],
    hints: [
      'Start with the first string as the prefix, then shorten it by comparing with each subsequent string.',
      'Alternatively, compare characters column by column across all strings.',
    ],
  },
];
