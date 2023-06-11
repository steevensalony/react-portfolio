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
          <Route exact path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resumes' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}