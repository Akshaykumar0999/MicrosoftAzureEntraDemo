export const msalConfig = {
  auth: {
    clientId: "Client_ID",
    authority: "https://login.microsoftonline.com/TENANT_ID",
    redirectUri: "http://localhost:5173",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: [
    "openid",
    "profile",
    "email",
    "api://Client_ID/access_as_user",
  ],
};
