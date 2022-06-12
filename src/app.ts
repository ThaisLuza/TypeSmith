import express from 'express';

import routerProduct from './routes/product.routes';

import routerUser from './routes/user.routes';

import routerOrder from './routes/order.routes';

const app = express();

app.use(express.json());

app.use(routerProduct);

app.use(routerUser);

app.use(routerOrder);

export default app;
