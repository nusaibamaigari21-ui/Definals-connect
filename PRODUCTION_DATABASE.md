# Production database setup

Definals Connect supports PostgreSQL through `DATABASE_URL` and falls back to SQLite when that variable is absent.

## Recommended setup
1. Create a managed PostgreSQL database with Supabase, Neon, Render Postgres, or another trusted provider.
2. Copy the provider's PostgreSQL connection string into the hosting service as `DATABASE_URL`.
3. For a transient/serverless host, prefer the provider's transaction pooler where available.
4. Deploy the Node.js service. On startup, the app creates its required tables and indexes.
5. Set automated database backups/point-in-time recovery where your provider supports it.

## Minimum production environment
- `DATABASE_URL`
- `JWT_SECRET`
- `PAYSTACK_SECRET_KEY`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `BASE_URL`
- `NODE_ENV=production`

Never commit `.env` or a live Paystack secret to source control.
