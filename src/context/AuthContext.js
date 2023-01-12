import React, { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { userDB: action.payload };
    case "LOGOUT":
      return { userDB: null };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { userDB: null });

  useEffect(() => {
    const isUserExist = JSON.parse(localStorage.getItem("user"));
    if (isUserExist) dispatch({ type: "LOGIN", payload: isUserExist });
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
