import { Link } from "react-router-dom";
import homebg from "./../assets/home-bg.png";

const Home = () => {
    return (
        <>
            <img src={homebg} alt="background" className="home__image" />
            <section className="section__home">
                <div className="home__content">
                    <h1 className="home__header">
                        You got the travel plans, we got the travel vans.
                    </h1>
                    <p className="home__text">
                        Add adventure to your life by joining the #vanlife
                        movement. Rent the perfect van to make your perfect road
                        trip.
                    </p>
                    <Link to={"/vans"} className="button home__button">
                        Find your van
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
