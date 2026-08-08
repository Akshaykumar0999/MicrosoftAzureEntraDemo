import { useMsal } from "@azure/msal-react";

import { loginRequest } from "../auth/authConfig";

function Login() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest);
  };

  return <button onClick={handleLogin}>Login with Microsoft</button>;
}

export default Login;
