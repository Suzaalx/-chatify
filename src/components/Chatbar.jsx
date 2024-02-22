import React ,{useContext}from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chatbar(){
    const {data} = useContext(ChatContext);
    return (
        <div className="chat ">
        <div className="chatInfo border-b-2 py-4">
            <span>{data.user?.displayName}</span>
            <div className="chatIcons">
 
            </div>
        </div>
        <Messages/>
        <Input/>
        
        </div>
    )
}