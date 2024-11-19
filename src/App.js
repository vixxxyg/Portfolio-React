import "./styles/main.css";

import vk from "./images/icons/vk.svg";
import instagram from "./images/icons/instagram.svg";
import twitter from "./images/icons/twitter.svg";
import gitHub from "./images/icons/gitHub.svg";
import linkedIn from "./images/icons/linkedIn.svg";

import Navbar from "./components/navbar/Navbar.js";

function App() {
  return (
          <div className="App">

            <Navbar />
            
              <header className="header">
                  <div className="header__wrapper">
                      <h1 className="header__title">
                          <strong>Hi, my name is <span>Victoria</span></strong><br/>
                              a frontend developer
                      </h1>
                      <div className="header__text">
                          <p>with passion for learning and creating.</p>
                      </div>
                      <a href="#!" className="btn">Download CV</a>
                  </div>
              </header>

              <main className="section">
                  <div className="container">
                      <h2 className="title-1">Projects</h2>
                      <ul className="projects">
                          <li className="project">
                              <a href="./project-page.html">
                                  <img src="./images/projects/01.jpg" alt="Project img" className="project__img" /> 
                                  <h3 className="project__title">Gaming streaming portal</h3>
                              </a> 
                          </li>
                          <li className="project">
                              <a href="./project-page.html">
                                  <img src="./images/projects/02.jpg" alt="Project img" className="project__img" /> 
                                  <h3 className="project__title">Video service</h3>
                              </a> 
                          </li>
                          <li className="project">
                              <img src="./images/projects/03.jpg" alt="Project img" className="project__img" /> 
                              <h3 className="project__title">Video portal</h3>
                          </li>
                          <li className="project">
                              <img src="./images/projects/04.jpg" alt="Project img" className="project__img" /> 
                              <h3 className="project__title">Dating app</h3>
                          </li>
                          <li className="project">
                              <img src="./images/projects/05.jpg" alt="Project img" className="project__img" /> 
                              <h3 className="project__title">Landing</h3>
                          </li>
                          <li className="project">
                              <img src="./images/projects/06.jpg" alt="Project img" className="project__img" /> 
                              <h3 className="project__title">Gaming community</h3>
                          </li>
                      </ul>
                  </div>
              </main>

              <footer className="footer">
                  <div className="container">
                      <div className="footer__wrapper">
                          <ul className="social">
                              <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                              <li className="social__item"><a href="#!"><img src={instagram} /></a></li>
                              <li className="social__item"><a href="#!"><img src={twitter} /></a></li>
                              <li className="social__item"><a href="#!"><img src={gitHub} /></a></li>
                              <li className="social__item"><a href="#!"><img src={linkedIn} /></a></li>
                          </ul>
                          <div className="copyright">
                              <p>© 2024 frontend-dev.com</p>
                          </div>
                      </div>
                  </div>
              </footer>
              </div>
          );
}

export default App;
