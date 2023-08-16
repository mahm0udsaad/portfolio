import { useState, useEffect } from "react";
import ProjectCard from './projectCard'
const Projects = ({goToProjects}) => {
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const [removeProjectsIndex, setRemoveProjectsIndex] = useState(0);
    const [selectedProject , setSelectedProject] = useState(null)
    const [projects , setProjecs ] = useState([
      {
        image: 'src/assets/projects/ecommerce.png',
        name: 'Ecommerce site',
        description: 'Ecommerce site',
        url: 'https://project1.com',
        codeUrl: 'https://github.com/project1'
      },
      {
        image: 'src/assets/projects/1692014389916.png',
        name: 'property finder clone',
        description: 'Description of Project 2',
        url: 'https://project2.com',
        codeUrl: 'https://github.com/project2'
      },
      {
        image: 'src/assets/projects/image.png',
        name: 'Hotel booking site',
        description: 'Description of Project 3',
        url: 'https://project3.com',
        codeUrl: 'https://github.com/project3'
      },
      {
        image: 'src/assets/projects/weather.png',
        name: 'Weather App',
        description: 'Description of Project 4',
        url: 'https://project4.com',
        codeUrl: 'https://github.com/project4'
      },
      {
        image: 'src/assets/projects/todo.png',
        name: 'Todo App',
        description: 'Description of Project 5',
        url: 'https://project5.com',
        codeUrl: 'https://github.com/project5'
      } ])
    
   useEffect(() => {
      if (goToProjects && currentTechIndex < projects.length) {
        const showProjects = setTimeout(() => {
          setCurrentTechIndex(prev => prev + 1);
        }, 400);
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
  <div className="text-white lg:w-container mt-30 lg:mx-auto relative flex flex-col justify-center items-center">
      <h1 className="text-5xl">{selectedProject? selectedProject.name:'Projects'}</h1>
        {selectedProject ? <button className="hover:opacity-50 absolute top-0 left-0 " onClick={initialProjects}><i class="fa-3x fa-regular fa-circle-left"></i></button> : ''}
      <ul className={selectedProject ? 'w-full h-full':"flex justify-center item-center z-20 space-x-5 res mx-2 lg:mx-auto w-full my-5"}>
      {goToProjects ? (
    <div className="projects-container">
  {goToProjects ? (
    <div className={selectedProject ? 'w-full' : "projects-container w-11/12 mx-auto grid gap-10 grid-cols-2 lg:grid-cols-3 lg:grid-rows-3"}>
     {selectedProject ? (
         <ProjectCard key={selectedProject.index} isItSelected={selectedProject} tech={selectedProject} index={selectedProject.index} />
     ):(
     projects.slice(0, !goToProjects ?  removeProjectsIndex : currentTechIndex + 1).map((tech, index) => (
        <ProjectCard showCardDetails={()=>showCardDetails(index)} dimension={'50'} isItSelected={selectedProject} key={index} tech={tech} index={index} />
      ))
     )}
        </div>
      ) : (
        ''
      )}
        </div>
      ) : (
        ''
      )}
          </ul>
        </div>
      );
      }
 
export default Projects;