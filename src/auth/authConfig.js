// export const msalConfig = {
//   auth: {
//     clientId: "6dddfc86-8041-4da7-83c3-c7afefc9e305",
//     authority:
//       "https://login.microsoftonline.com/ff83bb40-a41c-4dfe-a301-1b7df3eb2524",
//     redirectUri: window.location.origin,
//   },
//   cache: {
//     cacheLocation: "sessionStorage",
//     storeAuthStateInCookie: false,
//   },
// };

// export const loginRequest = {
//   scopes: [
//     "openid",
//     "profile",
//     "email",
//     "api://377ca873-67d4-44bd-ac6c-439d4ee06a22/ms_api.all",
//   ], // ✅ safe for now
// };
export const msalConfig = {
  auth: {
    clientId: "6dddfc86-8041-4da7-83c3-c7afefc9e305",
    authority:
      "https://login.microsoftonline.com/ff83bb40-a41c-4dfe-a301-1b7df3eb2524",
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        console.log(message);
      },
      logLevel: 3, // Verbose (use LogLevel enum if you import it)
    },
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Example: Microsoft Graph profile scope
};

export const tokenRequest = {
  scopes: ["User.Read", "Mail.Read"], // Additional scopes if needed
};