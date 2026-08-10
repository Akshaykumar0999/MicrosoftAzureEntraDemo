import { useMsal } from "@azure/msal-react";

import { loginRequest } from "../auth/authConfig";

function Login() {
  const { instance } = useMsal();

  // const handleLogin = () => {
  //   instance.loginPopup(loginRequest);
  // };
  const handleLogin = async () => {
    const response = await instance.loginPopup(loginRequest);
    instance.setActiveAccount(response.account); // 🔥 IMPORTANT
  };

  return <button onClick={handleLogin}>Login with Microsoft</button>;
}

export default Login;
