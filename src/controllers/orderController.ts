import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../services/orderService';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const order = await this.orderService.getAll();

    const dataFormat = order.map((item) => ({
      id: item.id,
      userId: item.userId,
      productsIds: [item.productsIds],
    }));
    res.status(StatusCodes.OK).json(dataFormat);
  };
}

export default OrderController;
