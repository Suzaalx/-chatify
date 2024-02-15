import React from "react";
import Messages from "./Messages";
import Input from "./Input";

export default function Chatbar({message}) {
    return (
        <div className="chat ">
        <div className="chatInfo border-b-2 py-4">
            <span>Jane</span>
            <div className="chatIcons">
 
            </div>
        </div>
        <Messages message={message}/>
        <Input/>
        </div>
    )
}