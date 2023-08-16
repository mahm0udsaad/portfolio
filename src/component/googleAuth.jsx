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
              <GoogleOAuthProvider clientId={clientId}>
                <Google onSuccess={getInfo} />
              </GoogleOAuthProvider>
          </>
        );

}

export default GoogleLoginPage;