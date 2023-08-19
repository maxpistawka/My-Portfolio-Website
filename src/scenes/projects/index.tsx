import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, } from "@heroicons/react/24/solid";
import { ProjectType, SelectedPage } from "@/shared/types";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import Project from "./Project";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;

}

const projects: Array<ProjectType> = [
  {
    icon: <HomeModernIcon className = "h-6 w-6" />,
    title: "Song Forecast",
    description:
    "Using the Spotify and OpenWeatherMap API's, this website allows you to find the best song for the current weather, in any playlist, in any city." +
    "To try it out, click the button in the top right of your screen!"
  },
  {
    icon: <UserGroupIcon className = "h-6 w-6" />,
    title: "Korean Vocabulary Card System",
    description:
    "Using the SM-2 space repition model, this program optimizes memorization of vocabulary in a card deck setting. " +
    "Additionally, it showcases the consonant assimilation rules for beginners."
  },
  {
    icon: <AcademicCapIcon className = "h-6 w-6" />,
    title: "Cat Shelter App",
    description:
     " This program allows you to store cats  and fosters in your database, with an automatic matching system to find compatible fosters for cats in need of one. "
  },
]
const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren:0.5}
  }
}


const Projects = ({setSelectedPage}: Props) => {
  return (
    <div>
  <section id="projects" className = " mx-auto min-h-full w-5/6 pb-10 py-36">
  <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
  >
    {/*HEADER*/}
    <motion.div 
    className=" md:w-4/5"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 2 }}
    variants={{
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }}
    >
      <HText>
        My Projects

      </HText>
      <p className ="my-5 text-m">
        To find out more about my projects, you can find the full length descriptions for each of them on my website! Including what went into making this website.
      </p>
    </motion.div>
    {/*BENEFITS*/}
    <motion.div 
    className ="md:flex items-center justify-between gap-8 mt-5"
    initial = "hidden"
    whileInView = "visible"
    viewport = {{ once: true, amount: 0.5}}
    variants = {container}
    >
      {projects.map((project: ProjectType) => (
        <Project 
        key={project.title}
        icon={project.icon}
        title={project.title}
        description={project.description}
        setSelectedPage={setSelectedPage}
        />
      ))}
    </motion.div>


  </motion.div>
  </section>
  </div>
  )
}

export default Projects;