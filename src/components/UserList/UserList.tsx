import { useState, useEffect, FC } from "react";
import UserCard from "./UserCard";
import { User } from "./types";
import "./UserList.scss";

export const UserList: FC<{}> = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [userId, setUserId] = useState<number>(0);

   useEffect(() => {
      const fetchData = async () => {
         const result = await fetch(
            `${import.meta.env.VITE_API_URL}${userId}/next`
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
         <div className="button-wrapper">
            <button
               className="button"
               onClick={handlePrevious}
               disabled={userId === 0}
            >
               Previous
            </button>
            <button className="button" onClick={handleNext}>
               Next
            </button>
         </div>
         <ul>
            {users.map((user) => <UserCard key={user.ID} user={user} />)[0]}
         </ul>
      </div>
   );
};
