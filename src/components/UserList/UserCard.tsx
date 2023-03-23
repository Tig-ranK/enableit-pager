import { FC } from "react";
import "./UserCard.scss";
import { User } from "./types";

const UserCard: FC<{ user: User }> = ({ user }) => {
   const { JobTitle, EmailAddress, FirstNameLastName, Email, Phone, Company } =
      user;

   return (
      <div className="user-card">
         <h3>{FirstNameLastName}</h3>
         <p>
            {JobTitle} at {Company}
         </p>
         <div className="user-info">
            <p>
               <strong>Email: </strong>
               {Email}
            </p>
            <p>
               <strong>Phone: </strong>
               {Phone}
            </p>
            <p>
               <strong>Email Address: </strong>
               {EmailAddress}
            </p>
         </div>
      </div>
   );
};

export default UserCard;
