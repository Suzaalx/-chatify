import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"

export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();


        const auth = auth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <div className="formContainer bg-[#384d8e] h-[100vh] flex items-center justify-center">
    <div className="formWrapper bg-white py-5 px-20 flex flex-col gap-2 items-center rounded-xl">
        <span className="logo text-[#5d5b84] text-2xl font-bold">Chatify</span>
        <span className="title text-[#5d5b8d] text-sm">login</span>
        <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
            
            <input className="p-3 border-b-2 border-b-gray-100" type="email" placeholder="email" name="" id="" />
            <input className="p-3 border-b-2 border-b-gray-100" type="password" placeholder="password" name="" id="" />
           
            <button className="bg-[#374882] rounded-xl text-white p-2 font-bold cursor-pointer" type="submit">Login</button>
        </form>
        <span className="link">Don't have an account? Register</span>
    </div>
</div>
    )
    }
    