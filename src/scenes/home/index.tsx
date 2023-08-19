import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import githublogo from "@/assets/githublogo.png";
import { useState } from 'react';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};



const Home = ({ setSelectedPage }: Props) => {
  const [showResults, setShowResults] = useState(false)
  const toggleShow = () => {
    setShowResults(!showResults);
  }
  return (
    <section id="home" className=" bg-white gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center  md:h-4/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
      >
        
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >

            
              <div className="pt-24 before:absolute text-whitebefore:-top-20 before:-left-20 before:z-[-1]  text-stone-800 text-7xl">
                <p> Hi, I'm Max</p>
                <p> a <span className = "highlighted">computer science student</span> @ UBC </p>
                <p>with interests in <span className = "highlighted">full stack development</span>,</p>
                <p><span className = "highlighted">tech,</span>
                  <span className = "highlighted"> music,</span> and 
                  <span className = "highlighted"> language</span></p>
              </div>
       

           
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            
            <div className="">
<a target="_blank" href="https://github.com/maxpistawka"><img src={githublogo} className = "h-14 w-14" alt="Five cats looking around a field."/></a>
</div>
            <AnchorLink
              className="animate-pulse text-m font-bold  text-black underline hover:text-white"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href= "#bottom"
            >
              <p>Contact Me!</p>
            </AnchorLink>
          </motion.div>
        </div>
           
        <div className =" md:px-40 mt-10 pt-20">
        {/* IMAGE */}
        <div className =" md:px-20  flex flex-row justify-between ">
        <div >
        <h1>My Current Status</h1>
        </div>
            <div>
            <button onClick={toggleShow} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>
</button>
            </div>
        
        </div>
        <hr className = "border-black"></hr>
        {showResults && (
          <div className = "md:px-20 pt-4">
              <h1>Currently in my second year at UBC majoring in computer science</h1> 
              <h1>Apart of the UBC science Co-op program</h1> 
              <h1>Searching for co-op employment for the 2024 Winter and Summer term</h1> 
              </div>
            )
            }
            </div>
      </motion.div>
      
        
      <div
          className="animate-bounce flex basis-3/5 justify-center mt-40 md:z-10
                md:justify-items-end"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-8.5-7.5M12 21V3" />
          </svg>

        </div>
    </section>
  );
};

export default Home;