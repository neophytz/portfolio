import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./components/About";
import Skill from "./components/Skill";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    </>
  );
}

export default App;