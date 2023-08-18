import { useEffect, useState } from "react";
import GoogleLoginPage from "./googleAuth";
import axios from "axios";
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
          console.log(formData);
          axios.post('https://my-portfolio-fci7.onrender.com/sendEmail', formData)
            .then(response => {
              console.log('Response:', response.data);
            })
            .catch(error => {
              console.error('Error:', error);
            });
        };
    return ( 
      <div style={{ background: 'rgb(241 241 241)', color: '#265169' }} className="h-screen w-full overflow-hidden">
        <div
                className="h-full absolute top-20 w-full flex justify-center"
              >
           <div className="mx-auto mt-5 w-11/12 flex flex-col justify-center">
             <div className="h-full text-center">
             <h1 className="text-4xl">Send me an Email</h1>
             {user ? 
            <div>
                  <h1>Welcome {user.name}</h1>
                  <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
             :
             <GoogleLoginPage />
             }
             </div>
            </div>
           </div>
        </div>
     );
}
 
export default Contact;