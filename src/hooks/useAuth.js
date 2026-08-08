import { useMsal } from "@azure/msal-react";

export const useAuth = () => {
  const { accounts } = useMsal();

  const isAuthenticated = accounts.length > 0;

  return {
    isAuthenticated,
    user: accounts[0],
  };
};
