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
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: false,
      },
      useNullAsDefault: true,
    },
  };
};
