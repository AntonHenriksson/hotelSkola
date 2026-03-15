import { Link } from "react-router-dom"

function ErrorPage() {



    return (

        // terrible errorpage for broken links
        <section className="container">
            <header className="header">404 - sidan finns inte!</header>
            <p>VAD IRRITERANDE</p>
            <Link className="nav-link" style={{ borderBottom: "solid" }} to1="/">---HEM---</Link>
        </section>

    )
}

export default ErrorPage;