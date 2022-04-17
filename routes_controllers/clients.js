 const controller = { 

    list(req, res) {
        console.log("chegou uma requisição na rota clients GET");
        res.status(200).json({algo :"oi GET"});
    },
    add(req, res) {
        console.log("chegou uma requisição na rota clients POST");
        res.status(200).json({algo :"oi POST"});
    },
    update(req, res) {
        console.log("chegou uma requisição na rota clients PUT");
        res.status(200).json({algo :"oi PUT"});
    },
    remove(req, res) {
        console.log("chegou uma requisição na rota clients DELETE");
        res.status(200).json({algo :"oi DELETE"});
    },

 }

 export default controller;