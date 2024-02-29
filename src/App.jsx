import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/auth/LogIn";
import SignUpPage from "./components/Pages/SignUpPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
