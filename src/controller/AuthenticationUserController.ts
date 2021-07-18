import { Request, Response } from 'express';

import { AuthenticationUserServices } from '../services/AuthenticationUserServices';

export class AuthenticationUserController {
  public static async handle(request:Request, response:Response) {
    const { password, username } = request.body;
    const authenticationUser = new AuthenticationUserServices();
    const user = await authenticationUser.execute({ password, username });

    return response.json(user);
  }
}
