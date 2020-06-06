import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);
const pointController = new PointsController;
const itemsController = new ItemsController;

// Items
routes.get('/items', itemsController.index);

// Points
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);
routes.post('/points', upload.single('image'), pointController.create);

export default routes;