import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, MLP, TimeSeries } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mlp" element={<MLP />} />
          <Route path="/timeseries" element={<TimeSeries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
