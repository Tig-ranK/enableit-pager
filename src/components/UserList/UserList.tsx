import { useState, useEffect, FC } from "react";
import { User } from "./types";
// Styles
import "./UserList.scss";
// Components
import { UserCard } from "./UserCard";
import { NavigationButtons } from "./NavigationButtons";
import { Loading } from "../Loading";

export const UserList: FC<{}> = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [userId, setUserId] = useState<number>(0);

   useEffect(() => {
      const fetchData = async () => {
         const result = await fetch(
            `${import.meta.env.VITE_API_URL}${userId}/next`
         );
         const json = await result.json();
         setUsers(json.users);
         setLoading(false);
      };

      fetchData();
   }, [userId]);

   const handlePrevious = () => {
      setUserId((prevUserId) => prevUserId - 10);
      setLoading(true);
   };

   const handleNext = () => {
      setUserId((prevUserId) => prevUserId + 10);
      setLoading(true);
   };

   return (
      <div>
         <NavigationButtons
            isPreviousDisabled={userId === 0}
            onPrevious={handlePrevious}
            onNext={handleNext}
         />
         <div className="card-grid">
            {!loading ? (
               users.map((user) => <UserCard key={user.ID} user={user} />)
            ) : (
               <Loading />
            )}
         </div>
         <NavigationButtons
            isPreviousDisabled={userId === 0}
            onPrevious={handlePrevious}
            onNext={handleNext}
         />
      </div>
   );
};
