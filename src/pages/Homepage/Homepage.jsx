import "./Homepage.css";
import htmlIcon from "../../logos-architecture/html.png";
import cssIcon from "../../logos-architecture/css.png";
import jsIcon from "../../logos-architecture/js.png";
import threeIcon from "../../logos-architecture/threejs.png";
import reactIcon from "../../logos-architecture/react.png";
import nodeIcon from "../../logos-architecture/nodejs.png";
import expressIcon from "../../logos-architecture/express.png";
import zodIcon from "../../logos-architecture/zod.png";
import sqlIcon from "../../logos-architecture/sql.png";
import postgresqlIcon from "../../logos-architecture/postgresql.png";
import PortfolioNav from "../../components/PortfolioNav.jsx";

function Homepage() {
    return (
        <div className="homepage-page">
            <PortfolioNav />

            <main>
                <section className="hero-section">
                    <div className="hero-section-txt">
                        <p className="degree">Software Engineering Student</p>
                        <h1>In a deep study of software engineering</h1>
                        <p className="hero-section-additional-txt">
                            Focused on self-improvement and continuous learning. With care about code quality, structure and maintainability.
                        </p>
                    </div>

                    <div className="hero-section-code">
                        <div className="code-section-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <div className="hero-code-content">
                        <span className="syntax-purple">function</span> <span className="syntax-yellow-light">PortfolioCard</span><span className="syntax-yellow">()</span> <span className="syntax-yellow">&#123;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-purple">const</span> <span className="syntax-blue-light">stack</span> <span className="syntax-text">=</span> <span className="syntax-yellow">[</span><span className="syntax-orange">"HTML"</span><span className="syntax-text">,</span> <span className="syntax-orange">"CSS"</span><span className="syntax-text">,</span> <span className="syntax-orange">"JavaScript"</span><span className="syntax-text">,</span> <span className="syntax-orange">"React"</span><span className="syntax-yellow">]</span><span className="syntax-text">;</span>
                        <br />
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-purple">return</span> <span className="syntax-yellow">(</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;</span><span className="syntax-green-blue">section</span> <span className="syntax-blue-light">className</span><span className="syntax-text">=</span><span className="syntax-orange">"developer-card"</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;</span><span className="syntax-green-blue">p</span> <span className="syntax-blue-light">className</span><span className="syntax-text">=</span><span className="syntax-orange">"status"</span><span className="syntax-text">&gt;</span><span className="syntax-muted">learning by building</span><span className="syntax-text">&lt;/</span><span className="syntax-green-blue">p</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;</span><span className="syntax-green-blue">h2</span><span className="syntax-text">&gt;</span><span className="syntax-muted">Nikolay Todorov</span><span className="syntax-text">&lt;/</span><span className="syntax-green-blue">h2</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;</span><span className="syntax-green-blue">ul</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-yellow">&#123;</span><span className="syntax-blue-light">stack</span><span className="syntax-text">.</span><span className="syntax-yellow-light">map</span><span className="syntax-yellow">((</span><span className="syntax-blue-light">technology</span><span className="syntax-yellow">)</span> <span className="syntax-text">=&gt;</span> <span className="syntax-yellow">(</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;</span><span className="syntax-green-blue">li</span> <span className="syntax-blue-light">key</span><span className="syntax-text">=</span><span className="syntax-yellow">&#123;</span><span className="syntax-blue-light">technology</span><span className="syntax-yellow">&#125;</span><span className="syntax-text">&gt;</span><span className="syntax-yellow">&#123;</span><span className="syntax-blue-light">technology</span><span className="syntax-yellow">&#125;</span><span className="syntax-text">&lt;/</span><span className="syntax-green-blue">li</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-yellow">))&#125;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;/</span><span className="syntax-green-blue">ul</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-text">&lt;/</span><span className="syntax-green-blue">section</span><span className="syntax-text">&gt;</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-yellow">);</span>
                        <br />
                        <span className="syntax-yellow">&#125;</span>
                        <br />
                        <br />
                        <span className="syntax-purple">export default</span> <span className="syntax-yellow-light">PortfolioCard</span><span className="syntax-text">;</span>
                        </div>
                    </div>
                </section>

                <section className="current-stack-section">
                    <h2>Current web studying architecture:</h2>

                    <div className="web-tech-stack-slider">
                        <div className="web-tech-stack-track">
                            <img src={htmlIcon} alt="HTML" />
                            <img src={cssIcon} alt="CSS" />
                            <img src={jsIcon} alt="JavaScript" />
                            <img src={threeIcon} alt="Three.js" />
                            <img src={reactIcon} alt="React" />
                            <img src={nodeIcon} alt="Node.js" />
                            <img src={expressIcon} alt="Express" />
                            <img src={zodIcon} alt="Zod" />
                            <img src={sqlIcon} alt="SQL" />
                            <img src={postgresqlIcon} alt="PostgreSQL" />
                            <img src={htmlIcon} alt="" aria-hidden="true" />
                            <img src={cssIcon} alt="" aria-hidden="true" />
                            <img src={jsIcon} alt="" aria-hidden="true" />
                            <img src={reactIcon} alt="" aria-hidden="true" />
                            <img src={nodeIcon} alt="" aria-hidden="true" />
                            <img src={expressIcon} alt="" aria-hidden="true" />
                            <img src={zodIcon} alt="" aria-hidden="true" />
                            <img src={sqlIcon} alt="" aria-hidden="true" />
                            <img src={postgresqlIcon} alt="" aria-hidden="true" />
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Homepage;
