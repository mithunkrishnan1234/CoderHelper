import type { TestResult } from '../types';
import './TestResults.css';

interface TestResultsProps {
  results: TestResult[];
}

export default function TestResults({ results }: TestResultsProps) {
  const passedCount = results.filter((r) => r.passed).length;

  return (
    <div className="test-results">
      <div className="test-summary">
        <span className={passedCount === results.length ? 'all-passed' : 'some-failed'}>
          {passedCount}/{results.length} tests passed
        </span>
      </div>
      <div className="test-cases">
        {results.map((result, index) => (
          <div key={index} className={`test-case ${result.passed ? 'passed' : 'failed'}`}>
            <div className="test-header">
              <span className="test-icon">{result.passed ? '✓' : '✗'}</span>
              <span className="test-name">{result.name}</span>
            </div>
            {!result.passed && (
              <div className="test-details">
                <div className="test-row">
                  <span className="label">Input:</span>
                  <code>{result.input}</code>
                </div>
                <div className="test-row">
                  <span className="label">Expected:</span>
                  <code className="expected">{result.expected}</code>
                </div>
                <div className="test-row">
                  <span className="label">Actual:</span>
                  <code className="actual">{result.actual}</code>
                </div>
                {result.error && (
                  <div className="test-row">
                    <span className="label">Error:</span>
                    <code className="error">{result.error}</code>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
