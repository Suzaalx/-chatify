import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); // It's better to start with null for an uninitialized user
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            console.log(user);

        });

        return () => unsubscribe(); // Clean up the subscription on unmount
    }, []);


    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
// The AuthContext.js file exports the AuthContext and AuthProvider.
// The AuthContext is created using the createContext() function from React.
// The AuthProvider is a component that provides the authentication state to the entire application.
// It uses the onAuthStateChanged() function from Firebase to monitor the authentication state change.
// The currentUser state is updated with the user object or null if the user is not authenticated.
// The AuthProvider component wraps the entire application in the main.jsx file, so the authentication state is available to all components in the app.
