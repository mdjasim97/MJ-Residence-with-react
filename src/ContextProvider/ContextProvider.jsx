import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
// import { GoogleAuthProvider } from 'firebase/auth/cordova';
export const AuthContext = createContext()

const ContextProvider = ({children}) => {

    const [user, setUser] = useState([])
    // const GoogleProvider = new GoogleAuthProvider()


    const handleUserRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleUserSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // const signInwithGoogle = () => {
    //     return signInWithPopup(auth, GoogleProvider)
    // }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log("Current User", currentUser)
            setUser(currentUser)
        })

        return () => unSubcribe()
    },[])

    const authInfo = {user, handleUserRegister, handleUserSignIn, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;