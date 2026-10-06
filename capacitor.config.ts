import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.definals.connect',
  appName: 'Definals Connect',
  webDir: '../public',
  server: {
    url: 'https://YOUR-DOMAIN.example.com',
    cleartext: false
  }
};
export default config;
