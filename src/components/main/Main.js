import "./styles.css";

const Main = () => {
    return ( 
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./../../images/projects/01.jpg" alt="Project img" className="project__img" /> 
                        <h3 className="project__title">Gaming streaming portal</h3>
                    </a> 
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src="./../../images/projects/02.jpg" alt="Project img" className="project__img" /> 
                        <h3 className="project__title">Video service</h3>
                    </a> 
                </li>
                <li className="project">
                    <img src="./../../images/projects/03.jpg" alt="Project img" className="project__img" /> 
                    <h3 className="project__title">Video portal</h3>
                </li>
                <li className="project">
                    <img src="./../../images/projects/04.jpg" alt="Project img" className="project__img" /> 
                    <h3 className="project__title">Dating app</h3>
                </li>
                <li className="project">
                    <img src="../../../images/projects/05.jpg" alt="Project img" className="project__img" /> 
                    <h3 className="project__title">Landing</h3>
                </li>
                <li className="project">
                    <img src="./../../images/projects/06.jpg" alt="Project img" className="project__img" /> 
                    <h3 className="project__title">Gaming community</h3>
                </li>
            </ul>
        </div>
    </main>
     );
}
 
export default Main;