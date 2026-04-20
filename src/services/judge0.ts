interface PistonResult {
  status: { id: number; description: string };
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  time: string | null;
  memory: number | null;
}

const PISTON_URL = 'https://emkc.org/api/v2/piston/execute';
const PROXY_URL = 'https://corsproxy.io/?' + encodeURIComponent(PISTON_URL);

async function callPiston(url: string, body: object): Promise<Response> {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function submitCode(sourceCode: string): Promise<PistonResult> {
  const payload = {
    language: 'java',
    version: '*',
    files: [{ name: 'Main.java', content: sourceCode }],
    run_timeout: 10000,
  };

  let response: Response;
  try {
    // Try direct first, fall back to CORS proxy
    response = await callPiston(PISTON_URL, payload);
  } catch {
    try {
      response = await callPiston(PROXY_URL, payload);
    } catch {
      throw new Error('Compilation service unavailable. Please try again.');
    }
  }

  if (response.status === 429) {
    throw new Error('Rate limit exceeded. Please wait a moment and try again.');
  }
  if (!response.ok) {
    throw new Error('Compilation service unavailable. Please try again.');
  }

  const data = await response.json();
  const compileOutput = data.compile?.stderr || data.compile?.output || null;
  const compileCode = data.compile?.code;
  const runStdout = data.run?.stdout || null;
  const runStderr = data.run?.stderr || null;
  const runCode = data.run?.code;
  const runSignal = data.run?.signal;

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
