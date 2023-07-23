import VanCard from "./van-card/VanCard";
import { useSearchParams } from "react-router-dom";

const Vans = ({ vans }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const typeFilter = searchParams.get("type");

    const displayedVans = typeFilter
        ? vans.filter((van) => van.type === typeFilter)
        : vans;

    // console.log(displayedVans);

    const handleFilterChange = (key, value) => {
        setSearchParams((prev) => {
            if (value === null) {
                prev.delete(key);
            } else {
                prev.set(key, value);
            }
            return prev;
        });
    };

    const vanElements = displayedVans.map((van) => (
        <VanCard
            key={van.id}
            id={van.id}
            description={van.description}
            image={van.imageUrl}
            name={van.name}
            type={van.type}
            price={van.price}
            searchParams={searchParams}
            typeFilter={typeFilter}
        ></VanCard>
    ));
    return (
        <section className="section__vans">
            <h2 className="vans__header section__header">
                Explore our van options
            </h2>
            <ul className="vans__filter">
                <div className="filter__container">
                    <li
                        className={`filter__item filter_simple ${
                            typeFilter === "simple" ? "selected" : ""
                        }`}
                        // * you can also do this => onClick={() => setSearchParams({ type: "simple" })} / but it is worse if we need couple of parameters
                        onClick={() => handleFilterChange("type", "simple")}
                    >
                        Simple
                    </li>
                    <li
                        className={
                            typeFilter === "luxury"
                                ? `selected filter__item filter_luxury`
                                : "filter__item filter_luxury"
                        }
                        onClick={() => handleFilterChange("type", "luxury")}
                    >
                        Luxury
                    </li>
                    <li
                        className={
                            typeFilter === "rugged"
                                ? `selected filter__item filter_rugged`
                                : "filter__item filter_rugged"
                        }
                        onClick={() => handleFilterChange("type", "rugged")}
                    >
                        Rugged
                    </li>
                </div>
                {typeFilter ? (
                    <button
                        className="filter__button"
                        onClick={() => handleFilterChange("type", null)}
                    >
                        Clear filters
                    </button>
                ) : null}
            </ul>
            <ul className="vans__list">{vanElements}</ul>
        </section>
    );
};

export default Vans;
