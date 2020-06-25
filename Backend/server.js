const express = require("express");
const app = express();
const port = 5000;

app.get("/api/news", (req,res) =>{
    const news = [
        {id: 1, new: "COVID", description: "Apareció en China en diciembre pasado y provoca una enfermedad llamada COVID-19, que se ha extendido por el mundo y fue declarada pandemia global por la Organización Mundial de la Salud."},
        {id: 2, new: "DENGUE", description: "El dengue es una enfermedad vírica transmitida por mosquitos que se ha propagado rápidamente en todas las regiones de la OMS en los últimos años. El virus del dengue se transmite por mosquitos hembra principalmente de la especie Aedes aegypti y, en menor grado, de A. albopictus."},
        {id: 3, new: "NEUMONIA", description: "La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Los sacos aéreos se pueden llenar de líquido o pus (material purulento), lo que provoca tos con flema o pus, fiebre, escalofríos y dificultad para respirar."}
    ];

    res.json(news);
});

app.listen(port, () => console.log(`server started on port  ${port}`));