import express, { Router } from 'express';

import ProductController from './controllers/productController';

const app = express();
const router = Router();

app.use(express.json());

const productController = new ProductController();

router.get('/products', productController.getAll);

export default app;
