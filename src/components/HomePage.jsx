import homeImage from '../assets/homesmall.jpg';
import { Link } from "react-router-dom";

// Simple homepage with a picture and description

function HomePage() {
    return (
        <div className="container">

            <h1 className="header">Välkommen till naturens hotell</h1>
            <img src={homeImage} alt="Naturbild" />

            <p>Här möter du en unik kombination av naturen och bekvämlighet</p>
            <Link className="nav-link" style={{ borderBottom: "solid" }} to="./rooms">
                {"--- Utforska våra rum ---"}
            </Link>
        </div>
    )
}
export default HomePage;