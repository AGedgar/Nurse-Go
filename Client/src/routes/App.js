import React from "react";
import  {BrowserRouter as Router, Switch, Route}  from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Landing from "../components/landing/Landing";
import Nosotros from "../Nosotros"
import Blog from "../components/Blog/Blog";
import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import Footer from "../components/Footer/footer"

import Search from "../components/ayuda/Search"

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