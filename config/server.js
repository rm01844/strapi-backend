export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://strapi-backend-bchh.onrender.com'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  // This is critical for Render deployment
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
