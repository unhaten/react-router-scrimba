import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";

const Nav = () => {
    return (
        <nav className="nav">
            <Link to={"/"}>
                <img src={logo} alt="logo" className="nav__logo" />
            </Link>
            <div className="nav__links">
                <Link className="nav__link" to={"/about"}>
                    About
                </Link>
                <Link className="nav__link" to={"/vans"}>
                    Vans
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
