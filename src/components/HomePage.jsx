import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div>
            <h1>Välkommen till naturens hotell!</h1>
            <img src="src/assets/homeimage.jpg" width={500} height={300} alt="Naturbild" />
            <p>Här möter du en unik kombination av naturen och bekvämligheten.</p>
            <Link to="./rooms">Utforska våra rum</Link>
        </div>
    )
}
export default HomePage;