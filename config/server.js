export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  url: env('STRAPI_ADMIN_BACKEND_URL', 'https://strapi-backend-bchh.onrender.com'),
  app: {
    keys: env.array('APP_KEYS', 'gy1k3v0dhs8s9qf4,zx7c5r3m1t9n8b2q,vp4j2d6l0k5f3a9s,hc8w1e7u2o6t9l4b'),
  },
});
