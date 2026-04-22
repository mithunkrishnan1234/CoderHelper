import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProblem, getSectionIdForProblem } from '../data/loader';
import { getSavedCode, saveCode, markSolved, isSolved } from '../services/progress';
import { runTests } from '../services/testRunner';
import { submitCode } from '../services/judge0';
import type { SubmissionResult } from '../types';
import CodeEditor from '../components/CodeEditor';
import TestResults from '../components/TestResults';
import './ProblemPage.css';

export default function ProblemPage() {
  const { problemId } = useParams<{ problemId: string }>();
  const problem = getProblem(problemId || '');
  const sectionId = getSectionIdForProblem(problemId || '');

  const [code, setCode] = useState('');
  const [result, setResult] = useState<SubmissionResult | null>(null);
  const [runOutput, setRunOutput] = useState<{ stdout: string; stderr: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingRun, setLoadingRun] = useState(false);
  const [solved, setSolved] = useState(false);
  const [hintsRevealed, setHintsRevealed] = useState(0);

  useEffect(() => {
    if (problem) {
      const saved = getSavedCode(problem.id);
      setCode(saved || problem.boilerplate);
      setSolved(isSolved(problem.id));
      setResult(null);
      setRunOutput(null);
      setHintsRevealed(0);
    }
  }, [problem]);

  const handleCodeChange = useCallback((value: string) => {
    setCode(value);
    if (problem) {
      saveCode(problem.id, value);
    }
  }, [problem]);

  const handleReset = () => {
    if (problem) {
      setCode(problem.boilerplate);
      saveCode(problem.id, problem.boilerplate);
      setResult(null);
      setRunOutput(null);
    }
  };

  const handleRun = async () => {
    if (!problem) return;
    setLoadingRun(true);
    setRunOutput(null);
    setResult(null);

    try {
      let source = code;
      if (!/public\s+static\s+void\s+main\s*\(/.test(source)) {
        source += '\nclass Main { public static void main(String[] args) { System.out.println("Compiled successfully. Add a main method or use Submit to run tests."); } }';
      }
      const res = await submitCode(source);
      setRunOutput({
        stdout: res.stdout || '',
        stderr: res.compile_output || res.stderr || '',
      });
    } catch (error) {
      setRunOutput({
        stdout: '',
        stderr: error instanceof Error ? error.message : 'Compilation service unavailable.',
      });
    }

    setLoadingRun(false);
  };

  const handleRunTests = async () => {
    if (!problem) return;
    setLoading(true);
    setResult(null);
    setRunOutput(null);

    const res = await runTests(
      code,
      problem.testCases,
      problem.methodSignature.methodName,
      problem.methodSignature.returnType,
      problem.methodSignature.params.map(p => p.type)
    );

    setResult(res);

    if (res.status === 'success' && res.testResults?.every((t) => t.passed)) {
      markSolved(problem.id);
      setSolved(true);
    }

    setLoading(false);
  };

  if (!problem) {
    return (
      <div className="problem-page">
        <p>Problem not found.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="problem-page">
      <div className="problem-nav">
        <Link to="/" className="back-link">← Home</Link>
{sectionId && <Link to={`/section/${sectionId}`} className="back-link">← Section</Link>}
        {solved && <span className="solved-badge">✓ Solved</span>}
      </div>

      <div className="problem-layout">
        <div className="description-panel">
          <div className="problem-header">
            <h1>{problem.title}</h1>
            <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
              {problem.difficulty}
            </span>
          </div>

          <div className="problem-description">
            <p>{problem.description}</p>
          </div>

          {problem.examples.length > 0 && (
            <div className="examples">
              <h3>Examples</h3>
              {problem.examples.map((ex, i) => (
                <div key={i} className="example">
                  <div><strong>Input:</strong> <code>{ex.input}</code></div>
                  <div><strong>Output:</strong> <code>{ex.output}</code></div>
                  {ex.explanation && <div><strong>Explanation:</strong> {ex.explanation}</div>}
                </div>
              ))}
            </div>
          )}

          {problem.constraints.length > 0 && (
            <div className="constraints">
              <h3>Constraints</h3>
              <ul>
                {problem.constraints.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}

          {problem.hints.length > 0 && (
            <div className="hints">
              <h3>Hints</h3>
              {problem.hints.slice(0, hintsRevealed).map((hint, i) => (
                <div key={i} className="hint">💡 {hint}</div>
              ))}
              {hintsRevealed < problem.hints.length && (
                <button
                  className="hint-btn"
                  onClick={() => setHintsRevealed((h) => h + 1)}
                >
                  Reveal hint ({hintsRevealed + 1}/{problem.hints.length})
                </button>
              )}
            </div>
          )}
        </div>

        <div className="editor-panel">
          <div className="editor-toolbar">
            <button className="reset-btn" onClick={handleReset}>↺ Reset</button>
            <div className="toolbar-actions">
              <button
                className="run-btn run-code-btn"
                onClick={handleRun}
                disabled={loadingRun || loading}
              >
                {loadingRun ? '⏳ Running...' : '▶ Run'}
              </button>
              <button
                className="run-btn submit-btn"
                onClick={handleRunTests}
                disabled={loading || loadingRun}
              >
                {loading ? '⏳ Testing...' : '✓ Submit'}
              </button>
            </div>
          </div>

          <CodeEditor code={code} onChange={handleCodeChange} />

          <div className="results-panel">
            {runOutput && (
              <div className="output-panel">
                <h4>Output</h4>
                {runOutput.stderr && (
                  <div className="error-panel">
                    <pre>{runOutput.stderr}</pre>
                  </div>
                )}
                {runOutput.stdout && (
                  <pre className="stdout">{runOutput.stdout}</pre>
                )}
                {!runOutput.stdout && !runOutput.stderr && (
                  <p className="no-output">No output</p>
                )}
              </div>
            )}
            {result && result.status === 'success' && result.testResults && (
              <TestResults results={result.testResults} />
            )}
            {result && result.status === 'compile_error' && (
              <div className="error-panel">
                <h4>Compilation Error</h4>
                <pre>{result.compileOutput}</pre>
              </div>
            )}
            {result && result.status === 'runtime_error' && (
              <div className="error-panel">
                <h4>Runtime Error</h4>
                <pre>{result.errorMessage}</pre>
              </div>
            )}
            {result && result.status === 'timeout' && (
              <div className="error-panel">
                <h4>Time Limit Exceeded</h4>
                <p>{result.errorMessage}</p>
              </div>
            )}
            {result && result.status === 'api_error' && (
              <div className="error-panel warning">
                <h4>Service Error</h4>
                <p>{result.errorMessage}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
