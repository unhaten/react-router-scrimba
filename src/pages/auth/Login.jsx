import {
    useLoaderData,
    useNavigation,
    Form,
    useActionData,
} from "react-router-dom";

const Login = () => {
    const navigation = useNavigation();

    // const [searchParams, setSearchParams] = useSearchParams();
    // const message = searchParams.get("message");
    const errorMessage = useActionData();
    const message = useLoaderData();

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     setError(null);
    //     setStatus("submitting");
    //     try {
    //         const data = await loginUser(loginFormData);
    //         console.log(data);
    //         navigate("/host", { replace: true });
    //         setError(null);
    //     } catch (e) {
    //         setError(e.message);
    //     } finally {
    //         setStatus("idle");
    //     }
    // }

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     setLoginFormData((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // }

    return (
        <section className="section__login">
            <h1 className="section__header login__header">
                Sign in to your account
            </h1>
            {message && <small className="login__warning">{message}</small>}
            {errorMessage && (
                <small className="login__warning">{errorMessage}</small>
            )}
            <Form method="post" className="login__form" replace>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="login__input login__email"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="login__input login__password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                    className="button login__button"
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"}
                </button>
                <p className="login__text">
                    Don’t have an account? Create one now
                </p>
            </Form>
        </section>
    );
};

export default Login;
