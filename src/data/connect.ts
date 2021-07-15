import { createConnection } from 'typeorm';

createConnection()
  .then(() => console.log('📦 Successfully connected to database'))
  .catch((error) => console.log('❌', error));
