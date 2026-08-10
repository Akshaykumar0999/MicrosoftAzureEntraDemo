import { useMsal } from "@azure/msal-react";

export const useAuth = () => {
  const { accounts } = useMsal();

  // const isAuthenticated = accounts.length > 0;
  const account = msalInstance.getActiveAccount();
  const isAuthenticated = !!account;

  return {
    isAuthenticated,
    user: accounts[0],
  };
};
