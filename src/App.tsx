import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Experience from "@/scenes/experience";
import Footer from "./scenes/footer";
import Projects from "@/scenes/projects";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutMe
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {  
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.AboutMe);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
      <div className="app bg-gray-200">
        <Navbar 
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}  />
        <Home setSelectedPage={setSelectedPage} />
        <Projects setSelectedPage={setSelectedPage} />
        <Experience setSelectedPage={setSelectedPage} />
        <Footer />
      </div>
    
  )
}

export default App
