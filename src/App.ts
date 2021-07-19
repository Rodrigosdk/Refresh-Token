import express, { Response, Request } from 'express';

import { Error } from './middlewares/Error';

import { CreateUserController } from './controller/CreateUserController';
import { AuthenticationUserController } from './controller/AuthenticationUserController';

import 'express-async-errors';

export class App {
  private app: express.Application;

  constructor(public readonly port: Number) {
    this.port = port;

    this.app = express();
    this.middlewares();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.routes();
    this.app.use(Error);
  }

  private routes(): void {
    this.app.post('/user', CreateUserController.handle);
    this.app.post('/authenticat', AuthenticationUserController.handle);
    this.app.get('/home', (request: Request, res: Response) => { res.send('Hello word'); });
  }

  listen(callback?: () => void): void {
    this.app.listen(this.port, callback);
  }
}
