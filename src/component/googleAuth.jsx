import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const clientId = '31184692775-flh741b14ktv2rd68tpeqdc4ofpabepg.apps.googleusercontent.com';

function GoogleLoginPage() {
        const [user, setUser] = useState({});
        const [profile, setProfile] = useState({});
      
        useEffect(() => {
          // Load profile data from localStorage on component mount
          const storedProfile = localStorage.getItem('userProfile');
          const profileInfo = JSON.parse(storedProfile)
          if (profileInfo) {
            setProfile(profileInfo);
          }else{
            setProfile(null)
          }
        }, []);
        const handelLogout = () => {
           localStorage.removeItem('userProfile')
           setProfile(null)
        };
        const getInfo = (res) => {
          const decoded = jwtDecode(res.credential);
          const { given_name, family_name, email, picture } = decoded;
          const newProfile = {
            name: given_name +''+family_name,
            email: email,
            picture: picture
          };
          setProfile(newProfile);
          // Store profile data in localStorage
          localStorage.setItem('userProfile', JSON.stringify(newProfile));
        };
      
        return (
          <>
            <h1>Login with Google</h1>
            {profile ? (
              <div className='block h-full w-4/5'>
                <h2>Welcome, {profile.name}</h2>
                <p>Email: {profile.email}</p>
                <img className='w-full' src={profile.picture} alt="User Profile" />
                <div>
                <button onClick={handelLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <GoogleOAuthProvider clientId={clientId}>
                <Google onSuccess={getInfo} />
              </GoogleOAuthProvider>
            )}
          </>
        );

}

export default GoogleLoginPage;