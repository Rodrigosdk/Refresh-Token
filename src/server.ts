import { App } from './App';
import { connecteDB } from './data/connect';

const PORT = parseInt(process.env.PORT, 10) || 3333;

const app = new App(PORT);

connecteDB();

app.listen(() => {
  console.log(`🚀 Server on port ${PORT}`);
});
