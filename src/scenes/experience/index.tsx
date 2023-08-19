import HText from '@/shared/HText';
import { SelectedPage, ClassType } from '@/shared/types'

import javalogo from "@/assets/javalogo.png";
import pythonlogo from "@/assets/pythonlogo.png";
import reactlogo from "@/assets/reactlogo.png";
import tslogo from "@/assets/tslogo.png";
import otherlogo from "@/assets/otherlogo.png";
import { motion } from 'framer-motion';
import Class from "./Class";


const classes: Array<ClassType>  = [
    {
        name: "Java Experience",
        description: "I have been actively using Java for 4 years, including writting the entirety of my Cat Shelter Registry program using Java (and using Swing for my GUI).",
        image: javalogo,
    },
    {
        name: "Python Experience",
        description: "I have been actively using Python for the past 2 years, and virtually all of my leetcode questions aswell as my Korean Vocabulary Card App are written in Python.",
        image: pythonlogo,
    },
    {
        name: "React Experience",
        description: "Both this website, aswell as the website for Song Forecast heavily rely on React for the front-end development.",
        image: reactlogo,
    },
    {
        name: "TypeScript Experience",
        description: "I have created both this website, aswell as the website for my Song Forecast Project using TypeScript and my proficiency can be displayed through them.",
        image: tslogo,
    },
    {
        name: "Other Experience",
        description: "I have experience in Flask, MySQL, RESTful API access level management design, CSS, HTML, Tailwind, Vite, JSON, and more. ",
        image: otherlogo,
    },
]

type Props = {
    setSelectedPage:(value: SelectedPage) =>void;
};

const Experience = ({setSelectedPage}: Props) => {
  return (
    <section id="experience" className= "w-full bg-white  py-36">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
            
        >
            <motion.div
                className = "mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
                variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
            }}
            >
                <div className = "md:w-3/5">
                    <HText> Experience </HText>
                    <p className = "py-5">
                        Listed below, you can see some of my experience and knowledge in the computer science field by hovering over each section
                    </p>
                </div>
            </motion.div>
            <div className = "mx-14 mt-10 h-[550px] over overflow-x-auto  overflow-y-hidden"> 
                <ul className = "w-[2500px] whitespace-no-wrap ">
                    {classes.map((item, index) => (
                        <Class 
                            key = {`$item.name-${index}`}
                            name={item.name}
                            description={item.description}
                            image = {item.image }
                            />
                    ))}


                </ul>

            </div>
        </motion.div>
    </section>
  )
}

export default Experience