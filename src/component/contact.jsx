import { useEffect } from "react";
import GoogleLoginPage from "./googleAuth";

const Contact = () => {
    useEffect(()=>{
        const storedProfile = localStorage.getItem('userProfile');
        console.log(storedProfile);
    },[])
    return ( 
        <div style={{background: 'rgb(241 241 241)',color:'#265169'}} className="h-full absolute top-20 w-full flex justify-center">
            <div className="mx-auto mt-5 w-11/12 flex flex-col justify-center">
             <div className="h-full text-center">
             <h1 className="text-4xl">Send me an Email</h1>
             <GoogleLoginPage />
             </div>
            </div>
        </div>
     );
}
 
export default Contact;