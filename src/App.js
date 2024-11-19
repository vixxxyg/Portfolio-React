import "./styles/main.css";

import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Home from "./pages/Home.js";

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
