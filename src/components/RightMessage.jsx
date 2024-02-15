import React from "react";

export default function RightMessage() {
    return (
        <div className="right-messages flex flex-row-reverse py-2">
            <div className="content bg-blue-400 w-max max-w-[80%] gap-2 rounded-tr-none rounded-xl ">
                <p className="messagecontent px-2 py-3">This is a right message</p>
            </div>
        
        </div>
    )
}