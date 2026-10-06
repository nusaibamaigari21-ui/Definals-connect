# Definals Connect Android App

This is the mobile wrapper for the live Definals Connect website. It uses Capacitor and points to the cloud-hosted website so vendor, customer and ambassador accounts use the same backend and database.

## Before building
1. Deploy the main website and copy its HTTPS URL.
2. Replace `https://YOUR-DOMAIN.example.com` in `capacitor.config.ts` with that URL.
3. Install Node.js 20+, Android Studio and the Android SDK.
4. Run `npm install` in this folder.
5. Run `npx cap add android` once.
6. Run `npm run sync`.
7. Run `npm run android` to open Android Studio.
8. Build a signed AAB for Google Play or an APK for direct testing.

The app does not contain Paystack secrets; payments remain server-side on the cloud backend.
