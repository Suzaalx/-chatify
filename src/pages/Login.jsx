import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Login() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Function to handle sign-in with Google
    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const res = await signInWithPopup(auth, provider);
            const user = res.user;
            // Update user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                name: user.displayName.toUpperCase(),
                email: user.email,
                profilePic: user.photoURL
            }, { merge: true }); // Use merge option to update or set new data

            await setDoc(doc(db, "userchat", user.uid), {})

            navigate("/"); // Navigate to dashboard or home page after login
        } catch (error) {
            console.error(error);
            setError(error.message); // Display error message to the user
        }
    };

    // Effect hook to monitor authentication state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/"); // Redirect to dashboard if already logged in
            }
            // User is signed out
            // Handle session ending or redirect to login page if necessary
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, [navigate]);

    return (
        <div className="h-screen flex justify-center items-center bg-[#384d8e]">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Welcome to Chatify</h2>
                {error && <p className="text-red-500">{error}</p>}
                <button onClick={handleSignIn} className="bg-[#374882] rounded-xl text-white px-4 py-2 font-bold cursor-pointer">
                    Login with Google
                </button>
            </div>
        </div>
    );
}

    