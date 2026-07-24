import "./Projects.css";
import PortfolioNav from "../../components/PortfolioNav.jsx";

function ProjectsPage() {
    return (
        <div className="projects-page page-background">
            <PortfolioNav />

            <main>
                <article className="projects-section">
                    <h1>Some of my projects are:</h1>

                    <div className="projects-layout">
                        <article className="project-card main-project-card">
                            <p className="project-type">vibe coded project</p>
                            <h2>
                                <a className="project-title-link" href="https://github.com/EventoPulse/Hackatons_Vibe_Coders" target="_blank" rel="noreferrer">Evento Pulse</a>
                            </h2>
                            <p className="project-description">
                                Currently in development phase and in collaboration with{" "}
                                <a className="collaborator-link" href="https://github.com/Haygarov04" target="_blank" rel="noreferrer">Velislav Haygarov</a>,{" "}
                                <a className="collaborator-link" href="https://github.com/Javicilie0" target="_blank" rel="noreferrer">Aykan Nedzhibov</a>,{" "}
                                <a className="collaborator-link" href="https://github.com/TedyDaskalova" target="_blank" rel="noreferrer">Teodora Daskalova</a>.
                            </p>
                        </article>

                        <div className="side-projects">
                            <article className="project-card side-project-card top-side-project">
                                <p className="project-type">Web project</p>
                                <h2>
                                    <a className="project-title-link" href="https://github.com/nebos1/Weather-Now" target="_blank" rel="noreferrer">Weather Now</a>
                                </h2>
                                <p className="project-description">Simple weather app using a public API for real-time data, clean UI and responsive design.</p>
                            </article>

                            <article className="project-card side-project-card bottom-side-project">
                                <p className="project-type">Simple game using C++</p>
                                <h2>
                                    <a className="project-title-link" href="https://github.com/nebos1/Pixel_Courier" target="_blank" rel="noreferrer">Pixel Courier</a>
                                </h2>
                                <p className="project-description">A simple 2D Windows x64 game developed in C++ using the SFML library.</p>
                            </article>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default ProjectsPage;
