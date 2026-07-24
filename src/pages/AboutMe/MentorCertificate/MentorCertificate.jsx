import certificate from "../../../award-pics/Mentor.jpg";
import "./MentorCertificate.css";

function MentorCertificate() {
    return (
        <div className="mentor-certificate-page page-background">
            <main>
                <img className="mentor-certificate-document" src={certificate} alt="Mentor certificate"/>
            </main>
        </div>
    );
}

export default MentorCertificate;
