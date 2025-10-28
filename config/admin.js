// config/admin.ts  (use .js if you're not using TS)
export default ({ env }) => ({
  auth: {
    // Use ADMIN_AUTH_SECRET primarily; fallback to ADMIN_JWT_SECRET for compatibility
    secret: env('ADMIN_AUTH_SECRET', env('ADMIN_JWT_SECRET')),
    sessions: {
      // optional: recommended explicit lifespans in v5, avoids deprecation warnings
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_AGE', 30 * 24 * 60 * 60),        // 30 days
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_AGE', 30 * 24 * 60 * 60),   // 30 days
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
