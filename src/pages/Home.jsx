// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";

import Sidebar from "../components/sidebar";

import Chatbar from "../components/Chatbar";


export default function Home() {
    
    return (
        <div className="home h-[100vh] w-[100vw] p-0 flex items-center justify-center ">
        
            <div className="w-[100vw] h-full flex ">
            <Sidebar/>
            <div className="w-full md:w-4/5 md:block hidden">

            <Chatbar/>
            </div>
            
            </div>

        
        </div>
    )
    }
