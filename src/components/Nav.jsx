import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";

const Nav = () => {
    const highlighted = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    return (
        <nav className="nav">
            <NavLink to={"/"}>
                <img src={logo} alt="logo" className="nav__logo" />
            </NavLink>
            <div className="nav__links">
                <NavLink
                    className="nav__link"
                    to={"host"}
                    style={({ isActive }) => (isActive ? highlighted : null)}
                >
                    Host
                </NavLink>
                <NavLink
                    className="nav__link"
                    to={"about"}
                    style={({ isActive }) => (isActive ? highlighted : null)}
                >
                    About
                </NavLink>
                <NavLink
                    className="nav__link"
                    to={"vans"}
                    style={({ isActive }) => (isActive ? highlighted : null)}
                >
                    Vans
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
