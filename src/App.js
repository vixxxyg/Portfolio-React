import "./styles/main.css";

import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";

function App() {
  return (
        <div className="App">
            <Navbar />
            {/* <Home /> */}
            <Projects />
            {/* <Contacts /> */}
            <Footer /> 
        </div>
          );
}

export default App;
