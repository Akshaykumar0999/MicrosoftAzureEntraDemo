// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "./auth/authConfig";
import "./App.css";

function App() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => console.error(e));
    // Or use loginRedirect(loginRequest)
  };

  const handleLogout = () => {
    instance.logoutPopup({ postLogoutRedirectUri: "/" });
    // Or instance.logoutRedirect()
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Entra ID Auth</h1>
        {inProgress !== InteractionStatus.None && (
          <p>Authentication in progress...</p>
        )}
        {!isAuthenticated ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <>
            <p>Welcome, {instance.getActiveAccount()?.name || "User"}!</p>
            <button onClick={handleLogout}>Logout</button>
            <ProtectedContent />
          </>
        )}
      </header>
    </div>
  );
}

// Example protected component that uses access tokens
const ProtectedContent = () => {
  const { instance, accounts } = useMsal();

  const callApi = async () => {
    const account = accounts[0];
    if (!account) return;

    try {
      const response = await instance.acquireTokenSilent({
        ...loginRequest,
        account,
      });
      // Now you have an access token (response.accessToken)
      // Use it to call your backend API or Microsoft Graph
      console.log("Access Token:", response.accessToken);

      // Example: call Microsoft Graph
      const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: {
          Authorization: `Bearer ${response.accessToken}`,
        },
      });
      const data = await graphResponse.json();
      console.log("Graph data:", data);
    } catch (error) {
      console.error("Token acquisition failed:", error);
    }
  };

  return (
    <div>
      <p>You are authenticated!</p>
      <button onClick={callApi}>Call Microsoft Graph</button>
    </div>
  );
};

export default App;