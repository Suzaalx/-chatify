import React from "react";

export default function LeftMessage({message}) {
    return (
        <div className="left-messages py-2">
            <div className="content bg-gray-500 w-max max-w-[80%] gap-2 rounded-tl-none rounded-xl ">
                <p className="messagecontent px-2 py-3">{message}</p>
            </div>
        
        </div>
    )
}