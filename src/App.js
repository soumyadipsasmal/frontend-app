import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      {!loggedIn ? (
        <div className="login-container">
          <div className="left">
            <h1 className="logo">facebook</h1>
            <p>
              Facebook helps you connect and share with the people in your
              life.
            </p>
          </div>

          <div className="right">
            <div className="login-box">
              <input type="text" placeholder="Email or phone number" />
              <input type="password" placeholder="Password" />

              <button
                className="login-btn"
                onClick={() => setLoggedIn(true)}
              >
                Log In
              </button>

              <p className="forgot">Forgotten password?</p>

              <hr />

              <button className="create-btn">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="home">
          <h2>Welcome to Facebook Clone ✅</h2>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;

