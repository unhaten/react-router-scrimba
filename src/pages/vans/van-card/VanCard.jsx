import { Link } from "react-router-dom";

const VanCard = ({
    // eslint-disable-next-line
    image, name, type, price, id, searchParams, typeFilter,
}) => {
    return (
        <Link
            to={id}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        >
            <li className="vans__card">
                <img src={image} alt="van-image" className="card__image" />
                <div className="card__info">
                    <p className="card__name">{name}</p>
                    <p className="card__price">
                        ${price}
                        <span className="price__span">/day</span>
                    </p>
                </div>
                <div className={`card__type ${type}`}>{type}</div>
            </li>
        </Link>
    );
};

export default VanCard;
