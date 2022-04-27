//ES6
import express from "express"
import cors from "cors"

const app = express();
app.use(cors()); // serve para evitar problemas de dominio 
app.use(express.urlencoded({ extended: true })); // codificando url

import routeClients from "./routes/clients.js" // importando rota
routeClients(app); // função da rota


app.listen('4000', () => {
    console.log('server listening');
});