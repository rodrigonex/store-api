import {Router} from 'express';
import ClientController from "../controllers/client.controller.js"

const routes = Router();

routes.post("/", ClientController.createClient);
routes.get("/", ClientController.getClients);
routes.get("/:id", ClientController.getClient);

export default routes;
