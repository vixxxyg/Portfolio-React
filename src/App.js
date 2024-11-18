import "./styles/main.css";


function App() {
  return (
          <div className="App">
             <nav className="nav">
              <div className="container">
                  <div className="nav-row">
                    <a href="./index.html" className="logo"><strong>Freelancer</strong> Portfolio</a>
                      
                    <button className="dark-mode-btn">
                        <img src="./images/icons/sun.svg" alt="Light mode" className="dark-mode-btn__icon" />
                        <img src="./images/icons/moon.svg" alt="Dark mode" className="dark-mode-btn__icon" />
                    </button>
                      
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <a href="./index.html" className="nav-list__link nav-list__link--active">Projects</a>
                        </li>
                        <li className="nav-list__item">
                            <a href="./skills.html" className="nav-list__link">Skills</a>
                        </li>
                        <li className="nav-list__item">
                            <a href="./contacts.html" className="nav-list__link">Contacts</a>
                        </li>
                    </ul>
                  </div>
              </div>
             </nav>

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
                              <li className="social__item"><a href="#!"><img src="./images/icons/vk.svg" alt="Link" /></a></li>
                              <li className="social__item"><a href="#!"><img src="./images/icons/instagram.svg" alt="Link" /></a></li>
                              <li className="social__item"><a href="#!"><img src="./images/icons/twitter.svg" alt="Link" /></a></li>
                              <li className="social__item"><a href="#!"><img src="./images/icons/gitHub.svg" alt="Link" /></a></li>
                              <li className="social__item"><a href="#!"><img src="./images/icons/linkedIn.svg" alt="Link" /></a></li>
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
