import React from "react";
import avatar from "../assets/avatar.png";

export default function Register() {
    return(
<div className="formContainer bg-[#384d8e] h-[100vh] flex items-center justify-center">
    <div className="formWrapper bg-white py-5 px-20 flex flex-col gap-2 items-center rounded-xl">
        <span className="logo text-[#5d5b84] text-2xl font-bold">Chatify</span>
        <span className="title text-[#5d5b8d] text-sm">Register</span>
        <form className="flex flex-col gap-4 w-80" action="">
            <input className="p-3 border-b-2 border-b-gray-100" type="text" placeholder="username" name="" id="" />
            <input className="p-3 border-b-2 border-b-gray-100" type="email" placeholder="email" name="" id="" />
            <input className="p-3 border-b-2 border-b-gray-100" type="password" placeholder="password" name="" id="" />
            <input className="p-3 bottom-1 border-[#a7bcff]" type="password" placeholder="confirm password" name="" id="" />
            <input className="p-3 border-b-2 border-b-gray-100 hidden" type="file" placeholder="profile picture" name="" id="file" />
            <label className="flex items-center gap-2 text-ms cursor-pointer text-[#9fa2a3] " htmlFor="file">
                <img className="w-8 h-8 rounded-full cursor-pointer" src={avatar} alt="" />
                <span>Add an avatar</span>
            </label>
            <button className="bg-[#374882] rounded-xl text-white p-2 font-bold cursor-pointer" type="submit">Register</button>
        </form>
        <span className="link">Already have an account? Login</span>
    </div>
</div>



    )
}