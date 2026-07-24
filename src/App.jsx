import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ProjectsPage from "./pages/Projects/Projects.jsx";
import AboutMePage from "./pages/AboutMe/AboutMe.jsx";
import BlankPage from "./pages/BlankPage/BlankPage.jsx";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/aboutme/*" element={<AboutMePage />} />
            <Route path="/blank-page" element={<BlankPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
