import React from "react";
import useAuthContext from "../hooks/useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGIN" });
  };
  return { logout };
};

// export default useLogout;
