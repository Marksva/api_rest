import db from "../database/db.js"

const controller = {

    get(req, res) {
        console.log("chegou uma requisição na rota clients GET");
        res.status(200).json(db.data.clients);
    },

    post(req, res) {
        console.log("chegou uma requisição na rota clients POST");
        console.log("oque tem no body:", req.body);
        db.data.clients[req.body.id] = {
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email
        }
        db.write();
        res.status(200).json({ algo: "oi POST" });
    },

    put(req, res) {
        console.log("chegou uma requisição na rota clients PUT");
        res.status(200).json({ algo: "oi PUT" });
        console.log("oque chegou no body:", req.body);
        db.data.clients[req.body.id] ={
            id: req.body.id,
            nome: req.body.nome,
            email: req.body.email
        }
        db.write();
        res.status(200).json(db.data.clients);
    },

    delete(req, res) {
        console.log("chegou uma requisição na rota clients DELETE");
        res.status(200).json({ algo: "oi DELETE" });
        console.log("oque chegou no body:", req.body);
        delete db.data.clients[req.body.id];
        db.write();
        res.status(200).json(db.data.clients);
    },
    

}

export default controller;