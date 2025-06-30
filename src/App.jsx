import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { personalInfo } from "./data/personalInfo.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Portfolio from "./components/Portfolio";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer personalInfo={personalInfo} />
    </>
  );
}

export default App;
