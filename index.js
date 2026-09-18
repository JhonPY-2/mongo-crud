const express = require("express");
const conectarDB = require("./config/db");
const cors = require('cors')
const personajesRoutes = require("./routes/personajes");
const atletasRoutes = require("./routes/atletas");
const authRoutes = require("./routes/auth");

conectarDB();

const app = express();


app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API de One Piece y Deportes funcionando" });
})

app.use("/personajes", personajesRoutes);
app.use("/atletas", atletasRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
