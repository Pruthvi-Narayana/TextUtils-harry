import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
