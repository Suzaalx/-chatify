import React from "react";
import RightMessage from "./RightMessage";
import LeftMessage from "./LeftMessage";

export default function Messages({message}) {
    return (
        <div className="messages bg-[#e9e9e9] p-2 h-[86vh]">
        <LeftMessage/>
        <RightMessage/>
        {message}
        </div>
    )
}