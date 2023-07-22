import { NavLink } from "react-router-dom";

const HostNav = () => {
    const highlighted = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };
    return (
        <nav className="host__nav">
            <NavLink
                to="."
                end
                className="host__link nav__link"
                style={({ isActive }) => (isActive ? highlighted : null)}
            >
                Dashboard
            </NavLink>
            <NavLink
                to="income"
                className="host__link nav__link"
                style={({ isActive }) => (isActive ? highlighted : null)}
            >
                Income
            </NavLink>
            <NavLink
                to="vans"
                className="host__link nav__link"
                style={({ isActive }) => (isActive ? highlighted : null)}
            >
                Vans
            </NavLink>
            <NavLink
                to="reviews"
                className="host__link nav__link"
                style={({ isActive }) => (isActive ? highlighted : null)}
            >
                Reviews
            </NavLink>
        </nav>
    );
};

export default HostNav;
