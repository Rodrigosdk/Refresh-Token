import express from 'express';

export class App {
    private app: express.Application

    constructor(public readonly port:Number) {
      this.port = port;

      this.app = express();
      this.middlewares();
    }

    private middlewares(): void {
      this.app.use(express.json);
    }

    listen(callback?: () => void): void {
      this.app.listen(this.port, callback);
    }
}
