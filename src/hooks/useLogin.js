import { useState, useEffect } from "react";
import useAuthContext from "./useAuthContext";
const loginUrl = "http://localhost:3001/api/user/login";

export const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const resData = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(resData.error);
      throw Error("Something went wrong with the login request");
    }
    if (response.ok) {
      // ? Saving data to the DB >>>
      localStorage.setItem("user", JSON.stringify(resData));

      //   ? Update the authContext
      dispatch({ type: "LOGIN", payload: resData });
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};

// export default useLogin;
