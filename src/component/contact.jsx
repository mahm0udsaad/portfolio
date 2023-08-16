import { useEffect, useState } from "react";
import GoogleLoginPage from "./googleAuth";
import Form from "./form";

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const [user , setUser] = useState({})
    useEffect(()=>{
        const storedProfile = localStorage.getItem('userProfile');
        setUser(JSON.parse(storedProfile))
        },[])
        useEffect(()=>{
            if (user) {
                setFormData({
                  name: user.name || '',
                  email: user.email || '',
                  message: '',
                });
              }
        },[user])
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // For demonstration purposes, log the form data to the console
          console.log('Form data submitted:', formData);
          // Here you can add your logic for sending the email using an API or service
        };
    return ( 
        <div style={{background: 'rgb(241 241 241)',color:'#265169'}} className="h-full absolute top-20 w-full flex justify-center">
            <div className="mx-auto mt-5 w-11/12 flex flex-col justify-center">
             <div className="h-full text-center">
             <h1 className="text-4xl">Send me an Email</h1>
             {user ? 
            <div>
                  <h1>Welcome {user.name}</h1>
                  <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
             :<GoogleLoginPage />}
             </div>
            </div>
        </div>
     );
}
 
export default Contact;