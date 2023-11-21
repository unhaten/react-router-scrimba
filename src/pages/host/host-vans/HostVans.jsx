import { useLoaderData } from "react-router-dom";
import HostVanCard from "./host-van-card/HostVanCard";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../utils/requireAuth";




const HostVans = () => {
    // const [hostVan, setHostVan] = useState([]);
    const hostVan = useLoaderData();

    // const fetchHostVanData = async () => {
    //     try {
    //         const response = await fetch("/api/host/vans");
    //         const data = await response.json();
    //         setHostVan(data.vans);
    //         // console.log(data.vans);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     fetchHostVanData();
    // }, []);

    const vanCards = hostVan.map((van) => (
        <HostVanCard
            key={van.id}
            name={van.name}
            image={van.imageUrl}
            price={van.price}
            id={van.id}
        ></HostVanCard>
    ));

    return (
        <>
            <section className="section__host-vans">
                <h2 className="section__header">Your listed vans</h2>
                <ul className="host-vans__list">
                    {/* {hostVan.length > 0 ? vanCards : <Loading />} */}
                    {vanCards}
                </ul>
            </section>
        </>
    );
};

export default HostVans;
