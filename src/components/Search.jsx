import React, { useState, useContext, useEffect } from "react";
import { collection, query, where, getDoc,getDocs, updateDoc, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export default function Search() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedUser, setSelectedUser] = useState(null); // Track the selected user
    const [error, setError] = useState("");
    const { currentUser } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const {dispatch} = useContext(ChatContext);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const userCollection = collection(db, "users");
                const q = query(userCollection, where('uid', '!=', currentUser.uid)); // Change 'not-in' to '!='
                const querySnapshot = await getDocs(q); // Await here

                const usersData = querySnapshot.docs.map(doc => doc.data()); // Map over docs to extract data
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        getUsers();
    }, [currentUser.uid]);


   // Filter users based on search input (matching names starting with the search term)
const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(search.toLowerCase())
);


    const handleSelect = async (user) => {
      
         // Set the selected user
        console.log(user);
        

        // create a chat with the user
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        const chatRef = doc(db, 'chats', combinedId); // Create a reference to the specific chat document
        const chatSnapshot = await getDoc(chatRef); // Retrieve the document snapshot
        const res = chatSnapshot.data();        
        console.log(res);
        // if chat does not exist create a new chat
        if (res === undefined) {
            await setDoc(doc(db, 'chats', combinedId), {
                messages: []
            });
        }
        await updateDoc(doc(db, 'userchat', currentUser.uid), {
            [combinedId + ".userInfo"]: {
                uid: user.uid,
                displayName: user.name,
                photoURL: user.profilePic,
            },
            [combinedId + ".timestamp"]: serverTimestamp()
        });

        await updateDoc(doc(db, 'userchat', user.uid), {
            [combinedId + ".userInfo"]: {
                uid: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,},
            [combinedId + ".timestamp"]: serverTimestamp()
        });
        dispatch({type:"CHANGE_USER", payload: user})
    };

    return (
        <div className="border-b-2 border-gray-200 p-4">
        <div className="flex gap-2">
            <input
                placeholder="Search for user"
                className="flex-grow p-2 border border-gray-300 rounded-lg bg-transparent text-black outline-none"
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
        {error && <span className="text-red-500 block mt-2">{error}</span>}
        <ul className="list-none mt-2">
            {filteredUsers.map((user) => (
                <li key={user.uid} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <div onClick={() => handleSelect(user)} className="flex items-center gap-2">
                        <img src={user.profilePic} alt="profile" className="h-8 w-8 rounded-full object-cover" />
                        <span>{user.name}</span>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    
    );
}

