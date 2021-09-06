import {Router} from 'express';
import ClientController from "../controllers/client.controller.js"

const routes = Router();

routes.post("/", ClientController.createClient);

export default routes;
