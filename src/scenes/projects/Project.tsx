import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
type Props = {
    icon: JSX.Element;
    title:string;
    description: string;
    setSelectedPage:(value:SelectedPage) => void
}

const childVariant = {
    hidden: { opacity: 0, scale: 0.9},
    visible: { opacity: 1, scale: 1},
}
const Project = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants = {childVariant}
        className = "mt-5 rounded-md border-2  bg-gradient-to-r from-slate-100 to-slate-300 border-zinc-500 px-5 py-16 text-center">
        
        <div className = "mb-4 flex justify-center">
            <div className="rounded-full border-2  border-slate-500 bg-white p-4">
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <a
            className="text-sm font-bold  text-black underline hover:text-slate-700"
            onClick={() => setSelectedPage(SelectedPage.Contact)}
            href="https://github.com/maxpistawka?tab=repositories"
            target="_blank"
        >
            <p>Learn More!</p>
        </a>
    </motion.div>
  )
}

export default Project