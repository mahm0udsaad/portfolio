import { useState, useEffect } from "react";
import ProjectCard from './projectCard'
const Projects = ({goToProjects ,selectedProject ,setSelectedProject}) => {
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const [removeProjectsIndex, setRemoveProjectsIndex] = useState(0);
    const [projects, setProjects] = useState([
      {
        image: 'src/assets/ecommerce.png',
        name: 'Ecommerce site',
        description: 'Welcome to the Ecommerce site! This project showcases an online shopping platform built using React and Tailwind CSS. Users can explore a variety of products, add them to the cart, and proceed to checkout. The site offers a seamless shopping experience with a user-friendly interface.',
        url: 'https://e-commerce-ebn2.onrender.com/',
        codeUrl: 'https://github.com/mahm0udsaad/E_Commerce'
      },
      {
        image: 'src/assets/1692014389916.png',
        name: 'Property Finder Clone',
        description: "Welcome to the Property Finder Clone! This is the client-side repository of the app, developed using React, Tailwind CSS, and communicating with the backend built on Express.js and MongoDB. Explore property listings, search for your dream home, and find all the details you need.",
        url: 'https://property-finder-8ixf.onrender.com/',
        codeUrl: 'https://github.com/mahm0udsaad/property_finder'
      },
      {
        image: 'src/assets/image.png',
        name: 'Hotel Booking Site',
        description: 'Welcome to the Hotel Booking Site with Restaurants Page! This project is a Hotel Booking Site with an integrated restaurant page, developed using React, Tailwind CSS, and React Router. Explore available rooms, make reservations, and find information about the hotel\'s restaurants.',
        url: 'https://azure-waves.onrender.com/',
        codeUrl: 'https://github.com/mahm0udsaad/Stars-Hotel'
      },
      {
        image: 'src/assets/weather.png',
        name: 'Weather App',
        description: 'Welcome to WeatherApp! This user-friendly weather application provides real-time weather information for any location in the world. With an easy-to-use interface and web-based location access, WeatherApp allows you to quickly check current weather conditions, temperature, humidity, wind speed, and more.',
        url: 'https://weather-app-ykqq.onrender.com/',
        codeUrl: 'https://github.com/mahm0udsaad/weather-app'
      },
      {
        image: 'src/assets/todo.png',
        name: 'Todo App',
        description: 'Welcome to the Todo App! This is a simple task manager built using HTML, CSS, and JavaScript. Add, delete, and edit tasks with ease. The app utilizes LocalStorage to save your tasks even after you close the browser.',
        url: 'https://todoapp-ebmi.onrender.com/',
        codeUrl: 'https://github.com/mahm0udsaad/todo-app'
      }
    ]);
    
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
        {selectedProject ? <button className="hover:opacity-50 absolute top-0 left-5 " onClick={initialProjects}><i class="fa-3x fa-regular fa-circle-left"></i></button> : ''}
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