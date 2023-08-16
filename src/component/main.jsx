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
  const intro = `
  Greetings! I'm thrilled to introduce myself
   as a dedicated React Developer, 
   passionate about crafting 
   captivating user experiences
   through code. 🚀`;
   const [introComplete, setIntroComplete] = useState(false);
   const [showTechnologies, setShowTechnologies] = useState(false);
   const [selectedProject , setSelectedProject] = useState(null)
   const [currentTechIndex, setCurrentTechIndex] = useState(0);
   const [removeTechIndex, setRemoveTechIndex] = useState(0);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [displayText, setDisplayText] = useState("");

  const technologies = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "MongoDB", icon: mongodbIcon },
  ];
  const handleUnclickableDivClick = (event) => {
    event.stopPropagation();
  };
  useEffect(() => {
    if (!introComplete && currentIndex < intro.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + intro[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 30);

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
            height: goToProjects ? "0" : "50%",
            transition: "height 0.5s ease",
          }}
          className="h-1/2 flex flex-col justify-between"
        >
          <div className="intro mt-20 lg:mt-25  mt-12 w-container mx-auto">
            <h1 className="italic text-2xl lg:text-4xl color-blue">
              {displayText} {currentIndex < intro.length ? "|" : ""}
            </h1>
          </div>
          <ul className="flex z-20 space-x-5 res mx-2 lg:mx-auto w-container my-5">
            {introComplete && currentIndex > 0 ? technologies.slice(0, goToProjects ?  removeTechIndex :currentTechIndex + 1).map((tech, index) => (
                  <li className="showTech ease-in duration-3000" key={index}>
                    <img src={tech.icon} alt={tech.name} width="50" height="50" />
                  </li>
                )):('')}
          </ul>
        </div>
        <img
        onClick={handleUnclickableDivClick}
         style={{
          transform: goToProjects ? "translatex(200%)" : "var(--avatar-right)",
          transition:"0.5s ease"
        }}
          src="src\assets\24770152_101-removebg-preview.png"
          className="avatar showAvatar"
          alt=""
        />
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
                display:selectedProject ? 'none':'block'
            }}
            className={goToProjects ? "ease-out duration-300 top-center-btn -rotate-90 absolute right-center":"hover:translate-y-5 mb-10 ease-out duration-300 absolute right-center rotate-90"} 
          >
            <img
              src="https://img.icons8.com/?size=512&id=115723&format=png"
              alt=""
              width={goToProjects ? "70":"150"}
              height={goToProjects ? "70":"150"}
            />
          </button>
          {goToProjects && <Projects setSelectedProject={setSelectedProject} selectedProject={selectedProject} goToProjects={goToProjects}/>}
            <h1 className={goToProjects?'hidden':"right-center absolute  text-white text-5xl"}>Projects</h1>
        </div>
      </div>
    </>
  );
}

export default Main;
