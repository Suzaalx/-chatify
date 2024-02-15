import React,{useEffect, useState} from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
export default function Sidebar() {
    // const [showSidebar, setShowSidebar] = useState(true);
    
    // const handelShowSidebar = () => {
    //     setShowSidebar(!showSidebar);
    // }
    // useEffect(() => {
    //     const handleResize = () => {
    //         if(window.innerWidth < 768){
    //             setShowSidebar(false);
    //         }else{
    //             setShowSidebar(true);
    //         }
    //     };
    //     handleResize();

    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [])
    return (
        
        <div className="sidebar px-2 w-full md:w-1/4 md:px-4 border-r-2">
        <Navbar/>
        <Search/>
        <Chats/>
        </div>
    )
}