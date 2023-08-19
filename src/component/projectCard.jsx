import React, { useState ,useEffect} from 'react';

const ProjectCard = ({ tech, index ,showCardDetails ,isItSelected  ,dimension}) => {
    const [onHover , setHover] = useState(false)
    const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = Array.from(
      document.querySelectorAll(".project-card img")
    );

    const handleImageLoad = () => {
      setImagesLoaded(true);
    };

    imageElements.forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    return () => {
      imageElements.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);
    const hoverd =()=>{
        isItSelected ? setHover(true) : null
    }
    const leaveHover =()=>{
        isItSelected ? setHover(false) : null
    }
  return (
    <>
      <div onMouseMove={hoverd} onMouseLeave={leaveHover} onClick={showCardDetails} className={isItSelected ? 'flex justify-center w-11/12 my-10 mx-auto relative cursor-pointer ' :`${imagesLoaded ? "loaded":"loading"} cursor-pointer relative w-full flex flex-col justify-center relative`} key={index}>
        {onHover ? ( 
                <div  className={onHover ? 'mx-auto w-full lg:w-6/12 z-40 ease-in duration-600 bg-black/50 h-full  absolute  z-60 flex flex-col justify-center w-6/12 mx-auto':" h-full  absolute project-links z-60 flex flex-col justify-center"}>
                 <div className=" items-center flex justify-around">
                 <a className='z-50 bg-green-700  hover:bg-green-500 rounded px-3 py-3 text-lg ease-in duration-300' href={tech.url} target="_blank" rel="noopener noreferrer">
                Live
                </a>
                <a href={tech.codeUrl} target="_blank" rel="noopener noreferrer">
                <i className="fa-3x fab fa-github hover:text-green-700 ease-in duration-300"></i>
                </a>
                 </div>
             </div>):('')}
            <img   className={isItSelected ? 'mx-auto lg:w-6/12':'mx-auto w-full z-30 ease-in duration-300 lg:w-11/12'} src={tech.image} alt={tech.name} width={dimension} height={dimension} />
         </div>
            <div className={isItSelected ? "flex justify-center h-60 overflow-auto mx-5 w-full h-2/4":'hidden'}>
             <p className='lg:text-2xl lg:w-6/12 mx-auto text-xl'>{tech.description}</p>
            </div>
    </>
  );
};

export default ProjectCard;
