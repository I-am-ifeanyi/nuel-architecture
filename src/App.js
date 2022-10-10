import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs";


const App = () => {
  const [lightDark, setLightDark] = useState(true);
  const toggleMode = () => {
    setLightDark((current) => !current);
  };

  return (
    <div className={`${lightDark ? 'bg-[#F5F5F5]' : 'bg-[#121212]'} transition ease-in-out delay-1000`}>
      <Routes>
        <Route path="/" element={<LandingPage lightDark={lightDark} toggle={toggleMode}/>} />
        <Route path="AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default App;
