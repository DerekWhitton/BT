export const environment = {
  production: true,
  blogRoute: 'https://blog.bushtrade.co.za/',
  apiRoute: 'https://staging-bush-trade-api.azurewebsites.net/',
  apiVersion: '1.0',
  b2c: {
    clientId: '33529a1d-66a4-4208-9c46-f9d101549770',
    names: {
      signUpSignIn: 'B2C_1_B2C_SignUpSignIn',
      resetPassword: 'B2C_1_ResetPassword',
      editProfile: 'B2C_1_EditProfile',
    },
    authorities: {
      signUpSignIn: {
        authority:
          'https://stagingbushtrade.b2clogin.com/stagingbushtrade.onmicrosoft.com/B2C_1_B2C_SignUpSignIn',
      },
      resetPassword: {
        authority:
          'https://stagingbushtrade.b2clogin.com/stagingbushtrade.onmicrosoft.com/B2C_1_ResetPassword',
      },
      editProfile: {
        authority:
          'https://stagingbushtrade.b2clogin.com/stagingbushtrade.onmicrosoft.com/B2C_1_EditProfile',
      },
    },
    scopes: ['openid'],
    b2cScopes: [
      'https://stagingbushtrade.onmicrosoft.com/fe7f3487-c419-4040-bcf4-fca1281fce47/api',
    ],
  },
};
