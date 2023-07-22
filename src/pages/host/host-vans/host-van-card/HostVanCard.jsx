import { Link } from "react-router-dom";

const HostVanCard = ({ name, image, price, id }) => {
    return (
        <>
            <li className="host-vans__card">
                <Link to={`/host/vans/${id}`} className="host-vans__link">
                    <img
                        src={image}
                        alt="host-van-image"
                        className="host-vans__image"
                    />
                    <div className="host-vans__info">
                        <h3 className="host-vans__name">{name}</h3>
                        <p className="host-vans__price">${price}/day</p>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default HostVanCard;
