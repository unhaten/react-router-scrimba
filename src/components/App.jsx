import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans, { loader as vansLoader } from "../pages/vans/Vans";
import VanDetails from "../pages/vans/van-details/VanDetails";
import Dashboard from "../pages/host/Dashboard";
import Income from "../pages/host/Income";
import Reviews from "../pages/host/Reviews";
import HostVans from "../pages/host/host-vans/HostVans";
import HostVanDetails from "../pages/host/host-vans/host-van-details/HostVanDetails";
import HostVanInfo from "../pages/host/host-vans/host-van-details/host-van-info/HostVanInfo";
import HostVanPhotos from "../pages/host/host-vans/host-van-details/host-van-photos/HostVanPhotos";
import HostVanPricing from "../pages/host/host-vans/host-van-details/host-van-pricing/HostVanPricing";
import Login from "../pages/auth/Login";

import NotFound from "../pages/error/NotFound";
import Error from "../pages/error/Error";

import "./../server.js";
import Layout from "./layouts/Layout";
import HostLayout from "./layouts/HostLayout";
// import HostVanDetailsLayout from "./layouts/HostVanDetailsLayout";

// import { getVans } from "../api";

const App = () => {
    // const [vans, setVans] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route
                    path="vans"
                    element={<Vans error={error} />}
                    loader={vansLoader}
                    errorElement={<Error />}
                />
                <Route path="vans/:id" element={<VanDetails />} />
                <Route path="login" element={<Login />} />
                <Route path="host" element={<HostLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="vans" element={<HostVans />} />
                    <Route path="vans/:id" element={<HostVanDetails />}>
                        <Route index element={<HostVanInfo />}></Route>
                        <Route
                            path="pricing"
                            element={<HostVanPricing />}
                        ></Route>
                        <Route
                            path="photos"
                            element={<HostVanPhotos />}
                        ></Route>
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Route>
        )
    );

    // useEffect(() => {
    //     const loadVans = async () => {
    //         try {
    //             const data = await getVans();
    //             setVans(data);
    //         } catch (e) {
    //             console.log(e);
    //             setError(e);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     loadVans();
    // }, []);

    return <RouterProvider router={router}></RouterProvider>;
};

export default App;
