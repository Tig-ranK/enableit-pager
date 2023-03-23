import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { User } from "./types";

export const UserList = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [userId, setUserId] = useState<number>(0);

   useEffect(() => {
      const fetchData = async () => {
         const result = await fetch(
            `https://give-me-users-forever.vercel.app/api/users/${userId}/next`
         );
         const json = await result.json();
         setUsers(json.users);
      };

      fetchData();
   }, [userId]);

   const handlePrevious = () => {
      setUserId((prevUserId) => prevUserId - 10);
   };

   const handleNext = () => {
      setUserId((prevUserId) => prevUserId + 10);
   };

   return (
      <div>
         <button onClick={handlePrevious} disabled={userId === 0}>
            Previous
         </button>
         <button onClick={handleNext}>Next</button>
         <ul>
            {users.map((user) => (
               <UserCard key={user.ID} user={user} />
            ))}
         </ul>
      </div>
   );
};
