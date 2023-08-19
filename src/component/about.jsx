import { useState,useEffect } from "react";
const About = () => {
    const intro = `
    My name is Mahmoud Saad, a determined individual of 22 years, currently in my fourth year at Helwan University's Faculty of Commerce. Despite my studies in business, I have embarked on a transformative journey to pursue a career in programming and web development. In the midst of the challenging year that was 2019, I took the initiative to delve into the world of web development, and my passion for creating dynamic digital experiences has only grown stronger since. Although my previous work experiences have been in different fields, they have equipped me with invaluable skills that I believe will complement my aspirations as a web developer. I am driven by a desire to continually expand my knowledge and expertise in this ever-evolving field, and I am eagerly looking forward to contributing my creativity and dedication to the world of web development.`;
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
        <div className=" h-2/1 lg:h-3/5 mx-auto mt-0 w-11/12 block text-center">
          <h1 className="text-5xl">About me</h1>
          <div className="mt-5 flex justify-start text-start">
            <h1 className="lg:text-2xl overflow-auto text-start">
              {displayText}
              {currentIndex < intro.length ? '|' : ''}
            </h1>
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