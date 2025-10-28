module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aqoUtL6PNO98RLqi3mM5Mw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'CTzR2Q72NOMdKMKO/WxjZw=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'LfBa1NLgMyRVsFOt+K00tw=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
