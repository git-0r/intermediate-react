import { useDispatch } from "react-redux";
import { login_success } from "../redux/userSlice";
import "./login-form.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    async function userLogin(data) {
      const res = await fetch("http://localhost:4001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const { refreshToken, ...loginResult } = await res.json();
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem(
        "refreshToken_expiresAt",
        new Date().getTime() + 3600000
      );
      dispatch(login_success(loginResult));
    }
    userLogin(formData);
  };
  return (
    <form onSubmit={handleLogin} className="login-form">
      <input type="text" required name="email" placeholder="email" />
      <input type="password" required name="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
};
