/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

export function Error(error: Error, request:Request, response:Response, next:NextFunction) {
  return response.status(400).json({
    status: 'Error',
    menssage: error.message,
  });
}
