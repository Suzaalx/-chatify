// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from "react";

import Sidebar from "../components/sidebar";

import Chatbar from "../components/Chatbar";

import Modal from "../modal/Modal";

import { AuthContext } from "../context/AuthContext";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import Search from "../components/Search";


export default function Home() {
    const {currentUser} = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const userCollection = collection(db, "users");
            const q = query(userCollection, where ('uid','not-in',[currentUser.uid]));
            const querySnapshot = getDocs(q);
            querySnapshot.then((res)=>{
                const users = [];
                res.forEach((doc)=>{
                    users.push(doc.data());
                })
                setUsers(users);
        })
            }
        getUsers();

    }, [currentUser.uid]);

    
    return (
        <div className="home h-[100vh] w-[100vw] p-0 flex items-center justify-center ">
        
            <div className="w-[100vw] h-full flex ">
            <Sidebar openModal={()=> setIsModalOpen(true)}/>
            <div className="w-full md:w-4/5 md:block hidden">

            <Chatbar/>
            </div>
            
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            
            <Search/>
       
            </Modal>


        
        </div>
    )
    }
