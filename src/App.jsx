import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import HelpModal from "./components/HelpModal/HelpModal";
import CostumerServicePage from "./pages/CostumerServicePage/CostumerServicePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<HelpModal />} />
        <Route path="/servicepage" element={<CostumerServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
