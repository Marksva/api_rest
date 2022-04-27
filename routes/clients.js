import controller from "../routes_controllers/clients.js" // importando controlador de clients

const routeName = "/clients"; //instanciando a rota clients

function route(app) { // inserindo rota no app
    // CRUD
    app.route(routeName).get(controller.get);
    app.route(routeName).post(controller.post);
    app.route(routeName).put(controller.put);
    app.route(routeName).delete(controller.delete);
    console.log(`route [${routeName}] created`);
}

export default route;