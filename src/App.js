import "./styles/main.css";

import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Project from "./pages/Project.js";


function App() {
  return (
        <div className="App">
            <Navbar />
            {/* <Home /> */}
            {/* <Projects /> */}
            <Project />
            {/* <Contacts /> */}
            <Footer /> 
        </div>
  );
}

export default App;
