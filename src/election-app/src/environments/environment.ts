import { config } from 'dotenv';

config(); // Load variables from .env

export const environment = {
  production: false,
  awsConfig: {
    region: process.env['AWS_REGION'] || 'default-region',
    userPoolId: process.env['AWS_USER_POOL_ID'] || 'default-pool-id',
    userPoolWebClientId: process.env['AWS_USER_POOL_WEB_CLIENT_ID'] || 'default-client-id',
  },
};

