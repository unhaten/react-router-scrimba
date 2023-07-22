import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
    const { currentVan } = useOutletContext();
    return (
        <>
            <div className="explicit__text">
                <span className="explicit__bold">Name: </span>
                {currentVan.name}
            </div>
            <div className="explicit__text explicit__category">
                <span className="explicit__bold">Category: </span>
                {currentVan.type}
            </div>
            <div className="explicit__text">
                <span className="explicit__bold">Description: </span>
                {currentVan.description}
            </div>
            <div className="explicit__text">
                <span className="explicit__bold">Visibility: </span>
                Public
            </div>
        </>
    );
};

export default HostVanInfo;
