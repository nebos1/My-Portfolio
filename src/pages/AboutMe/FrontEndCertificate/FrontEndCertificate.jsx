import certificate from "../../../award-pics/ProgressBG.jpg";
import "./FrontEndCertificate.css";

function FrontEndCertificate() {
    return (
        <div className="front-end-certificate-page page-background">
            <main>
                <img className="front-end-certificate-document" src={certificate} alt="Front-End Web Development certificate"/>
            </main>
        </div>
    );
}

export default FrontEndCertificate;
