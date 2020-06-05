import React from "react"
import imgSection1Land from "./section1Landing.png"
import imgSection2Land from "./section2Landing.png"

function LandSections() {
    return (
        <div>

            <section className="sections-center">
                We are a company formed by nursing,<br /> healthcare, and technology<br /> professionals who are constantly<br /> looking for ways to improve the<br /> healthcare system.
        </section>
            <section className="sections-imgInfo">
            <p>
              The Go RN Platform is the solution to<br /> meet increased demand for all healthcare<br />facilities<br /><br />
              Staffing a hospital is a difficult and constant challenge. Finding the<br /> right staff at the last minute – and having them arrive in time for<br /> the shift – is a costly and time consuming process. Our platform<br /> reduces the uncertainty, cost, and time involved to get registry<br /> nurses on shift.
            </p>
            <img src={imgSection1Land} alt="" height="250px"/>
            </section>

            <section className="sections-imgInfo">
            <img src={imgSection2Land} alt="" height="250px"/>
            <p>
            Filling vacancies has never been easier!<br /> <br /> 
            We are finding better ways for healthcare facilities to staff<br />  on demand, schedule, and maximize patient experience. The Go RN<br />  platform aims to cut costs up to 30% for healthcare facilities while<br />  increasing the average registry salary by up to 25%. 
             </p>
            </section>
        </div>
    )
}

export default LandSections;