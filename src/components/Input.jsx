import React from "react";

export default function Input() {
    return (
        <div className="input my-4 flex items-center gap-4 justify-center ">
        <div className="send flex items-center gap-2">
            <img className="h-8 w-8 cursor-pointer" src="https://img.icons8.com/ios/50/000000/attach.png" alt="attach" />
            <img className=" h-8 w-8 cursor-pointer" src="https://img.icons8.com/ios/50/000000/emojis.png" alt="emoji" />
            <img className="h-8 w-8 cursor-pointer" src="https://img.icons8.com/ios/50/000000/gallery.png" alt="microphone" />
        </div>
        <div className=" flex items-center gap-4 ">
            <input type="text"  placeholder="Type a message" className=" p-2 w-[62vw] text-white rounded-2xl bg-slate-100" />
            <button className="bg-[#374882] text-white p-2 rounded-2xl">Send</button>
        </div>
        </div>
    ) //check the og chatify and change the input size and learn
    }