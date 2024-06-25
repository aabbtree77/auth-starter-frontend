import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [auth, setAuth] = useState<{ loggedIn: boolean }>({
    loggedIn: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      let response: Response;

      try {
        response = await fetch(import.meta.env.VITE_backend_url + "checkauth", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include credentials such as cookies
        });

        if (response.ok) {
          const data = await response.json();
          setAuth({ loggedIn: data.loggedIn });
        } else {
          setAuth({ loggedIn: false });
        }
      } catch (error) {
        setAuth({ loggedIn: false });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { ...auth, loading };
};

export default useAuth;
