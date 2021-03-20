/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import { css } from "@emotion/react";
import "./App.css";
import Home from "./pages/Home";
import Loading from "./pages/LoadingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <div
        css={css`
          overflow: auto;
          margin: auto;
          height: 100vh;
          width: 414px;
          border-radius: 20px;
          background: #FFFFFF;
        `}
      >
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/profile" component={Profile} />
      </div>  
    </Router>
  );
}

export default App;