import express, { request, response } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointController = new PointsController;
const itemsController = new ItemsController;

// Items
routes.get('/items', itemsController.index);

// Points
routes.post('/points', pointController.create);
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);

export default routes;