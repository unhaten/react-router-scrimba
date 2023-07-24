import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();

    return (
        <section className="section__error">
            <h1>An error occured: {error.message}</h1>
            <pre>
                {error.status} - {error.statusText}
            </pre>
        </section>
    );
}
