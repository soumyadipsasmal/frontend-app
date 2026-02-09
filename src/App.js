import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="container">
          <div className="left">
            <h1 className="logo">ConnectHub</h1>
            <p>Connect and share moments with your friends.</p>
          </div>

          <div className="right">
            <div className="login-box">
              <input type="text" placeholder="Email or Username" />
              <input type="password" placeholder="Password" />

              <button
                className="login-btn"
                onClick={() => setLoggedIn(true)}
              >
                Log In
              </button>

              <p className="forgot">Forgot password?</p>

              <hr />

              <button className="signup-btn">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="home">
          <h2>Welcome to ConnectHub ✅</h2>
          <button onClick={() => setLoggedIn(false)}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
