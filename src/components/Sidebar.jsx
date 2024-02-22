import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
export default function Sidebar( {openModal}) {
    
    return (
        
        <div className="sidebar px-2 w-full md:w-1/4 md:px-4 border-r-2">
        <Navbar openModal={openModal}/>
        
        <Chats/>
        </div>
    )
}