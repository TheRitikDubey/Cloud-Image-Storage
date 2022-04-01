import React, { useState } from "react";
import { auth } from "./FireBase/Fire";
import "./Component_CSS/Fireauth.css";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Fireauth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  // const [user, setUser] = useState(null);
  const create = async () => {
    if (password !== verifyPassword) {
      alert("Passwords do not match");
      setPassword("");
      setVerifyPassword("");
      //setUser(1);
      return;
    }
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        alert("Account Created");
        setEmail("");
        setPassword("");
        setVerifyPassword("");
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Fireauth">
            <div className="container">
              <h1 className="head">
                Authenticate By FireBase Certified By Google
              </h1>
              <h2 className="content">Email</h2>
              <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <h2 className="content">Password</h2>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <h2 className="content">Confirm Password</h2>
              <input
                className="input last"
                type="password"
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
              />
              <br></br>

              <Link to="/login">
                <button className="create" onClick={create}>
                  SignUp
                </button>
              </Link>
            </div>
          </Route>
          <Route path="/login">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Fireauth;
