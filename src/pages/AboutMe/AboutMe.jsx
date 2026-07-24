import { Link, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./AboutMe.css";
import PortfolioNav from "../../components/PortfolioNav.jsx";
import aboutMeScriptUrl from "../../scripts/scripts.js?url";
import EventoPulseCertificate from "./EventoPulseCertificate/EventoPulseCertificate.jsx";
import MentorCertificate from "./MentorCertificate/MentorCertificate.jsx";
import FrontEndCertificate from "./FrontEndCertificate/FrontEndCertificate.jsx";

function AboutMeContent() {
    useEffect(() => {
        const container = document.getElementById("three-shapes-scene");
        const script = document.createElement("script");

        if (container) {
            container.innerHTML = "";
        }

        script.type = "module";
        script.src = `${aboutMeScriptUrl}?run=${Date.now()}`;
        document.body.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    return (
        <div className="aboutme-page page-background">
            <PortfolioNav />

            <main>
                <section className="aboutme-section">
                    <div className="aboutme-top-row">
                        <article className="article-info-aboutme">
                            <h1>A little bit more about me</h1>

                            <p>
                                Third-year Software Engineering student at the University of Ruse "Angel Kanchev", focused on building strong fundamentals in web development, programming logic, and clean code structure. My goal is to work on, and build projects, where I can connect theory with practice, improve my problem-solving skills, and understand not only how something works, but why it works that way. First programming language I started learning was C++ and I still like it a lot, but I am also intrested in web development and how all things work together in the web ecosystem. I am a big fan of learning by doing, and I am always looking for new projects and challenges to work on, where I can apply my knowledge and skills, and learn something new in the process.
                            </p>
                        </article>
                    </div>

                    <div className="aboutme-bottom-row">
                        <article className="article-code-txt-card bottom-code-card">
                            <span style={{ color: "#c586c0", marginLeft: "1rem" }}>#include</span> <span style={{ color: "#4fc1ff" }}>&lt;iostream&gt;</span>
                            <br />
                            <span style={{ color: "#c586c0", marginLeft: "1rem" }}>#include</span> <span style={{ color: "#4fc1ff" }}>&lt;vector&gt;</span>
                            <br />
                            <br />
                            <span style={{ color: "#ff7d73", marginLeft: "1rem" }}>class</span> <span style={{ color: "#4ec9b0" }}>BadIdea</span> <span style={{ color: "#ffd700" }}>&#123;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ff7d73", marginLeft: "1rem" }}>long long</span> <span style={{ color: "#d4d4d4" }}>something_will_happen</span><span style={{ color: "#b5cea8", marginLeft: "0.5rem" }}>[123456789]</span><span style={{ color: "#d4d4d4" }}>;</span>
                            <br />
                            <span style={{ color: "#ffd700", marginLeft: "1rem" }}>&#125;</span><span style={{ color: "#d4d4d4" }}>;</span>
                            <br />
                            <span style={{ color: "#ff7d73", marginLeft: "1rem" }}>int</span> <span style={{ color: "#dcdcaa" }}>main</span><span style={{ color: "#ffd700" }}>()</span> <span style={{ color: "#ffd700" }}>&#123;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#4ec9b0", marginLeft: "1rem" }}>std</span><span style={{ color: "#d4d4d4" }}>::</span><span style={{ color: "#4ec9b0" }}>vector</span><span style={{ color: "#d4d4d4" }}>&lt;</span><span style={{ color: "#4ec9b0" }}>BadIdea</span><span style={{ color: "#d4d4d4" }}>&gt;</span> <span style={{ color: "#d4d4d4" }}>cannot_handle_this;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c586c0", marginLeft: "1rem" }}>try</span> <span style={{ color: "#ffd700" }}>&#123;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c586c0", marginLeft: "1rem" }}>while</span><span style={{ color: "#ffd700" }}>(</span><span style={{ color: "#569cd6" }}>true</span><span style={{ color: "#ffd700" }}>)</span><span style={{ color: "#ffd700" }}>&#123;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#d4d4d4", marginLeft: "1rem" }}>cannot_handle_this</span><span style={{ color: "#d4d4d4" }}>.</span><span style={{ color: "#dcdcaa" }}>emplace_back</span><span style={{ color: "#ffd700" }}>()</span><span style={{ color: "#d4d4d4" }}>;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#6a9955", marginLeft: "1rem" }}>// too much for this pc...</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ffd700", marginLeft: "1rem" }}>&#125;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ffd700", marginLeft: "1rem" }}>&#125;</span><span style={{ color: "#c586c0", marginLeft: "0.5rem" }}>catch</span> <span style={{ color: "#ffd700" }}>(</span><span style={{ color: "#569cd6" }}>const</span> <span style={{ color: "#4ec9b0" }}>std</span><span style={{ color: "#d4d4d4" }}>::</span><span style={{ color: "#4ec9b0" }}>bad_alloc</span><span style={{ color: "#d4d4d4" }}>&amp;</span> <span style={{ color: "#d4d4d4" }}>e</span><span style={{ color: "#ffd700" }}>)</span> <span style={{ color: "#ffd700" }}>&#123;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#4ec9b0", marginLeft: "1rem" }}>std</span><span style={{ color: "#d4d4d4" }}>::</span><span style={{ color: "#d4d4d4" }}>cerr</span> <span style={{ color: "#d4d4d4" }}>&lt;&lt;</span> <span style={{ color: "#9cdcfe" }}>"Too many things happened!"</span> <span style={{ color: "#d4d4d4" }}>&lt;&lt;</span> <span style={{ color: "#d4d4d4" }}>e</span><span style={{ color: "#d4d4d4" }}>.</span><span style={{ color: "#dcdcaa" }}>what</span><span style={{ color: "#ffd700" }}>()</span> <span style={{ color: "#d4d4d4" }}>&lt;&lt;</span> <span style={{ color: "#4ec9b0" }}>std</span><span style={{ color: "#d4d4d4" }}>::</span><span style={{ color: "#d4d4d4" }}>endl</span><span style={{ color: "#d4d4d4" }}>;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#ffd700", marginLeft: "2rem" }}>&#125;</span>
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#c586c0", marginLeft: "1rem" }}>return</span> <span style={{ color: "#b5cea8" }}>0</span><span style={{ color: "#d4d4d4" }}>;</span>
                            <br />
                            <span style={{ color: "#ffd700", marginLeft: "1rem" }}>&#125;</span>
                        </article>

                        <article className="article-code-txt-card three-shapes-scene">
                            <div id="three-shapes-scene"></div>
                        </article>
                    </div>

                    <div className="recognitions-heading">
                        <h4>Recognitions</h4>
                        <p>Certificates, honors, awards and milestones that reflect dedication and consistent performance over time</p>
                    </div>

                    <article className="article-wide-aboutme-card">
                        <div className="recognition">
                            <div className="recognition-content">
                                <h5 className="recognition-title">
                                    <a className="recognition-title-link" href="https://www.facebook.com/IIT.UniRuse/posts/pfbid072UXkBNPQcNWy9ZC9ZRtyQpHemvfJ5txYPPqVs7dHouby2XkKJfnPDkifyVrCdzol" target="_blank" rel="noreferrer">
                                        Participation in The Programme Comitte of 65-th ANNUAL SCIENTIFIC CONFERENCE
                                    </a>
                                </h5>

                                <p className="recognition-text">
                                    Awarded by Assoc. prof. Desislava Atanasova, Phd Eng Rector of the University of Ruse "Angel Kanchev" with the Crystal Prize award - "THE BEST PAPER" for the project Evento Pulse.
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>May 14</span>
                                <span>2026</span>
                            </div>
                        </div>

                        <div className="recognition">
                            <div className="recognition-content">
                                <h5 className="recognition-title">
                                    <Link className="recognition-title-link" to="/aboutme/evento-pulse-certificate">
                                        Special certificate and first place for participation in the student scientific session with project Evento Pulse
                                    </Link>
                                </h5>

                                <p className="recognition-text">
                                    Personally awarded by the Dean of the "Informatics and information technologies" Department - associate professor doctor Rumen Rusev.
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>May 13</span>
                                <span>2026</span>
                            </div>
                        </div>

                        <div className="recognition">
                            <div className="recognition-content">
                                <h5 className="recognition-title">
                                    <a className="recognition-title-link" href="https://www.facebook.com/IIT.UniRuse/posts/pfbid08KPcJEnKBvf2jz7Mm4zHwB6xAnoKLTFdsJrGpDYWkaVCbWXFeJT3yi7G2B6y87D1l" target="_blank" rel="noreferrer">
                                        Participation in student scientific session
                                    </a>
                                </h5>

                                <p className="recognition-text">
                                    Development and realization of the 2D video game "Pixel Courier", created with C++ and SFML.
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>Apr 30</span>
                                <span>2026</span>
                            </div>
                        </div>

                        <div className="recognition">
                            <div className="recognition-content">
                                <h5 className="recognition-title">
                                    <a className="recognition-title-link" href="https://www.facebook.com/IIT.UniRuse/posts/pfbid0K2aSFn5HuxxLqnbiEejZdfAxCxPH15wcoC9rUUzUjSHPaU5synFvCoQ3eLdY3EHAl" target="_blank" rel="noreferrer">
                                        Special award - Ruse AI Hack with project "Evento Pulse"
                                    </a>
                                </h5>

                                <p className="recognition-text">
                                    48-hour AI Hackathon organised by Startup Factory with University of Ruse "Angel Kanchev" and Software Roastery as supporting partners.
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>Apr 24-26</span>
                                <span>2026</span>
                            </div>
                        </div>

                        <div className="recognition">
                            <div className="recognition-content">
                                <h5 className="recognition-title">
                                    <Link className="recognition-title-link" to="/aboutme/mentor-certificate">
                                        Mentor in "Samsung Solve for Tomorrow Program" - Design Thinking Workshop
                                    </Link>
                                </h5>

                                <p className="recognition-text">
                                    Organised by Education 5.0 Foundation in partnership with the University of Ruse "Angel Kanchev".
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>Nov 9</span>
                                <span>2024</span>
                            </div>
                        </div>

                        <div className="recognition">
                            <div className="recognition-content">
                                <h5 className="recognition-title">
                                    <Link className="recognition-title-link" to="/aboutme/front-end-web-development-certificate">
                                        Front-End Web Development certificate
                                    </Link>
                                </h5>

                                <p className="recognition-text">
                                    Early milestone in studying web development, completed through Progress BG. Certificate document number: 3364.
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>Feb 22</span>
                                <span>2023</span>
                            </div>
                        </div>

                        <div className="recognition recognition-no-border">
                            <div className="recognition-content">
                                <h5 className="recognition-title-static">First Certificate in English (FCE)</h5>

                                <p className="recognition-text">
                                    Lifetime English language certificate issued by Cambridge English, UK.
                                </p>
                            </div>

                            <div className="recognition-date">
                                <span>2022</span>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

function AboutMePage() {
    return (
        <Routes>
            <Route index element={<AboutMeContent />} />
            <Route path="evento-pulse-certificate" element={<EventoPulseCertificate />} />
            <Route path="mentor-certificate" element={<MentorCertificate />} />
            <Route path="front-end-web-development-certificate" element={<FrontEndCertificate />} />
        </Routes>
    );
}

export default AboutMePage;
