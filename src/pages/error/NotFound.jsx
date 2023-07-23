import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <section className="section__not-found">
                <h2 className="not-found__header section__header">
                    Sorry, the page you were looking for was not found.
                </h2>
                <Link to="/" className="button not-found__button">
                    Return to home
                </Link>
            </section>
        </>
    );
};

export default NotFound;
