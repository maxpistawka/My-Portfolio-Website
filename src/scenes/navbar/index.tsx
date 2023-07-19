import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";


type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-slate-200 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
           

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} gap-8 text-m`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Experience"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <a
          className=" transition duration-500 hover:text-primary-300"
      
      href= "#bottom"
    > Contact
    </a>
                </div>
                

                <div className={`${flexBetween} gap-8`}>

                    <a className="rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 px-10 py-2 hover:bg-red-500 hover:text-white"
                      href= "https://futurespotifyprojectwow.com"
                      target="_blank">
                        
                   
                    Spotify Project</a>
                    <a className="rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 px-10 py-2 hover:bg-red-500 hover:text-white"
                      href= "https://drive.google.com/file/d/1b9vQPxNb36RMLUaBCZqyYJlDnBA_kiNJ/view?usp=sharing"
                      target="_blank">
                        

                    Resume</a>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link
              page="Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
           <a
          className=" transition duration-500 hover:text-primary-300"
      
      href= "#bottom"
    > Contact
    </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;