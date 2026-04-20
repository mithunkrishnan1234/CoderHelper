import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SectionPage from './pages/SectionPage';
import ProblemPage from './pages/ProblemPage';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section/:sectionId" element={<SectionPage />} />
        <Route path="/problem/:problemId" element={<ProblemPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
