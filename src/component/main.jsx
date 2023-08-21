import { useEffect, useState } from "react";
import Projects from "./projects";
import "../App.css";
import {motion} from 'framer-motion'
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
   const [imgCalss , setImgClass] =useState('');
   const [projects, setProjects] = useState([
    {
      image: "https://i.imgur.com/gmRlxLF.png",
      name: "Quiz App",
      description: "Welcome to the Quiz App! This application is a fun and interactive platform for testing your knowledge across various topics. Built using React, Tailwind CSS, and enhanced with smooth animations using Framer Motion, the Quiz App provides an engaging experience for users to challenge themselves. The backend of the app is powered by Express.js and MongoDB, ensuring seamless data storage and retrieval for a wide range of quiz questions. Whether you're looking to learn something new or simply have a good time, the Quiz App offers a dynamic way to explore and enhance your knowledge.",
      url: "https://quiz-app-0f8i.onrender.com/",
      codeUrl: "https://github.com/mahm0udsaad/test-app"
    },
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
    if (introComplete && currentTechIndex < technologies.length && !goToProjects) {
      const showTechs = setTimeout(() => {
        setCurrentTechIndex(prev => prev + 1);
      }, 70);

      return () => clearTimeout(showTechs);
    }
  }, [introComplete, currentTechIndex ,goToProjects]);

  const showProjects = () => {
    if(!goToProjects){
      setGoToProjects(true);
    }
    console.log(goToProjects);

  };
  const closeProjects = () => {
    if(goToProjects){
      setGoToProjects(false);
    }
    console.log(goToProjects);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div
          style={{
            height: goToProjects ? "0%" : "55%",
            transition: "height 0.5s ease",
          }}
          className={goToProjects?"top-section flex flex-col justify-between relative":"flex flex-col justify-between relative"}
        >
          <div className="intro mt-5 md:mt-16 lg:mt-25  lg:mt-12 w-container ml-5 md:ml-10 lg:mx-auto">
            <p className="italic text-xl md:text-3xl lg:text-4xl color-blue">
              {displayText} {currentIndex < intro.length ? "|" : ""}
            </p>
          </div>
         <motion.dev 
          initial={{x:100}}
          animate={{x:goToProjects? '200%' : 30 }}
          transition={{ duration: .5}}
          className={`z-50 avatar rounded`}
         >
             <img
                className="lg:rounded md:rounded rounded-full"
                src="https://i.imgur.com/YsQfNrE.png"
                alt="photo"
                />
         </motion.dev>
          {!goToProjects && introComplete && currentIndex > 0 ? (
              <ul className="techList flex  z-20 space-x-5 md:space-x-8 lg:space-x-8 res mx-2 sm:mx-auto w-container lg:my-5">
                {technologies
                  .slice(0, currentTechIndex + 1)
                  .map((tech, index) => (
                    <motion.li
                     initial={{opacity:0}}
                     animate={{opacity:1}}
                    className="showTech ease-in duration-300 "  key={index}>
                      <span
                        className="icon"
                        style={{ color: tech.color }}
                      >
                        <i className={`lg:text-5xl md:text-4xl text-3xl ${tech.iconClass}`}></i>
                      </span>
                    </motion.li>
                  ))}
              </ul>
            ) : null}
        </div>
        <div
          onClick={showProjects}
          style={{
            background: "#265169",
            height: goToProjects ? "100vh" : "50%",
            transition: "height 0.5s ease",
          }}
          className={goToProjects?'bottom-section-active z-50':"translate-y-0 ease-out duration-1000 bottom-section"}
        >
           <button
            onClick={closeProjects}
            style={{
              transition:'.5s',
              transform: introComplete ? '' : 'translatey(-80%)',
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
            }} className={goToProjects?'hidden':"right-center absolute  text-white text-2xl md:text-4xl lg:text-5xl"}>Projects</h1>
        </div>
      </div>
    </>
  );
}

export default Main;
