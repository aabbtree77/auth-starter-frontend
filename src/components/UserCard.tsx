import React from "react";

export interface UserProps {
  userName: string;
  userRole: "admin" | "teacher" | "student" | "nobody";
}
const UserCard: React.FC<UserProps> = ({ userName, userRole }) => {
  return (
    <div className="flex items-center justify-center bg-neutral">
      <div className="card bg-neutral shadow-lg p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-2 text-primary">Welcome</h2>
        <p className="text-gray-100">Your normalized name is {userName}.</p>
        <p className="text-gray-100">Your role is {userRole}.</p>
        <p className="text-gray-100">Not much else is implemented yet.</p>
      </div>
    </div>
  );
};

export { UserCard };
