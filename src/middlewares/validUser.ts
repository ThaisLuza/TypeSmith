import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import User from '../interfaces/user.interface';

const newUser = Joi.object<User>({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = newUser.validate(body);

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

export default validateUser;
