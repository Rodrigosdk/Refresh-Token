import { createConnection } from 'typeorm';

export async function connecteDB() {
  try {
    await createConnection();
    console.log('📦 Successfully connected to database');
  } catch (error) {
    console.log('❌', error);
  }
}
