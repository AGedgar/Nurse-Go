import React from "react"
import "./Login.css"

function Login() {
    return (
        <div className="loggin">
            <h1>Inicia Sesión</h1>
            <input type="text" name="user" id="" placeholder="Usuario"/>
            <input type="text" name="pass" id="" placeholder="Contraseña"/>
            <button>Entrar</button>
        </div>

    )
}


export default Login;