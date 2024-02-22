import { signOut } from "firebase/auth";
import React,{useContext} from "react";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

export default function Navbar({openModal}) {
    const {currentUser} = useContext(AuthContext);
    return (
        <div className="flex items-center h-12 p-2 justify-between bg-blue-500 text-white">
        <span className="font-bold">Chatify</span>
        <div className="flex items-center gap-2">
            <img src={currentUser.photoURL} alt="user" className="h-6 w-6 rounded-full"/>
            <span className="text-sm">{currentUser.displayName}</span>
            <button onClick={openModal} className="text-blue-200 hover:text-blue-100">+</button>
            <button onClick={() => signOut(auth)} className="text-sm py-1 px-2 rounded bg-yellow-400 text-black hover:bg-yellow-500">Logout</button>
        </div>
    </div>
    
    )
}