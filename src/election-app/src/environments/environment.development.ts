export const environment = {
  production: false,
  awsConfig: {
    region: import.meta.env.NG_APP_AWS_REGION,
    userPoolId: import.meta.env.NG_APP_AWS_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.NG_APP_AWS_USER_POOL_WEB_CLIENT_ID,
  },
};

