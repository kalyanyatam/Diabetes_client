import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MedicalReportPage from './components/pages/MedicalReportPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/medical-report" element={<MedicalReportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
