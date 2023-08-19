import React, { useState } from 'react';

const ProjectCard = ({ tech, index ,showCardDetails ,isItSelected  ,dimension}) => {
    const [onHover , setHover] = useState(false)
    const hoverd =()=>{
        isItSelected ? setHover(true) : null
    }
    const leaveHover =()=>{
        isItSelected ? setHover(false) : null
    }
  return (
    <>
      <div onMouseMove={hoverd} onMouseLeave={leaveHover} onClick={showCardDetails} className={isItSelected ? 'w-11/12 my-10 mx-auto relative cursor-pointer w-1/2' :'cursor-pointer relative showTech project-card flex flex-col justify-center relative'} key={index}>
        {onHover ? ( 
                <div className={onHover ? 'ease-in duration-600 bg-black/50 w-full h-full  absolute project-links z-60 flex flex-col justify-center':" w-full h-full  absolute project-links z-60 flex flex-col justify-center"}>
                 <div className=" item-center flex justify-around">
                 <a className='z-50 bg-green-700  hover:bg-green-500 rounded px-3 py-3 text-lg ease-in duration-300' href={tech.url} target="_blank" rel="noopener noreferrer">
                Live
                </a>
                <a href={tech.codeUrl} target="_blank" rel="noopener noreferrer">
                <i className="fa-3x fab fa-github hover:text-green-700 ease-in duration-300"></i>
                </a>
                 </div>
             </div>):('')}
            <img  className='z-30 ease-in duration-300' src={tech.image} alt={tech.name} width={dimension} height={dimension} />
         </div>
            <div className={isItSelected ? "h-60 overflow-auto mx-5 h-2/4":'hidden'}>
             <p className='lg:text-2xl text-xl'>{tech.description}</p>
            </div>
    </>
  );
};

export default ProjectCard;
