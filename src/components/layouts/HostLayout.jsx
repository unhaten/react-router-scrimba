import { Outlet } from "react-router-dom";
import HostNav from "../../pages/host/HostNav";

const HostLayout = () => {
    return (
        <>
            <section className="section__host">
                <HostNav></HostNav>
                <Outlet></Outlet>
            </section>
        </>
    );
};

export default HostLayout;
