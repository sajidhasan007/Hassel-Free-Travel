//import React, { createContext } from 'react';
import { createContext } from 'react';
import UseFirebase from '../Hooks/usefirebase';
//import UseFirebase from '../Hooks/usefirebase';
// import UseFirebase from '../UseFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = UseFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;