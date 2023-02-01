import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Pages />} />
      </Routes>
    </Router>
  );
}

export default App;
