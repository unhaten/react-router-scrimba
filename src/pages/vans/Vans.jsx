import VanCard from "./van-card/VanCard";

const Vans = ({ vans }) => {
    const vanElements = vans.map((van) => {
        return (
            <VanCard
                key={van.id}
                description={van.description}
                image={van.imageUrl}
                name={van.name}
                type={van.type}
                price={van.price}
            ></VanCard>
        );
    });
    return (
        <section className="section__vans">
            <h2 className="vans__header">Explore our van options</h2>
            <ul className="vans__filter">
                <div className="filter__container">
                    <li className="filter__item filter_simple">Simple</li>
                    <li className="filter__item filter_luxury">Luxury</li>
                    <li className="filter__item filter_rugged">Rugged</li>
                </div>
                <button className="filter__button">Clear filters</button>
            </ul>
            <ul className="vans__list">{vanElements}</ul>
        </section>
    );
};

export default Vans;
