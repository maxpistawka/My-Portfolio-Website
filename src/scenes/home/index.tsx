
import { SelectedPage } from "@/shared/types";

import TRANSPARENTMAX from "@/assets/TRANSPARENTMAX.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};



const Home = ({ setSelectedPage }: Props) => {
 
  return (
    <section id="home" className=" bg-gradient-to-r from-slate-300 to-slate-600 gap-16 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
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
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            
            
            <div className = "glass">
                
            </div>
            

            
            <div className="relative  font-codeText text-black text-xl">
                <p> Hello, my name is... </p>
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]  text-stone-800 text-8xl font-permMarker ">
                <p> Max Pistawka </p>
              </div>
            </div>

            <p className="mt-8 text-m  text-gray-800">
              I am a second year student at the University of British Columbia, majoring in Computer Science. I have passion for a plethora fields in computer science,
              involving software engineering, cyber security, and AI. I have proficiency in Java and am currently learning python and typescript.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            
            <a className="rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 px-10 py-2 hover:bg-red-500 hover:text-white"
              href = "https://github.com/maxpistawka">
              GitHub
                
            </a> 
            <AnchorLink
              className="animate-pulse text-sm font-bold  text-blue-950 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href= "#bottom"
            >
              <p>Contact Me!</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          
          <img alt="home-pageGraphic" src={TRANSPARENTMAX} />
        </div>
        
        
        
      </motion.div>
      <div
          className="animate-bounce flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-8.5-7.5M12 21V3" />
          </svg>

        </div>

    </section>
  );
};

export default Home;