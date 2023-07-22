import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
    const { currentVan } = useOutletContext();

    return (
        <>
            <img
                src={currentVan.imageUrl}
                alt="explicit-van-image"
                className="explicit__image"
            />
        </>
    );
};

export default HostVanPhotos;
