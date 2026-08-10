import { useMsal } from "@azure/msal-react";

function Navbar() {
  const { instance } = useMsal();

  const logout = () => {
    // instance.logoutPopup();
    instance.logoutRedirect();
  };

  return <button onClick={logout}>Logout</button>;
}

export default Navbar;
