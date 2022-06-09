import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const product = await this.productService.getAll();
    res.status(200).json(product);
  };
}

export default ProductController;
