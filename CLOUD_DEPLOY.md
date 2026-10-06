# Definals Connect — Cloud Launch

## Recommended test architecture

Browser/PWA + Android app -> Definals Connect Node service -> PostgreSQL -> Paystack

## Render quick deployment

1. Put this project in a GitHub repository.
2. In Render, choose New > Blueprint and connect the repository.
3. Render reads `render.yaml` and provisions the Node web service and PostgreSQL database.
4. Enter `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `PAYSTACK_SECRET_KEY` and `BASE_URL` when prompted.
5. Deploy with Paystack TEST mode first.
6. Set the Paystack webhook to `https://YOUR-RENDER-DOMAIN/api/webhooks/paystack`.
7. Test vendor registration, payment, referral, customer request and admin reward flow.
8. Only after successful tests, switch to Paystack LIVE credentials.

## Important

The free Render plan is suitable for initial testing but should not be treated as the final production plan. Upgrade the web service/database before a serious public launch.

## Android

After the cloud URL works, edit `mobile-app/capacitor.config.ts` and replace the placeholder URL. Then install Capacitor dependencies, add Android once, sync, and open Android Studio.
