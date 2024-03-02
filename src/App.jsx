import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignUpPage from "./components/Pages/SignUpPage";
import Home from "./components/Pages/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
        <Home />
      </Router>
    </>
  );
}

export default App;
