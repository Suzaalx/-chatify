import React, {useState} from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import {v4 as uuid} from "uuid";
import { storage } from "../firebase";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db } from "../firebase";
import { ref } from "firebase/storage";
export default function Input() {
    const [ text, setText ] = useState("");
    const [img, setImg] = useState(null);
    const{currentUser}= useContext(AuthContext);
    const {data} = useContext(ChatContext);
    console.log("chatID",data);

    const handleSend = async () => {
        if (img){
            const storageRef= ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log("success");
                    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatID), {
                            messages: arrayUnion({
                                id:uuid(),
                                text,
                                senderId: currentUser.uid,
                                date:Timestamp.now(),
                                img: downloadURL

                            })
                    })
                })
                })

            }
        else{
            await updateDoc(doc(db, "chats", data.chatID), {
                messages: arrayUnion({
                    id:uuid(),
                    text,
                    senderId: currentUser.uid,
                    date:Timestamp.now()


                })

        })
    }
    await updateDoc(doc(db, "userchat", currentUser.uid), {
        [data.chatID + ".lastMessage"]: {
            text,
        },
        [data.chatID + ".date"]: serverTimestamp()
    });
    await updateDoc(doc(db, "userchat", data.user.uid), {
        [data.chatID + ".lastMessage"]: {
            text,
        },
        [data.chatID + ".date"]: serverTimestamp()
    });
    setText("");    
    setImg(null);

    }

    return (
        <div className="input my-4 flex items-center gap-4 justify-center ">
        <div className="send flex items-center gap-2">
            <label htmlFor="file">
            <img className="h-8 w-8 cursor-pointer" src="https://img.icons8.com/ios/50/000000/attach.png" alt="attach" />
            </label>
            <input type="file" id="file" className="hidden" onChange={e=>setImg(e.target.files[0])}/>

        </div>
        <div className=" flex items-center gap-4 ">
            <input type="text"  placeholder="Type a message" className=" p-2 w-[62vw] rounded-2xl bg-slate-100" onChange={e=>setText(e.target.value)} value={text}/>
            <button className="bg-[#374882] text-white p-2 rounded-2xl" onClick={handleSend}>Send</button>
        </div>
        </div>
    ) //check the og chatify and change the input size and learn
    }
