import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Login } from "../pages/Login";

export const LoggedInRoutes = () => {
  const user = useSelector((state) => state.auth);
  const refreshToken_expiresAt = localStorage.getItem("refreshToken_expiresAt");

  return user &&
    new Date(Number(refreshToken_expiresAt)).getTime() >
      new Date().getTime() ? (
    <Outlet />
  ) : (
    <Login />
  );
};
