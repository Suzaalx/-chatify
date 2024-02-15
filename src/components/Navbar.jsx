import React from "react";

export default function Navbar() {
    return (
        <div className="navbar flex items-center  h-12 p-2 justify-between ">
        <span>Chatify</span>
        <div className="flex items-center">
        <img src="https://www.flaticon.com/svg/vstatic/svg/149/149071.svg?token=exp=1618578334~hmac=5e8b1e3e5c0a3c4f2e7a6f8e1e0d9f2e" alt="user" className="h-5 w-5"/>
        <span className="mr-2 text-ms">Username</span>
        <button className=" text-sm p-1 px-2 rounded-md">Logout</button>
        </div>
        </div>
    )
}