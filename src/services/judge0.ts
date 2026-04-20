export interface CompileResult {
  status: { id: number; description: string };
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  time: string | null;
  memory: number | null;
}

const WANDBOX_URL = 'https://wandbox.org/api/compile.json';

export async function submitCode(sourceCode: string): Promise<CompileResult> {
  // Wandbox uses filename "prog.java" so public classes other than "prog" fail.
  // Strip "public" from class declarations to avoid filename mismatch.
  const fixedSource = sourceCode.replace(/public\s+(class\s+)/g, '$1');

  let response: Response;
  try {
    response = await fetch(WANDBOX_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        compiler: 'openjdk-jdk-22+36',
        code: fixedSource,
        save: false,
      }),
    });
  } catch {
    throw new Error('Compilation service unavailable. Please try again.');
  }

  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Please wait a moment and try again.');
  }
  if (!response.ok) {
    throw new Error('Compilation service unavailable. Please try again.');
  }

  const data = await response.json();

  // Wandbox returns:
  //   status: "0" = success, "1" = compile error, "2" = compile error
  //   compiler_error: compilation errors
  //   program_output: stdout
  //   program_error: stderr (runtime)
  //   signal: e.g. "SIGKILL" for TLE

  const status = data.status;
  const compilerError = data.compiler_error || '';
  const stdout = data.program_output || '';
  const stderr = data.program_error || '';
  const signal = data.signal || '';

  // Compilation error
  if (status !== '0' && compilerError) {
    return {
      status: { id: 6, description: 'Compilation Error' },
      stdout: null,
      stderr: null,
      compile_output: compilerError,
      time: null,
      memory: null,
    };
  }

  // TLE / killed
  if (signal === 'SIGKILL' || signal === 'SIGXCPU') {
    return {
      status: { id: 5, description: 'Time Limit Exceeded' },
      stdout: stdout || null,
      stderr: stderr || null,
      compile_output: null,
      time: null,
      memory: null,
    };
  }

  // Runtime error (non-zero exit, no compile error)
  if (status !== '0' && !compilerError) {
    return {
      status: { id: 11, description: 'Runtime Error' },
      stdout: stdout || null,
      stderr: stderr || null,
      compile_output: null,
      time: null,
      memory: null,
    };
  }

  // Success
  return {
    status: { id: 3, description: 'Accepted' },
    stdout: stdout || null,
    stderr: stderr || null,
    compile_output: null,
    time: null,
    memory: null,
  };
}

export function isCompileError(result: CompileResult): boolean {
  return result.status.id === 6;
}

export function isTimeout(result: CompileResult): boolean {
  return result.status.id === 5;
}

export function isRuntimeError(result: CompileResult): boolean {
  return result.status.id >= 7 && result.status.id <= 12;
}

export function isSuccess(result: CompileResult): boolean {
  return result.status.id === 3;
}
