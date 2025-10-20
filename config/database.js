const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const databaseUrl = env('DATABASE_URL');
  if (databaseUrl) {
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
      },
    };
  }

  // Fallback for local
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};
