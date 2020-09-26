import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/home';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import './App.css';

function App() {
  useEffect(() => {
  }, [])

  return (
    <React.Fragment>
      <NavBar />
      <ToastContainer />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );

}

export default App;
