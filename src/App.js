/** @jsxImportSource @emotion/react */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./pages/LoadingPage";
import Login from "./pages/Login";
import "./App.css";
import { css } from "@emotion/react";




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
      </div>  
    </Router>
  );
}

export default App;
