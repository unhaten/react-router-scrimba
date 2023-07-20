import { Link } from "react-router-dom";

const VanCard = ({ description, image, name, type, price, id }) => {

    return (
        <Link to={`/vans/${id}`}>
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
