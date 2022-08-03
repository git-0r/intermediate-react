import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  // const usernameRef = useRef(null);
  // const passwordRef = useRef(null);
  let usernameRef = null;
  let passwordRef = null;

  const handleForm = (e) => {
    e.preventDefault();
    // without callback use .current.value
    console.log(
      "username: ",
      usernameRef.value,
      "password: ",
      passwordRef.value
    );

    usernameRef.value = "";
    passwordRef.value = "";
  };

  // -------------- using callback--------------------
  const setUsernameRef = (node) => {
    usernameRef = node;
  };

  const setPasswordRef = (node) => {
    passwordRef = node;
  };
  // ---------------------------------------------------

  useEffect(() => {
    // usernameRef?.current?.focus();
    usernameRef?.focus();
  });

  return (
    <div className="App">
      <form className="login-form" onSubmit={handleForm}>
        <h1>LOGIN</h1>
        <input
          className="username_input"
          placeholder="Username"
          type="text"
          ref={setUsernameRef}
          // ref={usernameRef}
          required
        />
        <input
          className="password_input"
          placeholder="Password"
          type="password"
          ref={setPasswordRef}
          // ref={passwordRef}
          required
        />
        <div className="login_options">
          <div className="remember_wrapper">
            <input type="checkbox" id="remember_me" />
            <label htmlFor="remember_me">Remember me</label>
          </div>
          <a href="#" className="forgot_link">
            Forgot?
          </a>
        </div>
        <button className="login_btn">LOGIN</button>
      </form>
    </div>
  );
}

export default App;
