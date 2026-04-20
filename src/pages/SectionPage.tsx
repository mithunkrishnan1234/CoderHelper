import { useParams, Link } from 'react-router-dom';
import { getSectionWithProblems } from '../data/loader';
import { isSolved } from '../services/progress';
import './SectionPage.css';

export default function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = getSectionWithProblems(sectionId || '');

  if (!section) {
    return (
      <div className="section-page">
        <p>Section not found.</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="section-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <h1>{section.name}</h1>
      <p className="section-desc">{section.description}</p>

      <div className="problem-list">
        {section.problems.map((problem, index) => {
          const solved = isSolved(problem.id);
          return (
            <Link
              to={`/problem/${problem.id}`}
              key={problem.id}
              className={`problem-card ${solved ? 'solved' : ''}`}
            >
              <div className="problem-left">
                <span className="problem-number">{index + 1}</span>
                <span className="problem-title">{problem.title}</span>
                {solved && <span className="solved-check">✓</span>}
              </div>
              <span className={`difficulty-badge ${problem.difficulty.toLowerCase()}`}>
                {problem.difficulty}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
