import React, { createContext, useState } from "react";
import { useHistory } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const history = useHistory();

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

  const handleLogin = () => {
    setIsLogin(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLogin(false);
    history.push("/");
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
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
