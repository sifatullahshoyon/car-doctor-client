import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../utilities/firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email , password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // signIn with google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth , GoogleProvider);
    };

    // Auth Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            console.log('currentUser' , currentUser);
            setLoading(false);
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email
                  };
                fetch('https://car-doctor-server-fsb7a2nc5-sifat-ullah-shoyons-projects.vercel.app/jwt' , {
                    method : 'POST',
                    headers : {
                      'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify( loggedUser)
                  })
                  .then(res => res.json())
                  .then(data => {
                    console.log(('jwt response') ,data);
                    // warning : Local storage is the not best (second best place) to store access token
                    localStorage.setItem('car-access-token' , data.token)
                    
                  })
            }
            else{
                localStorage.removeItem('car-access-token');
            }
        });
        return () => {
            unsubscribe();
        };
    } , []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin
    };
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;