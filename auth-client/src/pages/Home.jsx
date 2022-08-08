import { useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";

export const Home = () => {
  const user = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(null);

  const accessProtectedRoute = () => {
    async function sendReq() {
      const res = await fetch("http://localhost:4001/welcome", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: user.accessToken,
          email: user.email,
        }),
      });
      const data = await res.json();
      setUserData(data);
    }
    sendReq();
  };
  const logout = () => {
    localStorage.clear();
  };
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <button onClick={accessProtectedRoute}>
        Click to access protected route using access token
      </button>
      {userData && (
        <div>
          <p>Email: {user.email}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
        </div>
      )}
    </div>
  );
};
