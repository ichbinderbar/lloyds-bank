import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import HelpModal from "./components/HelpModal/HelpModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<HelpModal />} />
      </Routes>
    </Router>
  );
}

export default App;
