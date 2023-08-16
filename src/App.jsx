import { useEffect, useState ,useCallback} from 'react'
import './App.css'
import Navbar from './component/navBar'
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css-3.png';
import jsIcon from './assets/js.png';
import mongodbIcon from './assets/mongodb.svg';
import nodejsIcon from './assets/nodejs.png';
import tailwindIcon from './assets/tailwind-css-svgrepo-com.svg';
import reactIcon from './assets/react.svg';

function App() {
  const intro = `
  Greetings! I'm thrilled to introduce myself
   as a dedicated React Developer, 
   passionate about crafting 
   captivating user experiences
   through code. 🚀`
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goToProjects , setGoToProjects] =useState(false)
  const technologies = [
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'MongoDB', icon: mongodbIcon },
  ];
  useEffect(() => {
    if (currentIndex < intro.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(prev => prev + intro[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 30);
      
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex]);
  const showProjects = () => {
     setGoToProjects(!goToProjects)
  };
  return (
    <>
             <Navbar />
              <div className="h-screen flex flex-col">
                <div
                  style={{
                    height: goToProjects ? '0' : '50%',
                    transition: 'height 0.5s ease',
                  }}
                   className="h-1/2 flex flex-col justify-between">
                  <div className="intro mt-20 w-container mx-auto">
                    <h1 className='italic text-4xl color-blue'>{displayText} {currentIndex < intro.length ? '|' :''}</h1>
                  </div>
                  <ul className='flex z-20 space-x-5 mx-auto w-container my-5'>
                  {technologies.map((tech, index) => (
                    <li key={index}>
                      <img src={tech.icon} alt={tech.name} width="50" height="50" />
                    </li>
                  ))}
                </ul>
                </div>
                <img src="src\assets\24770152_101-removebg-preview.png" className='avatar' alt="" />
                <div
                  style={{
                    background: '#265169',
                    height: goToProjects ? '100vh' : '50%',
                    transition: 'height 0.5s ease'
                  }}
                  className="translate-y-0 ease-out duration-1000 overflow-hidden"
                >
                  <button
                    onClick={showProjects}
                    className="hover:translate-y-5 ease-out duration-300 absolute right-center rotate-90"
                  >
                    <img
                      src="https://img.icons8.com/?size=512&id=115723&format=png"
                      alt=""
                      width="150"
                      height="150"
                    />
                  </button>
                </div>
            </div>
    </>
  )
}

export default App
