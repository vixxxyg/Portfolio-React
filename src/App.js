import "./styles/main.css";

import Navbar from "./components/navbar/Navbar.js";
import Home from "./pages/Home.js";
import Footer from "./components/footer/Footer.js";
import Projects from "./pages/Projects.js";

function App() {
  return (
        <div className="App">
            <Navbar />
            <Home />
            <Footer /> 
        </div>
          );
}

export default App;
