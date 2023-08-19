import { useState,useEffect } from "react";
const About = () => {
    const intro = `
             Hello, I'm Mahmoud Saad, a motivated individual at the age of 22, currently in my fourth year at Helwan University's Faculty of Commerce. While my academic focus is on business, I've embarked on an exciting journey to build a career in programming and web development. Despite the challenges of 2019, I dived into web development, nurturing a growing passion for crafting engaging online experiences.
             My diverse background in various fields has provided me with valuable skills that complement my aspirations as a web developer. As I step into the dynamic world of web development, I'm fueled by a relentless desire to expand my knowledge and expertise. I'm dedicated to staying up-to-date with the rapid changes in this field and eager to bring my creativity and determination to the world of web development.
             Let's connect and collaborate to create impactful digital solutions together.
            .`;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const softSkills = [
        {
          skill: "Adaptability and Flexibility",
          color: "#e3edff" 
           },
        {
          skill: "Effective Communication Skills",
          color: "#94c4f5" 
           },
        {
          skill: "Fast Delivery Time",
          color: "#8999cc" 
          },
        {
          skill: "Ability to Work in Any Time Zone",
          color: "#99abb5" 
          },
        {
          skill: "Problem Solving",
          color: "#c3c0c0" 

        }
        ,{
          skill: "creativity",
          color: "#a4d5c6" 

        }
      ];
    useEffect(() => {
       if ( currentIndex < intro.length) {
         const timeoutId = setTimeout(() => {
           setDisplayText(prev => prev + intro[currentIndex]);
           setCurrentIndex(prevIndex => prevIndex + 1);
         }, 10);
   
         return () => clearTimeout(timeoutId);
       } 
     }, [currentIndex]);
   
    return ( 
        <div style={{ background: 'rgb(241 241 241)', color: '#265169' }} className="h-screen w-full overflow-hidden">
      <div
        className="h-screen absolute top-20 w-full flex justify-center"
      >
        <div className="mx-auto mt-0 w-11/12 block text-center">
          <h1 className="text-5xl">About me</h1>
          <div className="h-[45vh] mt-5 flex justify-start text-start overflow-auto">
            <p className="lg:text-2xl text-start">
              {displayText}
              {currentIndex < intro.length ? '|' : ''}
            </p>
          </div>
          <div className="justify-center fixed bottom-0 left-0 w-full p-3">
            <div className="grid grid-cols-1 mt-5 lg:grid-cols-2 gap-1 overflow-auto max-h-[32vh] lg:max-h-[40vh]">
              {softSkills.map((obj , index) => (
                <div
                  key={index}
                  style={{ backgroundColor: `${obj.color}` }}
                  className="rounded-full lg:text-xl lg:p-5 p-4 lg:p-3 text-center lg:my-1"
                >
                  {obj.skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

     );
}
 
export default About;