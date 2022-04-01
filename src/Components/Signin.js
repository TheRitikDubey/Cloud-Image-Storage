import React, { useState, useEffect } from "react";
import Fireauth from "./Fireauth";
import { auth } from "./FireBase/Fire";
import "./Component_CSS/Signin.css";
import Main from "./Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageGrids from "./ImageGrids";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [create, setCreate] = useState(false);
  const enter = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  useEffect(() => {
    let unsub = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsub(); // clean up
    };
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Fireauth">
            <Fireauth />
          </Route>
          <Route path="/">
            <>
              {user === null ? (
                <div className="null">
                  <h3>Don't have an Account </h3>
                  <div className="signin">
                    <h1>Sign IN</h1>
                    <h2>Email</h2>
                    <input
                      className="input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br></br>
                    <h2>Password</h2>
                    <input
                      className="input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br></br>
                    <button className="signbtn" onClick={enter}>
                      Signin
                    </button>
                    <Link to="/Fireauth">
                      <button className="createbtn">SignUp</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <nav className="nav">
                    <ul className="navlist">
                      <li className="title">Cloud File Storage</li>
                      <li>Hello {user.email}</li>
                      <li>
                        <button
                          className="logout"
                          onClick={() => auth.signOut()}
                        >
                          Signout
                        </button>
                      </li>
                    </ul>
                  </nav>
                  <Main />
                  <ImageGrids />
                </div>
              )}
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Signin;
