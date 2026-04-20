import axios from 'axios';

const PISTON_API = 'https://emkc.org/api/v2/piston';

interface PistonResult {
  status: { id: number; description: string };
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  time: string | null;
  memory: number | null;
}

export async function submitCode(sourceCode: string): Promise<PistonResult> {
  try {
    const response = await axios.post(
      `${PISTON_API}/execute`,
      {
        language: 'java',
        version: '*',
        files: [{ name: 'Main.java', content: sourceCode }],
        run_timeout: 10000,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        timeout: 30000,
      }
    );

    const data = response.data;
    const compileOutput = data.compile?.stderr || data.compile?.output || null;
    const compileCode = data.compile?.code;
    const runStdout = data.run?.stdout || null;
    const runStderr = data.run?.stderr || null;
    const runCode = data.run?.code;
    const runSignal = data.run?.signal;

    // Map Piston response to a normalized result
    if (compileCode !== undefined && compileCode !== 0) {
      return {
        status: { id: 6, description: 'Compilation Error' },
        stdout: null,
        stderr: null,
        compile_output: compileOutput,
        time: null,
        memory: null,
      };
    }

    if (runSignal === 'SIGKILL' || runSignal === 'SIGXCPU') {
      return {
        status: { id: 5, description: 'Time Limit Exceeded' },
        stdout: runStdout,
        stderr: runStderr,
        compile_output: null,
        time: null,
        memory: null,
      };
    }

    if (runCode !== 0 && runCode !== undefined) {
      return {
        status: { id: 11, description: 'Runtime Error' },
        stdout: runStdout,
        stderr: runStderr,
        compile_output: null,
        time: null,
        memory: null,
      };
    }

    return {
      status: { id: 3, description: 'Accepted' },
      stdout: runStdout,
      stderr: runStderr,
      compile_output: null,
      time: null,
      memory: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        throw new Error('Rate limit exceeded. Please wait a moment and try again.');
      }
      if (!error.response) {
        throw new Error('Compilation service unavailable. Please try again.');
      }
    }
    throw new Error('Compilation service unavailable. Please try again.');
  }
}

// Normalized status IDs (matching Judge0 convention)
export function isCompileError(result: PistonResult): boolean {
  return result.status.id === 6;
}

export function isTimeout(result: PistonResult): boolean {
  return result.status.id === 5;
}

export function isRuntimeError(result: PistonResult): boolean {
  return result.status.id >= 7 && result.status.id <= 12;
}

export function isSuccess(result: PistonResult): boolean {
  return result.status.id === 3;
}
