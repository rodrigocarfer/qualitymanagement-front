import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FormularioRegistro from "./Pages/FormularioRegistro/FormularioRegistro";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>  
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/sobre" component={About} /> 
          <Route exact path="/registro" component={FormularioRegistro} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;