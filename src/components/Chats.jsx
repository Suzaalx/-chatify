import { onSnapshot, doc } from "firebase/firestore";
import React,{useState, useEffect} from "react";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { ChatContext } from "../context/ChatContext";
export default function Chats( ) {
    const [messages, setMessages] = useState([]);
    const {currentUser} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);
    useEffect(() => {
        const getMessages = () => {
            const unsub = onSnapshot(doc(db, "userchat", currentUser.uid), (doc) => {
                setMessages(doc.data());
                console.log(doc.data());
            }
            );
            return unsub;
        };
        currentUser.uid && getMessages();
 
    }, [currentUser.uid])
    const handleSelect = (user) => {
        dispatch({type:"CHANGE_USER", payload: user})
        console.log("user",user);
    }
    console.log("aaaa",Object.entries(messages));
    return (


        <div className="overflow-y-auto max-h-[calc(100vh-120px)]">
        {Object.entries(messages)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
            <div key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)} className="flex items-center cursor-pointer p-2 hover:bg-gray-100 rounded-md">
                <div className="flex-shrink-0">
                    <img src={chat[1].userInfo?.photoURL} alt="user" className="w-8 h-8 rounded-full object-cover" />
                </div>
                <div className="ml-2">
                    <h3 className="text-sm font-semibold">{chat[1].userInfo?.displayName}</h3>
                    <p className="text-sm text-gray-600 truncate">{chat[1].lastMessage?.text}</p>
                </div>
            </div>
        ))}
    </div>
    
      
    )
}