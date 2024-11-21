import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Project from "./pages/Project.js";
import Contacts from "./pages/Contacts.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";


function App() {
  return (
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Footer /> 
          </Router>
        </div>
  );
}

export default App;
