export interface MethodSignature {
  className: string;
  methodName: string;
  params: { name: string; type: string }[];
  returnType: string;
}

export interface TestCase {
  name: string;
  inputs: unknown[];
  expected: unknown;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  methodSignature: MethodSignature;
  boilerplate: string;
  testCases: TestCase[];
  hints: string[];
}

export interface Section {
  id: string;
  name: string;
  order: number;
  description: string;
}

export interface SectionWithProblems extends Section {
  problems: Problem[];
}

export interface TestResult {
  name: string;
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
  error?: string;
}

export interface SubmissionResult {
  status: 'success' | 'compile_error' | 'runtime_error' | 'timeout' | 'api_error';
  testResults?: TestResult[];
  errorMessage?: string;
  compileOutput?: string;
}
