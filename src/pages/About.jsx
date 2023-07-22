import { Link } from "react-router-dom";
import aboutImg from "./../assets/about-image.png";

const About = () => {
    return (
        <>
            <img src={aboutImg} alt="about-image" className="about__image" />
            <section className="section__about">
                <h2 className="about__header section__header">
                    Don’t squeeze in a sedan when you could relax in a van.
                </h2>
                <p className="about__text">
                    Our mission is to enliven your road trip with the perfect
                    travel van rental. Our vans are recertified before each trip
                    to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className="about__text about__text_extra">
                    Our team is full of vanlife enthusiasts who know firsthand
                    the magic of touring the world on 4 wheels.
                </p>
                <div className="hint_container">
                    <h3 className="hint__text">
                        Your destination is waiting. Your van is ready.
                    </h3>
                    <Link to={"/vans"} className="button hint__button">
                        Explore our vans
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
