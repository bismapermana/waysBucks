import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <AuthContext.Provider
      value={{
        showLogin,
        handleShowLogin,
        handleCloseLogin,
        showRegister,
        handleShowRegister,
        handleCloseRegister,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
