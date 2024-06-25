import React, { useEffect, useState } from "react";

import SignoutButton from "./SignoutButton";
import { UserCard, UserProps } from "./UserCard";

const UserPage: React.FC = () => {
  const [userData, setUserData] = useState<UserProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_backend_url + "getuserdata",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include credentials such as cookies
        }
      );

      const responseObj = await response.json();
      const fetchOK = responseObj.ok;

      if (fetchOK) {
        // Note: TypeScript won't detect property name mismatch here.
        // One should be extra careful or run time errors will result.
        // Ex. responseObj.userdata vs responseObj.userData, Ts won't
        // see the problem here.
        // TDD: Enforce stricter control here and property automation.

        const userDataReceived = responseObj.userData as UserProps;
        setUserData(userDataReceived);
      } else {
        console.error("Promise resolved, but HTTP status failed");
        setUserData({ userName: "noname", userRole: "nobody" });
        throw new Error("Failed to fetch user data.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Promise rejected, network or cors issues.");
      }
    }
  };

  const renderUserCard = () => {
    if (error) {
      return <div>Error: {error}</div>;
    }
    if (!userData) {
      return <div>Loading...</div>;
    }
    return (
      <UserCard
        userName={userData.userName}
        // Note: stringA | stringB is not the same as String.
        // responseObj.userData as UserProps solves the problem.
        // If plain responseObj.userData, then this would be needed:
        //userRole={userData.userRole as UserProps["userRole"]}
        userRole={userData.userRole}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-items-center justify-between bg-neutral text-base-content">
      <header className="sticky top-0 w-full bg-neutral text-neutral-content p-4 ">
        <nav className="max-w-screen-lg mx-auto flex justify-end items-center">
          <SignoutButton />
        </nav>
      </header>

      <main className="bg-neutral flex flex-grow flex-col items-center justify-around w-full">
        {renderUserCard()}
      </main>

      <footer className="w-full bg-neutral text-neutral-content p-4 text-center">
        <div className="max-w-screen-lg mx-auto">
          <p>&copy; 2024 Subconscious Flow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default UserPage;
