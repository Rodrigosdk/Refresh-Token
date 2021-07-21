require('dotenv');

if (process.env.NODE_ENV === 'dev') {
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
      migrationsDir: process.env.TYPEORM_MIGRATION_DIR,
    },
  };
} else {
  module.exports = {
    type: 'postgres',
    host: process.env.HOST_PRODUCTION,
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'refresh-token',
    entities: [process.env.TYPEORM_ENTITIES_PRODUCTION],
    migrations: [process.env.TYPEORM_MIGRATION_PRODUCTION],
    cli: {
      entitiesDir: process.env.TYPEORM_ENTITIES_DIR_PRODUCTION,
      migrationsDir: process.env.TYPEORM_MIGRATION_DIR_PRODUCTION,
    },
  };
}
