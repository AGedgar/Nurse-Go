import React from "react";
import  {BrowserRouter as Router, Switch, Route}  from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
import Landing from "./Landing";
import Nosotros from "./Nosotros"
import Blog from "./Blog";

import Register from "./Register"
import Footer from "./footer"

import Ayuda from "./assets/containers/Ayuda";

function App(){
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/blog" component={Blog} />

          <Route path="/signUp" component={Register} />
          <Route path="/ayuda" component={Ayuda} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;