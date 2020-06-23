import React from "react";
import "../../assets/styles/components/Nav.css"
import {Link} from "react-router-dom";

function Nav(){
    return(
        <div className="containerNav">
            <div className="nav">
            <ol><Link to ="/"> Inicio</Link></ol>
            <ol><Link to ="/nosotros">Nosotros</Link></ol>
            <ol><Link to ="/blog">Blog</Link></ol>
            <ol><Link to = "/ayuda">Ayuda</Link></ol>
            <ol><Link to = "/contacto">Contacto</Link></ol>
            <ol><Link to = "/login">Inicia Sesión</Link></ol>
            <ol><Link to = "/signUp">Registrate</Link></ol>
            </div>
        </div>
    )
}


export default Nav;