import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/navBar";
import Main from "./component/main";
import About from "./component/about";
import Contact from "./component/contact";
import { BrowserRouter as Router , Route ,Routes } from "react-router-dom";
function App() {
  const [goToProjects , setGoToProjects] = useState()
  return (
    <>
        <Navbar  setGoToProjects={setGoToProjects}/>
       <Routes>
         <Route path="/" element={<Main goToProjects={goToProjects} setGoToProjects={setGoToProjects}/>} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
  );
}

export default App;
