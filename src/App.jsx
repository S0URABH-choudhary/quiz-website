import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_page from "./components/home_page";
import Questions_page from "./components/questions_page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/quiz" element={<Questions_page />} />
      </Routes>
    </Router>
  );
}

export default App;
