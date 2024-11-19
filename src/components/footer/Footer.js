import "./styles.css";

import vk from "./../../images/icons/vk.svg";
import instagram from "./../../images/icons/instagram.svg";
import twitter from "./../../images/icons/twitter.svg";
import gitHub from "./../../images/icons/gitHub.svg";
import linkedIn from "./../../images/icons/linkedIn.svg";

function Footer () {
    return ( 
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
     );
}
 
export default Footer;