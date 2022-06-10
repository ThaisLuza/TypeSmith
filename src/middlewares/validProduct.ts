import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import Product from '../interfaces/product.interface';

const newProduct = Joi.object<Product>({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = newProduct.validate(body);

  if (result.error) {
    const typeError = result.error.details[0];
    if (typeError.type === 'any.required') {
      res.status(StatusCodes.BAD_REQUEST).json({ message: typeError.message });
    }
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: typeError.message });
  }
  next();
};

export default validateProduct;
