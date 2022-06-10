import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const senhaSecreta = 'turma17';

const jwtConfig: object = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const generateJWT = (payload: User) => {
  const token = jwt.sign({ data: payload }, senhaSecreta, jwtConfig);

  return token;
};

export default generateJWT;