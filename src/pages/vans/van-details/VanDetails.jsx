import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

const VanDetails = () => {
    const { id } = useParams();
    const [van, setVan] = useState(null);
    const [loading, setIsLoading] = useState(true);

    const fetchDetailedData = async () => {
        try {
            const response = await fetch(`/api/vans/${id}`);
            const data = await response.json();
            setIsLoading(false);
            setVan(data.vans);
        } catch (e) {
            console.log(e);
            setIsLoading(true);
        }
    };

    useEffect(() => {
        fetchDetailedData();
        // eslint-disable-next-line
    }, [id]);

    return (
        <>
            {loading && (
                <div className="loading__container">
                    <Loading />
                </div>
            )}
            {van && (
                <section className="section__details">
                    <div className="details__back">
                        <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                id="Arrow 1"
                                d="M13.0223 6.28131C13.4036 6.28131 13.7128 5.97217 13.7128 5.59082C13.7128 5.20947 13.4036 4.90033 13.0223 4.90033V6.28131ZM0.574363 5.10257C0.304709 5.37222 0.304709 5.80942 0.574363 6.07907L4.96862 10.4733C5.23828 10.743 5.67547 10.743 5.94513 10.4733C6.21478 10.2037 6.21478 9.76648 5.94513 9.49683L2.03912 5.59082L5.94513 1.68481C6.21478 1.41516 6.21478 0.977962 5.94513 0.708308C5.67547 0.438654 5.23828 0.438654 4.96862 0.708308L0.574363 5.10257ZM13.0223 4.90033L1.06261 4.90033V6.28131L13.0223 6.28131V4.90033Z"
                                fill="#858585"
                            />
                        </svg>
                        <Link to="/vans" className="back__link">
                            Back to all vans
                        </Link>
                    </div>
                    <img src={van.imageUrl} alt="" className="details__image" />
                    <div className={`card__type details__type ${van.type}`}>
                        {van.type}
                    </div>
                    <h2 className="details__name">{van.name}</h2>
                    <p className="details__price card__price">
                        ${van.price}
                        <span className="price__span_details">/day</span>
                    </p>
                    <p className="details__description">{van.description}</p>
                    <button className="button home__button details__button">
                        Rent this van
                    </button>
                </section>
            )}
        </>
    );
};

export default VanDetails;
