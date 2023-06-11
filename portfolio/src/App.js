import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='react-portfolio/' element={<About />} />
          <Route path='react-portfolio/about' element={<About />} />
          <Route path='react-portfolio/projects' element={<Projects />} />
          <Route path='react-portfolio/skills' element={<Skills />} />
          <Route path='react-portfolio/resumes' element={<Resume />} />
          <Route path='react-portfolio/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}