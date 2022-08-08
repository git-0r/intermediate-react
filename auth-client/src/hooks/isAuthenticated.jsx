import { useState } from "react";

export const useIsAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const refreshToken = localStorage.getItem("refreshToken");
  const refreshToken_expiresAt = localStorage.getItem("refreshToken_expiresAt");
  console.log(
    new Date(Number(refreshToken_expiresAt)).getTime() < new Date().getTime()
  );
    if (
      new Date(Number(refreshToken_expiresAt)).getTime() < new Date().getTime()
    ) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  return { authenticated };
};
