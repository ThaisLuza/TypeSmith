import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductRoutes from './routes/product.routes';

import app from './app';

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Express + TypeScript');
});

app.use(ProductRoutes);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
