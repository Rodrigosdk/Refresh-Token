import express from 'express';
import { Error } from './middlewares/Error';
import { CreateUserController } from './controller/CreateUserController';
import 'express-async-errors';

export class App {
    private app: express.Application;

    constructor(public readonly port:Number) {
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
    }

    listen(callback?: () => void): void {
      this.app.listen(this.port, callback);
    }
}
