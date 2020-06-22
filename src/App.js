import React from "react";
import  {BrowserRouter as Router, Switch, Route}  from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
import Landing from "./Landing";
import Nosotros from "./Nosotros"
import Blog from "./Blog";
import Login from "./Login"
import Register from "./Register"
import Footer from "./footer"

import Search from "./components/ayuda/Search"

function App(){
  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login}/>
          <Route path="/signUp" component={Register} />
          <Route path="/ayuda" component={Search} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;