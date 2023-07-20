import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/vans/Vans";
import VanDetails from "../pages/vans/van-details/VanDetails";
import Nav from "./Nav";
import Footer from "./Footer";

import "./../server.js";

const App = () => {
    const [vans, setVans] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/vans");
            const data = await response.json();
            setVans(data.vans);
            console.log(data.vans);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <header>
                <Nav></Nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans vans={vans} />} />
                    <Route path="/vans/:id" element={<VanDetails />} />
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default App;
