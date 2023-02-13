import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pages from "./pages/Pages";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contacts/Contact";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contacts' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
