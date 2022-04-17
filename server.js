//ES6
import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

import routeClients from"./routes/clients.js"
routeClients(app);

app.listen('4000',()=> {
    console.log('server listening');
})