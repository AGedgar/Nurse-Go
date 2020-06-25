import React from "react"
import "../../assets/styles/components/Register.css"
import RegisterImage from "../../assets/static/register.jpg"

function Register(){
    return(
        <form action="">
            <div className="form-container">
            <label htmlFor="name">Nombre(s):</label>
            <input type="text" name="name" id=""/>
            <label htmlFor="apeP">Apellido Paterno:</label>
            <input type="text" name="apeP"/>
            <label htmlFor="apeM">Apellido Materno:</label>
            <input type="text" name="apeM"/>

            <label htmlFor="state">Estado:</label>
            <input type="text" name="state" id=""/>
            <label htmlFor="city">Ciudad:</label>
            <input type="text" name="city"/>
            <label htmlFor="addres">Dirección:</label>
            <input type="text" name="address" id=""/>

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id=""/>
            <label htmlFor="tel">Telefono:</label>
            <input type="text" name="tel" id=""/>
            <label htmlFor="type">Registrarse como:</label>    
            <select name="type" id="">
                <option value="User">Paciente</option>
                <option value="Nurse">Enfermera(o)</option>
            </select>
            </div>
            <div>
                <img src={RegisterImage} alt=""/>
            </div>
        </form>
    )
}

export default Register;