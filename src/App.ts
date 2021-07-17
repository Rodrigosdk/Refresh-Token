import express from 'express';

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
    }

    private routes(): void {
      this.app.get('/', (req, res) => res.send('oi'));
    }

    listen(callback?: () => void): void {
      this.app.listen(this.port, callback);
    }
}
