import React from 'react';
import About from "./about/About";
import Contact from "./contact/Contact";
import Navbar from "./navigation/Navbar";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-primary w-100">
        <p className="copyright">&#169; Alexander Cooper</p>
      </footer>
    </div>
  );
}

export default App;
