import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import Header from "../Header";
import BlogPost from "../../pages/BlogPost";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

const Root = styled.div`
  padding-top: 126px;
`;

function App() {
  return (
    <Root>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/posts/:id">
            <BlogPost />
          </Route>
        </Switch>
      </Router>
    </Root>
  );
}

export default App;
