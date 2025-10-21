module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','b5d2f4a6e8c9b1d3a7f0c2e4d6a8f9b0'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','4a7b92c3f81d56e9a0b2f3c4d5e6a7b8'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','c73fd4a09b6f11ef0a1acdee0a594e9d732fcae71bbbf83ed85735193ad734aa'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY','A739d82F@#9dsFdfj32098bDfsa8df9sf'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
