// eslint-disable-next-line no-unused-vars
import React from "react";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";


export default function Home() {
    return (
        <div className="home h-[100vh] flex items-center justify-center bg-[#324a63] ">
            <div className=" container border-2 w-5/6 h-4/5 flex ">
            <Sidebar className=" flex"/>
            <Chat />

            </div>

        
        </div>
    )
    }
