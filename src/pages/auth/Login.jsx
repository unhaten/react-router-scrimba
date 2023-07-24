import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(loginFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <section className="section__login">
            <h1 className="section__header login__header">
                Sign in to your account
            </h1>
            <form onSubmit={handleSubmit} className="login__form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                    className="login__input login__email"
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                    className="login__input login__password"
                />  
                <button className="button login__button">Sign in</button>
                <p className="login__text">
                    Don’t have an account? Create one now
                </p>
            </form>
        </section>
    );
};

export default Login;
