import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import 'dotenv';

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ message: 'Token is missing' });
  }

  const token = authToken.split(' ');

  try {
    verify(token[1], process.env.KEY_TOKEN);
    return next();
  } catch (error) {
    return response.status(401).json({
      menssage: 'Token invalid',
    });
  }
}
