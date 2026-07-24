import certificate from "../../../award-pics/Cerr.jpg";
import "./EventoPulseCertificate.css";

function EventoPulseCertificate() {
    return (
        <div className="evento-pulse-certificate-page page-background">
            <main>
                <img className="evento-pulse-certificate-document" src={certificate} alt="Evento Pulse certificate"/>
            </main>
        </div>
    );
}

export default EventoPulseCertificate;
