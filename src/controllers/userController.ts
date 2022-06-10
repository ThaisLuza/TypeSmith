import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';
import generateJWT from '../utils/generateJWT';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    const token = generateJWT(userCreated);
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UserController;
