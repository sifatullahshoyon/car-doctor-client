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
        return signInWithPopup(auth , GoogleProvider);
    };

    // Auth Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            console.log('currentUser' , currentUser);
            setLoading(false);
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