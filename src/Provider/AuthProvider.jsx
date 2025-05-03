

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext,useEffect,useState } from 'react';
import { auth } from '../Firebase/firebase.config';


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    // console.log(loading, user);
    // creating user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // sign in
    const signIn =(email,password)=>{
        setLoading(true);
        return  signInWithEmailAndPassword(auth,email,password);
    }

    
    const updateUser=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData);
    }


    // log out
    const logout=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    },[])
    const authData ={
        user,
        setUser,
        createUser,
        logout,
        signIn,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;