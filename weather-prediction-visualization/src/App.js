import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, MLP, TimeSeries } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mlp" element={<MLP />} />
        <Route path="/timeseries" element={<TimeSeries />} />
      </Routes>
    </Router>
  );
}

export default App;
