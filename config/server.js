export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://strapi-backend-bchh.onrender.com'),
  app: {
    keys: env.array('APP_KEYS', 'aSuperSecretKey123,anotherSecretKey456'),
  },
});
