import db from "../database/db.js" // importando banco de dados

const controller = { // criando controlador e suas funções
    
    
    // visualizar clientes
    get(req, res) {
        console.log("chegou uma requisição na rota clients GET");
        res.status(200).json(db.data.clients);
    },

    // criar um novo cliente
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

    // atualizar um cliente
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

    // deletar um cliente
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