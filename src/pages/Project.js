import img from "./../images/projects/02-big.jpg";
import gitHubIcon from "./../images/icons/gitHub-black.svg";

const Project = () => {
    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">Video service</h1>
                    <img src={img} alt="" className="project-details__cover" />
                    <div className="project-details__description">
                        <p>Skills: React, Node.js, MongoDB</p>
                    </div>
                    <a href="#!" className="btn-outline">
                        <img src={gitHubIcon} alt="" />
                        GitHub repo
                    </a>
                </div>
            </div>    
        </main>
     );
}
 
export default Project;