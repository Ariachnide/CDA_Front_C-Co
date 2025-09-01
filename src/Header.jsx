import { Link } from "react-router";

function Header() {
    return(
        <>
            <nav>
                <h1>Carambar & Co</h1>
                <div className="navbar">
                    <div className="linkContainer">
                        <Link className="navbarBlock" to="/">Accueil</Link>
                    </div>
                    <div className="linkContainer">
                        <Link className="navbarBlock" to="/creer-blague">Créer une blague</Link>
                    </div>
                    <div className="linkContainer">
                        <Link className="navbarBlock" to="/liste-blagues">Liste des blagues</Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
