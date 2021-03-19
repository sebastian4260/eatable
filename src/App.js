/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

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
      </div>  
    </Router>
  );
}

export default App;
