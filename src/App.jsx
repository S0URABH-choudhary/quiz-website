import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.jsx";
import Questionspage from "./components/Questionspage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Questionspage />} />
      </Routes>
    </Router>
  );
}

export default App;
