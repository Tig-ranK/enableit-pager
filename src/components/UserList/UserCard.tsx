// Types
import { FC } from "react";
import { User } from "./types";
// Styles
import "./UserCard.scss";
// SVG
import EmailLogo from "../../assets/mail.svg";
import PhoneLogo from "../../assets/phone.svg";
import JobLogo from "../../assets/briefcase.svg";

const UserCard: FC<{ user: User }> = ({ user }) => {
   const { JobTitle, EmailAddress, FirstNameLastName, Email, Phone, Company } =
      user;

   return (
      <div className="user-card">
         <h3>{FirstNameLastName}</h3>
         <p>
            <JobLogo />
            {JobTitle} @ {Company}
         </p>
         <p>
            <EmailLogo />
            <div className="email-wrapper">
               <a href={`mailto:${Email}`}>{Email}</a>
               <a href={`mailto:${Email}`}>{EmailAddress}</a>
            </div>
         </p>
         <p>
            <PhoneLogo />
            <a href={`tel:${Phone}`}>{Phone}</a>
         </p>
      </div>
   );
};

export default UserCard;
