const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined in environment variables');
  }

  const config = parse(databaseUrl);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: { rejectUnauthorized: false },
      },
      pool: { min: 0, max: 10 },
      debug: false,
    },
  };
};
