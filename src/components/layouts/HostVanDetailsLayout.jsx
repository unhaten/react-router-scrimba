import { Outlet } from "react-router-dom";
import HostVanDetails from "../../pages/host/host-vans/host-van-details/HostVanDetails";

const HostVanDetailsLayout = () => {
    return (
        <>
            <HostVanDetails></HostVanDetails>
            <Outlet></Outlet>
        </>
    );
};

export default HostVanDetailsLayout;
