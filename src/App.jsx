import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUpPage from "./components/Pages/SignUpPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
