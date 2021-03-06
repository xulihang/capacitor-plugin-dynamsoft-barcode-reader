import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dynamsoft.qrcodescanner',
  appName: 'QR Code Scanner',
  webDir: 'build',
  bundledWebRuntime: false,
  server:{
    allowNavigation: ["*"]
  }
};

export default config;
