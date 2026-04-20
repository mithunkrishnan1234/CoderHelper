import { Link } from 'react-router-dom';
import { getSectionsWithProblems, getAllProblems } from '../data/loader';
import { getSolvedCount } from '../services/progress';
import './Home.css';

export default function Home() {
  const sectionsWithProblems = getSectionsWithProblems();
  const allProblems = getAllProblems();
  const totalSolved = getSolvedCount(allProblems.map((p) => p.id));
  const totalProblems = allProblems.length;
  const percentage = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;

  const easyProblems = allProblems.filter((p) => p.difficulty === 'Easy');
  const mediumProblems = allProblems.filter((p) => p.difficulty === 'Medium');
  const hardProblems = allProblems.filter((p) => p.difficulty === 'Hard');

  const easySolved = getSolvedCount(easyProblems.map((p) => p.id));
  const mediumSolved = getSolvedCount(mediumProblems.map((p) => p.id));
  const hardSolved = getSolvedCount(hardProblems.map((p) => p.id));

  return (
    <div className="home">
      <header className="home-header">
        <h1>☕ Java Practice Hub</h1>
        <p className="subtitle">Master Java from basics to advanced DSA</p>
      </header>

      <div className="stats-dashboard">
        <div className="stat-card main-stat">
          <div className="stat-number">{totalSolved}/{totalProblems}</div>
          <div className="stat-label">Problems Solved</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${percentage}%` }} />
          </div>
          <div className="stat-percentage">{percentage}%</div>
        </div>
        <div className="stat-cards-row">
          <div className="stat-card easy">
            <div className="stat-number">{easySolved}/{easyProblems.length}</div>
            <div className="stat-label">Easy</div>
          </div>
          <div className="stat-card medium">
            <div className="stat-number">{mediumSolved}/{mediumProblems.length}</div>
            <div className="stat-label">Medium</div>
          </div>
          <div className="stat-card hard">
            <div className="stat-number">{hardSolved}/{hardProblems.length}</div>
            <div className="stat-label">Hard</div>
          </div>
        </div>
      </div>

      <div className="sections-list">
        <h2>Sections</h2>
        {sectionsWithProblems.map((section) => {
          const solved = getSolvedCount(section.problems.map((p) => p.id));
          return (
            <Link to={`/section/${section.id}`} key={section.id} className="section-card">
              <div className="section-info">
                <span className="section-order">{section.order}</span>
                <div>
                  <h3>{section.name}</h3>
                  <p>{section.description}</p>
                </div>
              </div>
              <div className="section-progress">
                <span>{solved}/{section.problems.length}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
