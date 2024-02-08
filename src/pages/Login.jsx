import React from "react";

export default function Login() {
    return (
        <div className="formContainer bg-[#384d8e] h-[100vh] flex items-center justify-center">
    <div className="formWrapper bg-white py-5 px-20 flex flex-col gap-2 items-center rounded-xl">
        <span className="logo text-[#5d5b84] text-2xl font-bold">Chatify</span>
        <span className="title text-[#5d5b8d] text-sm">login</span>
        <form className="flex flex-col gap-4 w-80" action="">
            
            <input className="p-3 border-b-2 border-b-gray-100" type="email" placeholder="email" name="" id="" />
            <input className="p-3 border-b-2 border-b-gray-100" type="password" placeholder="password" name="" id="" />
           
            <button className="bg-[#374882] rounded-xl text-white p-2 font-bold cursor-pointer" type="submit">Login</button>
        </form>
        <span className="link">Don't have an account? Register</span>
    </div>
</div>
    )
    }
    