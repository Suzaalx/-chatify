import React from "react";
import { Link } from "react-router-dom";

export default function Chats( ) {
    return (
        <div className="chats">
        <div className="userchat p-2 flex items-center gap-2 text-white cursor-pointer border-none hover:bg-[#2f2d52]">
            <div className="userchat_img">
            <img src="https://via.placeholder.com/150" alt="user" className=" object-cover w-10 h-10 rounded-full"/>
            </div>
            
            <div className="userchat_info "  >
            <Link to= {`/chat`}>
            <h3 className=" text-xl font-semibold text-gray-100">Username</h3>
            <p className=" text-sm font-light">Message</p>
            </Link>
            </div>
            
        </div>
        </div> 
    )
}