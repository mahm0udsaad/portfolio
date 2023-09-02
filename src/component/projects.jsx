import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProjectCard from './projectCard';

const Projects = ({goToProjects ,selectedProject ,setSelectedProject ,projects}) => {
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const [removeProjectsIndex, setRemoveProjectsIndex] = useState(0);
   
    
   useEffect(() => {
      if (goToProjects && currentTechIndex < projects.length) {
        const showProjects = setTimeout(() => {
          setCurrentTechIndex(prev => prev + 1);
        }, 300);
        return () => clearTimeout(showProjects);
      }
    }, [goToProjects,currentTechIndex]);
    useEffect(()=>{
      if(goToProjects && removeProjectsIndex <= 0){
        const removeTime = setTimeout(()=>{
          setRemoveProjectsIndex(prev => prev + 1)
        },30)
        return ()=> clearTimeout(removeTime)
      }
    },[goToProjects, removeProjectsIndex]);

    const showCardDetails = async (id) => {
      const mainItem = projects.filter((item,index) => index == id)
      setSelectedProject(mainItem[0])
    };
    const initialProjects = async() => {
       setSelectedProject(null)
    };
    
    return ( 
  <div className="text-white lg:w-container  lg:mx-auto relative flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-3xl mr-10">{selectedProject? selectedProject.name:goToProjects?'Projects':''}</h1>
        {selectedProject ? <button className="hover:opacity-50 absolute top-2 right-2 lg:right-5 lg:right-10 " onClick={initialProjects}><i className="fa-3x fa-regular fa-circle-right"></i></button> : ''}
      <ul className={selectedProject ? 'w-full h-full':"flex z-20 res mx-auto w-full my-10"}>
    <div className={goToProjects? "projects-container":"hidden"}>
    <div className={selectedProject ? 'flex w-11/12 flex-col mx-auto items-center' : "mx-auto grid gap-8 w-11/12 items-center justify-center grid-cols-2 lg:grid-cols-3 lg:grid-rows-3"}>
     {selectedProject ? (
         <ProjectCard key={selectedProject.index} isItSelected={selectedProject} tech={selectedProject} index={selectedProject.index} />
     ):(
     projects.slice(0, currentTechIndex + 1).map((tech, index) => (
      <AnimatePresence key={index}>
        <ProjectCard showCardDetails={()=>showCardDetails(index)} isItSelected={selectedProject} tech={tech} index={index} />
      </AnimatePresence>
          ))
     )}
        </div>
        </div>
          </ul>
        </div>
      );
      }
 
export default Projects;