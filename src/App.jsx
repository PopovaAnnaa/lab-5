import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import LearningPage from "./pages/Learning/LearningPage";
import FeedbackPage from "./pages/Feedback/FeedbackPage";
import './App.css'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}