const dotevnt = require('dotenv');

dotevnt.config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.production',
});

module.exports = {
  type: 'postgres',
  host: process.env.HOST,
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'refresh-token',
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATION],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    migrationsDir: process.env.TYPEORM_MIGRATION_DIT,
  },
};
