import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
    const { currentVan } = useOutletContext();

    return (
        <>
            <div className="explicit__pricing">
                ${currentVan.price}.00
                <span className="explicit__pricing-span">/day</span>
            </div>
        </>
    );
};

export default HostVanPricing;
