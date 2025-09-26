import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";

const App = () => {
    return (
        <>
            <div className="bg-cyan-300 min-h-screen">
                <Home/>
                <Timer/>
            </div>
            <Footer/>
        </>
    )
};

export default App;