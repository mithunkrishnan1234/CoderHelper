import type { TestCase, TestResult, SubmissionResult } from '../types';
import { submitCode, isCompileError, isTimeout, isRuntimeError } from './judge0';

function serializeValue(value: unknown, javaType?: string): string {
  if (Array.isArray(value)) {
    if (value.length > 0 && Array.isArray(value[0])) {
      // 2D array
      return `new int[][]{${value.map((row: unknown[]) => `{${row.join(',')}}`).join(',')}}`;
    }
    if (value.length > 0 && typeof value[0] === 'string') {
      return `new String[]{${value.map((v: unknown) => `"${v}"`).join(',')}}`;
    }
    return `new int[]{${value.join(',')}}`;
  }
  if (typeof value === 'string') {
    if (javaType === 'char' && value.length === 1) return `'${value}'`;
    return `"${value}"`;
  }
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  return String(value);
}

function serializeExpected(value: unknown): string {
  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }
  return String(value);
}

function generateTestRunner(testCases: TestCase[], methodName: string, returnType: string, paramTypes: string[]): string {
  const testCode = testCases.map((tc, i) => {
    const args = tc.inputs.map((v, j) => serializeValue(v, paramTypes[j])).join(', ');
    const expected = serializeExpected(tc.expected);
    
    let comparison: string;
    let resultToString: string;
    
    if (returnType.includes('[]')) {
      comparison = `java.util.Arrays.equals(result${i}, expected${i})`;
      resultToString = `java.util.Arrays.toString(result${i})`;
      
      let expectedDecl: string;
      if (returnType === 'int[]') {
        expectedDecl = `int[] expected${i} = ${serializeValue(tc.expected)};`;
      } else if (returnType === 'String[]') {
        expectedDecl = `String[] expected${i} = ${serializeValue(tc.expected)};`;
      } else {
        expectedDecl = `int[][] expected${i} = ${serializeValue(tc.expected)};`;
        comparison = `java.util.Arrays.deepEquals(result${i}, expected${i})`;
        resultToString = `java.util.Arrays.deepToString(result${i})`;
      }
      
      return `
        // Test ${i}: ${tc.name}
        try {
            ${returnType} result${i} = sol.${methodName}(${args});
            ${expectedDecl}
            boolean pass${i} = ${comparison};
            System.out.println("TESTRESULT:" + ${JSON.stringify(tc.name)} + ":" + pass${i} + ":" + ${JSON.stringify(JSON.stringify(tc.inputs))} + ":" + ${JSON.stringify(expected)} + ":" + ${resultToString});
        } catch (Exception e) {
            System.out.println("TESTRESULT:" + ${JSON.stringify(tc.name)} + ":ERROR:" + ${JSON.stringify(JSON.stringify(tc.inputs))} + ":" + ${JSON.stringify(expected)} + ":" + e.getClass().getSimpleName() + ": " + e.getMessage());
        }`;
    } else {
      const resultStr = returnType === 'String' ? `result${i}` 
        : returnType === 'char' ? `String.valueOf(result${i})`
        : `String.valueOf(result${i})`;
      
      if (returnType === 'String') {
        comparison = `result${i} != null && result${i}.equals(${serializeValue(tc.expected)})`;
      } else if (returnType === 'char') {
        comparison = `result${i} == ${serializeValue(tc.expected, 'char')}`;
      } else if (returnType === 'double') {
        comparison = `Math.abs(result${i} - ${tc.expected}) < 0.01`;
      } else {
        comparison = `result${i} == ${serializeValue(tc.expected)}`;
      }
      
      return `
        // Test ${i}: ${tc.name}
        try {
            ${returnType} result${i} = sol.${methodName}(${args});
            boolean pass${i} = ${comparison};
            System.out.println("TESTRESULT:" + ${JSON.stringify(tc.name)} + ":" + pass${i} + ":" + ${JSON.stringify(JSON.stringify(tc.inputs))} + ":" + ${JSON.stringify(expected)} + ":" + ${resultStr});
        } catch (Exception e) {
            System.out.println("TESTRESULT:" + ${JSON.stringify(tc.name)} + ":ERROR:" + ${JSON.stringify(JSON.stringify(tc.inputs))} + ":" + ${JSON.stringify(expected)} + ":" + e.getClass().getSimpleName() + ": " + e.getMessage());
        }`;
    }
  }).join('\n');

  return `
class TestRunner {
    public static void main(String[] args) {
        Solution sol = new Solution();
        ${testCode}
    }
}`;
}

function parseTestResults(stdout: string): TestResult[] {
  const lines = stdout.split('\n').filter((l) => l.startsWith('TESTRESULT:'));
  return lines.map((line) => {
    const parts = line.substring('TESTRESULT:'.length).split(':');
    const name = parts[0];
    const passedOrError = parts[1];
    const input = parts[2];
    const expected = parts[3];
    const actual = parts.slice(4).join(':');

    if (passedOrError === 'ERROR') {
      return { name, passed: false, input, expected, actual, error: actual };
    }
    return { name, passed: passedOrError === 'true', input, expected, actual };
  });
}

export async function runTests(
  userCode: string,
  testCases: TestCase[],
  methodName: string,
  returnType: string,
  paramTypes: string[] = []
): Promise<SubmissionResult> {
  const testRunner = generateTestRunner(testCases, methodName, returnType, paramTypes);
  const fullSource = userCode + '\n' + testRunner;

  try {
    const result = await submitCode(fullSource);

    if (isCompileError(result)) {
      return {
        status: 'compile_error',
        errorMessage: 'Compilation Error',
        compileOutput: result.compile_output || 'Unknown compilation error',
      };
    }

    if (isTimeout(result)) {
      return {
        status: 'timeout',
        errorMessage: 'Time Limit Exceeded — your code took too long to execute.',
      };
    }

    if (isRuntimeError(result)) {
      return {
        status: 'runtime_error',
        errorMessage: result.stderr || 'Runtime error occurred',
      };
    }

    const testResults = parseTestResults(result.stdout || '');
    return {
      status: 'success',
      testResults,
    };
  } catch (error) {
    return {
      status: 'api_error',
      errorMessage: error instanceof Error ? error.message : 'Compilation service unavailable. Please try again.',
    };
  }
}
