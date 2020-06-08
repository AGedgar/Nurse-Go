import React from 'react';
import './Nosotros.css';

const Nosotros  = () => {
    return (
        <div className="container">
            <h1>Nosotros</h1>
            <h4>Somos una empresa formada en 2020 por un grupo de ingenieros cuyo proposito es poner la tecnología y 
                los servicios de enfermería a tu alcance.<br/> <br/>
                En la actualidad muchos contratos de servicios se están llevando acabo mediante Intenet. Gracias a la expanción del Internet en todo el mundo la comunicación se ha heho mas fácil.
                Por lo tanto al ver la oportunidad de mejorar un servicio médico se forma <span>Nurse Go</span>. <br/>
                <span>Nurse Go</span> Pone a tu disposición la opotunidad de formar parte de la red de enfermeros calificados y certificados que brindando a nuestros clientes un servicio de calidad.
            </h4>
            <section>
                <h2>FAQ</h2>
                
            </section>
            <section id="contacto">
                <h2>Contacto</h2>
                <form action="#" id="form-nosotros">
                    <div className="input">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="" placeholder="Nombre"/>
                    </div>
                    <div className="input">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" name="apellido" id="" placeholder="Apellido"/>    
                    </div>
                    <div className="input">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="tel" name="telefono" id="" placeholder="Teléfono"/>                        
                    </div>
                    <div className="input">
                        <label htmlFor="email">Teléfono</label>
                        <input type="email" name="correo" id="" placeholder="coreeo electrónico"/>
                    </div>
                </form>
            </section>

            <section>

            </section>
        </div>
    )
}

export default Nosotros;