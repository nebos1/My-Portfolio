import { NavLink } from "react-router-dom";
import logo from "../logo/logo.png";
import github from "../github-icon/github.png";
import "./PortfolioNav.css";

function PortfolioNav() {
    return (
        <nav>
            <span className="logo">
                <img src={logo} alt="logo" />
            </span>
            <span className="nav-separator"></span>
            <span className="portfolio-name">Nikolay Todorov</span>

            <div className="nav-links">
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/aboutme">About me</NavLink>
            </div>

            <span className="nav-separator nav-github-separator"></span>

            <a className="github-link" href="https://github.com/nebos1" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <img src={github} alt="GitHub" />
            </a>
        </nav>
    );
}

export default PortfolioNav;
