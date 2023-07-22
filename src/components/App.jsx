import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/vans/Vans";
import VanDetails from "../pages/vans/van-details/VanDetails";
import Dashboard from "../pages/host/Dashboard";
import Income from "../pages/host/Income";
import Reviews from "../pages/host/Reviews";
import HostVans from "../pages/host/host-vans/HostVans";
import HostVanDetails from "../pages/host/host-vans/host-van-details/HostVanDetails";
import HostVanInfo from "../pages/host/host-vans/host-van-details/host-van-info/HostVanInfo";
import HostVanPhotos from "../pages/host/host-vans/host-van-details/host-van-photos/HostVanPhotos";
import HostVanPricing from "../pages/host/host-vans/host-van-details/host-van-pricing/HostVanPricing";

import "./../server.js";
import Layout from "./layouts/Layout";
import HostLayout from "./layouts/HostLayout";
import HostVanDetailsLayout from "./layouts/HostVanDetailsLayout";

const App = () => {
    const [vans, setVans] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/vans");
            const data = await response.json();
            setVans(data.vans);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans vans={vans} />} />
                    <Route path="vans/:id" element={<VanDetails />} />
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
