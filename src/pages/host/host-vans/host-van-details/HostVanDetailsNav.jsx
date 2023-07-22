import { NavLink } from "react-router-dom";

const HostVanDetailsNav = () => {
    const highlighted = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };
    return (
        <nav className="host-details__nav">
            <div className="nav__links host-details__links">
                <NavLink
                    className="nav__link"
                    to={"."}
                    end
                    style={({ isActive }) => (isActive ? highlighted : null)}
                >
                    Details
                </NavLink>
                <NavLink
                    className="nav__link"
                    to={"pricing"}
                    style={({ isActive }) => (isActive ? highlighted : null)}
                >
                    Pricing
                </NavLink>
                <NavLink
                    className="nav__link"
                    to={"photos"}
                    style={({ isActive }) => (isActive ? highlighted : null)}
                >
                    Photos
                </NavLink>
            </div>
        </nav>
    );
};

export default HostVanDetailsNav;
