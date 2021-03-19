/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import "./App.css";
import { css } from "@emotion/react";
import Home from "./pages/Home";



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
        <Route exact path="/" component={Products} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
      </div>  
    </Router>
  );
}

export default App;
