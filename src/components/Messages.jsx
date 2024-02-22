import React,{useEffect, useState, useContext} from "react";
import RightMessage from "./RightMessage";
import LeftMessage from "./LeftMessage";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";


export default function Messages({}) {
    const [messages, setMessages] = useState([]);
    const {data} = useContext(ChatContext);
    const {currentUser} = useContext(AuthContext);

    console.log(data);

    useEffect(() => {
        if (!data.chatID) return; // Early return if data.chatId is not set
        console.log("data.chatId", data);
        const unSub = onSnapshot(doc(db,"chats",data.chatID), (doc) => {
            doc.exists() && setMessages(doc.data().messages);

        });
    
        return () => unSub();
    }, [data.chatID]);
    console.log("m",messages);
    console.log("c",currentUser);
    
    


    return (
        <div className="messages overflow-y-auto bg-[#e9e9e9] p-2 h-[86vh] ">
    
        {messages.map((message) => {
            console.log("message",message);
            return message.senderId === currentUser.uid ? <RightMessage key={message.id} message={message.text}/> : <LeftMessage key={message.id} message={message.text}/>
        })
        }

        
        </div>
    )
}