export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://mobiletech-backend.onrender.com'),
  app: {
    keys: env.array('APP_KEYS', ['yourSecretKey1', 'yourSecretKey2']),
  },
});
