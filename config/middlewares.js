export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'https://market-assets.strapi.io',
          ],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      key: 'strapi.sid',
      rolling: false,
      renew: false,
      httpOnly: true,
      maxAge: 86400000,
      secure: false,
      sameSite: 'lax',
    },
  },
  'strapi::favicon',
  'strapi::public',
];
