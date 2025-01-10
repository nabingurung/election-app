// environment.prod.ts
export const environment = {
    production: true,
    awsConfig: {
      region: process.env["AWS_REGION"] || '',
      userPoolId: process.env["AWS_USER_POOL_ID"] || '',
      userPoolWebClientId: process.env["AWS_USER_POOL_WEB_CLIENT_ID"] || '',
    },
  };