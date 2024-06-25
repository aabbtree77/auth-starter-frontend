import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignoutButton: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signoutStatus, setSignoutStatus] = useState("Sign up");

  const navigate = useNavigate();

  const handleOnClick = async () => {
    try {
      // Send a POST request to the server API endpoint
      const response = await fetch(
        import.meta.env.VITE_backend_url + "signout",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include credentials such as cookies
        }
      );

      if (response.ok) {
        //console.log("Promise resolved and HTTP status is successful");
        // Handle successful sign out
        setSignoutStatus("Success. Signing out...");
        //window.location.href = "/";
        navigate("/");
      } else {
        //console.error("Promise resolved but HTTP status failed");

        //The second await is weird, but shows that
        //a) the value of the await expression becomes that of the fulfilled promise,
        //which could be another promise. This is done so that
        //b) fetch receives response header first in an async manner, then a payload.
        const responseData = await response.json();

        setSignoutStatus(responseData.error || "Failed to sign up");
        setIsSubmitting(false);
      }
    } catch {
      //console.error("Promise rejected, network or cors issues.");
      setSignoutStatus("Check Network or CORS.");
      setIsSubmitting(false);
    }
  };

  return (
    <button className="btn btn-outline btn-primary" onClick={handleOnClick}>
      Sign out
    </button>
  );
};

export default SignoutButton;
