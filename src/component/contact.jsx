import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from "axios";
import Form from "./form";
import jwtDecode from 'jwt-decode';
import Google from './google';


const Contact = () => {
  const [profile, setProfile] = useState(null);
  const [isSubmited, setIsSubmited] =useState(false)
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    const clientId ="31184692775-1ita8021mqdom1jktgk1t369j3uk6jj4.apps.googleusercontent.com"

    const getInfo = (res) => {
      const decoded = jwtDecode(res.credential);
      const { given_name, family_name, email, picture } = decoded;
      const newProfile = {
        name: given_name + family_name,
        email: email,
        picture: picture
      };
      setProfile(newProfile);
      // Store profile data in localStorage
      localStorage.setItem('userProfile', JSON.stringify(newProfile));
    };
    useEffect(() => {
        setFormData({
          ...formData, // Preserve the existing values
          name:profile ?  profile.name :'',
          email: profile ? profile.email :'',
        });
    }, [profile]);

        const handleChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          axios.post('https://my-portfolio-fci7.onrender.com/sendEmail', formData)
            .then(response => {
              setIsSubmited(true)
            })
            .catch(error => {
              console.error('Server Error:', error);
            });
        };

    return ( 
      <div style={{ background: 'rgb(241 241 241)', color: '#265169' }} className="h-screen w-full overflow-hidden">
        <div
                className="h-full absolute top-20 w-full flex justify-center"
              >
           <div className="mx-auto mt-5 w-11/12 flex flex-col justify-center">
             <div className="h-full text-center">
             {isSubmited ? (
                  <h1>done</h1>
                ) : (
                  <div>
                    <h1 className="text-4xl">Send me an Email</h1>
                    {profile ? (
                      <div>
                        <h1>Welcome {profile.name}</h1>
                        <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                      </div>
                    ) : (
                      <GoogleOAuthProvider clientId={clientId}>
                        <Google onSuccess={getInfo} />
                      </GoogleOAuthProvider>
                    )}
                  </div>
                )}

             </div>
            </div>
           </div>
        </div>
     );
}
 
export default Contact;