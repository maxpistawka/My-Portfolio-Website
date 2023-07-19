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
    title: "Cat Shelter App",
    description:
      "I have been a cat shelter volunteer for an extended period of years. Therefore I decided to make a program."
  },
  {
    icon: <UserGroupIcon className = "h-6 w-6" />,
    title: "Discord Rating Bot",
    description:
      "This is a bot that is able to give users a unique experience with..."
  },
  {
    icon: <AcademicCapIcon className = "h-6 w-6" />,
    title: "Discord Language Learning Helper",
    description:
      "I know some of at least 4 languages, and found that a discord bot would be a great way to do this."
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
    <div className = "bg-slate-200">
  <section id="projects" className = " mx-auto min-h-full w-5/6 py-36">
  <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
  >
    {/*HEADER*/}
    <motion.div 
    className=" md:w-3/5"
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
      <p className ="my-5 text-sm">
        I am a second year student at the University of British Columbia, majoring in Computer Science. I have passion for a plethora fields in computer science, involving software engineering, cyber security, and AI. I have proficiency in Java and am currently learning python and typescript (which was used to build this website).
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