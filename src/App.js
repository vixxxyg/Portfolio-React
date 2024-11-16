import "./styles/main.css";


function App() {
  return (
          <div className="App">
             <nav ClassName="nav">
              <div ClassName="container">
                  <div ClassName="nav-row">
                    <a href="./index.html" ClassName="logo"><strong>Freelancer</strong> Portfolio</a>
                      
                    <button ClassName="dark-mode-btn">
                        <img src="./images/icons/sun.svg" alt="Light mode" ClassName="dark-mode-btn__icon">
                        <img src="./images/icons/moon.svg" alt="Dark mode" ClassName="dark-mode-btn__icon">
                    </button>
                      
                    <ul ClassName="nav-list">
                        <li ClassName="nav-list__item">
                            <a href="./index.html" ClassName="nav-list__link nav-list__link--active">Projects</a>
                        </li>
                        <li ClassName="nav-list__item">
                            <a href="./skills.html" ClassName="nav-list__link">Skills</a>
                        </li>
                        <li ClassName="nav-list__item">
                            <a href="./contacts.html" ClassName="nav-list__link">Contacts</a>
                        </li>
                    </ul>
                  </div>
              </div>
             </nav>

              <header ClassName="header">
                  <div ClassName="header__wrapper">
                      <h1 ClassName="header__title">
                          <strong>Hi, my name is <span>Victoria</span></strong><br/>
                              a frontend developer
                      </h1>
                      <div ClassName="header__text">
                          <p>with passion for learning and creating.</p>
                      </div>
                      <a href="#!" ClassName="btn">Download CV</a>
                  </div>
              </header>

              <main ClassName="section">
                  <div ClassName="container">
                      <h2 ClassName="title-1">Projects</h2>
                      <ul ClassName="projects">
                          <li ClassName="project">
                              <a href="./project-page.html">
                                  <img src="./images/projects/01.jpg" alt="Project image" ClassName="project__img" /> 
                                  <h3 ClassName="project__title">Gaming streaming portal</h3>
                              </a> 
                          </li>
                          <li ClassName="project">
                              <a href="./project-page.html">
                                  <img src="./images/projects/02.jpg" alt="Project image" ClassName="project__img" /> 
                                  <h3 ClassName="project__title">Video service</h3>
                              </a> 
                          </li>
                          <li ClassName="project">
                              <img src="./images/projects/03.jpg" alt="Project image" ClassName="project__img" /> 
                              <h3 ClassName="project__title">Video portal</h3>
                          </li>
                          <li ClassName="project">
                              <img src="./images/projects/04.jpg" alt="Project image" ClassName="project__img" /> 
                              <h3 ClassName="project__title">Dating app</h3>
                          </li>
                          <li ClassName="project">
                              <img src="./images/projects/05.jpg" alt="Project image" ClassName="project__img /> 
                              <h3 ClassName="project__title">Landing</h3>
                          </li>
                          <li ClassName="project">
                              <img src="./images/projects/06.jpg" alt="Project image" ClassName="project__img" /> 
                              <h3 ClassName="project__title">Gaming community</h3>
                          </li>
                      </ul>
                  </div>
              </main>

              <footer ClassName="footer">
                  <div ClassName="container">
                      <div ClassName="footer__wrapper">
                          <ul ClassName="social">
                              <li ClassName="social__item"><a href="#!"><img src="./images/icons/vk.svg" alt="Link" /></a></li>
                              <li ClassName="social__item"><a href="#!"><img src="./images/icons/instagram.svg" alt="Link" /></a></li>
                              <li ClassName="social__item"><a href="#!"><img src="./images/icons/twitter.svg" alt="Link" /></a></li>
                              <li ClassName="social__item"><a href="#!"><img src="./images/icons/gitHub.svg" alt="Link" /></a></li>
                              <li ClassName="social__item"><a href="#!"><img src="./images/icons/linkedIn.svg" alt="Link" /></a></li>
                          </ul>
                          <div ClassName="copyright">
                              <p>© 2024 frontend-dev.com</p>
                          </div>
                      </div>
                  </div>
              </footer>
              </div>
          );
}

export default App;
