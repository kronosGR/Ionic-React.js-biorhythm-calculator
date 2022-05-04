import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.kandz.biorhythms',
  appName: 'Biorhythms',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.70:3000',
  },
};

export default config;
