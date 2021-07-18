import { Request, Response } from 'express';

import { CreateUserServices } from '../services/CreateUserServices';

export class CreateUserController {
  public static async handle(request:Request, response:Response) {
    const { name, password, username } = request.body;
    const authenticationUser = new CreateUserServices();
    const user = await authenticationUser.execute({ name, password, username });

    return response.json(user);
  }
}
