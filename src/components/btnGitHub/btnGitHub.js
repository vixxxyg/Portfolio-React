import gitHubIcon from "./../../images/icons/gitHub-black.svg";
import "./styles.css"

const BtnGitHub = ({ link }) => {
    return ( 
        <a href={link} target="_blank" className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;