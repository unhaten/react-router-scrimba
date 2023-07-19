import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans";
import Nav from "./Nav";
import Footer from "./Footer";

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <Nav></Nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                </Routes>
            </main>
            <Footer></Footer>
        </BrowserRouter>
    );
};

export default App;
