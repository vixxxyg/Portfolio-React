import "./styles/main.css";

import Navbar from "./components/navbar/Navbar.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import Main from "./components/main/Main.js";

function App() {
  return (
        <div className="App">
            <Navbar />
            <Header />
            <Main />
            <Footer /> 
        </div>
          );
}

export default App;
