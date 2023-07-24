import { NavLink } from "react-router-dom";
import logo from "./../assets/logo.png";

const Nav = () => {
    const highlighted = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    const iconHighlighted = {
        stroke: "#ff8c38",
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
                <NavLink
                    to="login"
                    className={({ isActive }) =>
                        isActive ? "user-icon_active" : "user-icon"
                    }
                    // style={({ isActive }) =>
                    //     isActive ? iconHighlighted : null
                    // }
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="User circle">
                            <path
                                id="Icon"
                                d="M5.12104 17.8047C7.15267 16.6564 9.4998 16.001 12 16.001C14.5002 16.001 16.8473 16.6564 18.879 17.8047M15 10.001C15 11.6578 13.6569 13.001 12 13.001C10.3431 13.001 9 11.6578 9 10.001C9 8.34412 10.3431 7.00098 12 7.00098C13.6569 7.00098 15 8.34412 15 10.001ZM21 12.001C21 16.9715 16.9706 21.001 12 21.001C7.02944 21.001 3 16.9715 3 12.001C3 7.03041 7.02944 3.00098 12 3.00098C16.9706 3.00098 21 7.03041 21 12.001Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </svg>
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
