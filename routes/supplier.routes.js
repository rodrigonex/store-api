import {Router} from 'express';
import supplierController from '../controllers/supplier.controller.js';

const routes = Router();

routes.post('/', supplierController.createSupplier);
routes.get('/', supplierController.getSuppliers);
routes.get('/:id', supplierController.getSupplier);
routes.delete('/:id', supplierController.deleteSupplier);
routes.put('/:id', supplierController.updateSupplier)

export default routes;