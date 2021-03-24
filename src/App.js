import './App.css';
import Banner from "./features/banner/Banner";
import Navbar from "./features/navbar/Navbar";
import Works from "./features/services/Works";
import About from "./features/about/About";
import Awards from "./features/prices/Awards";
import Contact from "./features/contact/Contact";

function App() {
    return (
        <>
            <Banner/>
            <Navbar/>
            <Works/>
            <About/>
            <Awards/>
            <Contact/>
        </>
    );
}

export default App;
