import React, {Fragment, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Preloader} from "./components/Preloader";
import {About, Contact, Home, Projects} from "./pages";


function App() {
    return (
        <>
            <Router>
                <Fragment>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route exact path={"/"} element={<Home />} />
                            <Route path={"/about"} element={<About />} />
                            <Route path={"/projects"} element={<Projects />} />
                            <Route path={"/contact"} element={<Contact />} />
                        </Routes>
                    </Suspense>
                </Fragment>
            </Router>
        </>
    );
}

export default App;
