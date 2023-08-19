import { useEffect, useState } from "react";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import jsIcon from "../assets/js.png";
import mongodbIcon from "../assets/mongodb.svg";
import nodejsIcon from "../assets/nodejs.png";
import tailwindIcon from "../assets/tailwind-css-svgrepo-com.svg";
import reactIcon from "../assets/react.svg";
import Projects from "./projects";
import "../App.css";

function Main({ goToProjects , setGoToProjects}) {
  const intro = `Hello, I'm excited to present myself
  as a committed React Developer, 
  driven by a deep passion for creating
  compelling user experiences
  through innovative code. Let's build something great together! 🚀`;
   const [introComplete, setIntroComplete] = useState(false);
   const [showTechnologies, setShowTechnologies] = useState(false);
   const [selectedProject , setSelectedProject] = useState(null)
   const [currentTechIndex, setCurrentTechIndex] = useState(0);
   const [removeTechIndex, setRemoveTechIndex] = useState(0);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [displayText, setDisplayText] = useState("");
   const [projects, setProjects] = useState([
    {
      image: 'https://i.imgur.com/TwVuEQp.png',
      name: 'Ecommerce site',
      description: 'Welcome to the Ecommerce site! This project showcases an online shopping platform built using React and Tailwind CSS. Users can explore a variety of products, add them to the cart, and proceed to checkout. The site offers a seamless shopping experience with a user-friendly interface.',
      url: 'https://e-commerce-ebn2.onrender.com/',
      codeUrl: 'https://github.com/mahm0udsaad/E_Commerce'
    },
    {
      image: 'https://i.imgur.com/KpwHJTm.png',
      name: 'Property Finder Clone',
      description: "Welcome to the Property Finder Clone! This is the client-side repository of the app, developed using React, Tailwind CSS, and communicating with the backend built on Express.js and MongoDB. Explore property listings, search for your dream home, and find all the details you need.",
      url: 'https://property-finder-8ixf.onrender.com/',
      codeUrl: 'https://github.com/mahm0udsaad/property_finder'
    },
    {
      image: 'https://i.imgur.com/b9LZRJG.png',
      name: 'Hotel Booking Site',
      description: 'Welcome to the Hotel Booking Site with Restaurants Page! This project is a Hotel Booking Site with an integrated restaurant page, developed using React, Tailwind CSS, and React Router. Explore available rooms, make reservations, and find information about the hotel\'s restaurants.',
      url: 'https://azure-waves.onrender.com/',
      codeUrl: 'https://github.com/mahm0udsaad/Stars-Hotel'
    },
    {
      image: 'https://i.imgur.com/RaxVbvY.png',
      name: 'Weather App',
      description: 'Welcome to WeatherApp! This user-friendly weather application provides real-time weather information for any location in the world. With an easy-to-use interface and web-based location access, WeatherApp allows you to quickly check current weather conditions, temperature, humidity, wind speed, and more.',
      url: 'https://weather-app-ykqq.onrender.com/',
      codeUrl: 'https://github.com/mahm0udsaad/weather-app'
    },
    {
      image: 'https://i.imgur.com/bUUhCEq.png',
      name: 'Todo App',
      description: 'Welcome to the Todo App! This is a simple task manager built using HTML, CSS, and JavaScript. Add, delete, and edit tasks with ease. The app utilizes LocalStorage to save your tasks even after you close the browser.',
      url: 'https://todoapp-ebmi.onrender.com/',
      codeUrl: 'https://github.com/mahm0udsaad/todo-app'
    }
  ]);
  
   const technologies = [
    { name: "HTML5", iconClass: "fab fa-html5", color: "#E34F26" },
    { name: "CSS3", iconClass: "fab fa-css3-alt", color: "#1572B6" },
    { name: "JavaScript", iconClass: "fab fa-js", color: "#F7DF1E" },
    { name: "React", iconClass: "fab fa-react", color: "#61DAFB" },
    { name: "Node.js", iconClass: "fab fa-node-js", color: "#339933" },
    { name: "MongoDB", iconClass: "fas fa-database", color: "#47A248" },
  ];

  useEffect(() => {
    if (!introComplete && currentIndex < intro.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + intro[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 5);

      return () => clearTimeout(timeoutId);
    } else if (currentIndex === intro.length) {
      setIntroComplete(true);
    }
  }, [currentIndex, introComplete]);

  useEffect(() => {
    if (introComplete && currentTechIndex < technologies.length) {
      const showTechs = setTimeout(() => {
        setCurrentTechIndex(prev => prev + 1);
      }, 70);

      return () => clearTimeout(showTechs);
    }
  }, [introComplete, currentTechIndex]);
  useEffect(()=>{
    if(goToProjects && removeTechIndex <= 0){
      const removeTime = setTimeout(()=>{
        setRemoveTechIndex(prev => prev - 1)
      },30)
      return ()=> clearTimeout(removeTime)
    }
  },[goToProjects, removeTechIndex])
  const showProjects = () => {
    setGoToProjects(!goToProjects);
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div
          style={{
            height: goToProjects ? "0" : "55%",
            transition: "height 0.5s ease",
          }}
          className="flex flex-col justify-between"
        >
          <div className="intro mt-16 lg:mt-25  lg:mt-12 w-container mx-auto">
            <p className="italic text-2xl lg:text-4xl color-blue">
              {displayText} {currentIndex < intro.length ? "|" : ""}
            </p>
          </div>
          {introComplete && currentIndex > 0 ? (
              <ul className="techList flex z-20 space-x-5 lg:space-x-8 res mx-2 lg:mx-auto w-container my-5">
                {technologies
                  .slice(0, goToProjects ? removeTechIndex : currentTechIndex + 1)
                  .map((tech, index) => (
                    <li className="showTech ease-in duration-300 "  key={index}>
                      <span
                        className="icon"
                        style={{ color: tech.color }}
                      >
                        <i className={`lg:text-5xl text-2xl ${tech.iconClass}`}></i>
                      </span>
                    </li>
                  ))}
              </ul>
            ) : null}
              <img
                style={{
                  transform: goToProjects ? "translatex(200%)" : "var(--avatar-right)",
                  transition:"0.5s ease"
                }}
                  src="https://i.imgur.com/J9fpajk.png"
                  className="avatar showAvatar"
                  alt=""
                />
        </div>
        <div
          style={{
            background: "#265169",
            height: goToProjects ? "100vh" : "50%",
            transition: "height 0.5s ease",
          }}
          className="translate-y-0 ease-out duration-1000 overflow-hidden"
        >
           <button
            onClick={showProjects}
            style={{
              transition:'.5s',
              transform: introComplete ? '' : 'translatey(-300%)',
                display:selectedProject ? 'none':'block'
            }}
            className={goToProjects ? "z-60 translate-x-10 lg:translate-x-0 right-20 top-5 rotate-90 absolute top-1":"hover:translate-y-5 mb-10 ease-out duration-300 absolute top-0 inset-2/4 rotate-90 lg:-translate-x-5 "} 
          >
            <i
            className={`fa ${
              goToProjects ? "fa-arrow-left" : "fa-arrow-right"
            }`}
            style={{
              fontSize: goToProjects ? "40px" : "90px",
              color: "#ffff", 
            }}
          ></i>
          </button>
          {goToProjects && <Projects projects={projects} setSelectedProject={setSelectedProject} selectedProject={selectedProject} goToProjects={goToProjects}/>}
            <h1 style={{
              transition:'.5s',
              transform: introComplete ? 'translatey(0)' : 'translatey(300%)'
            }} className={goToProjects?'hidden':"right-center absolute  text-white text-5xl"}>Projects</h1>
        </div>
      </div>
    </>
  );
}

export default Main;
