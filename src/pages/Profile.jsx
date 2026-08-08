import { useMsal } from "@azure/msal-react";

function Profile() {
  const { accounts } = useMsal();

  return (
    <>
      <h3>{accounts[0]?.name}</h3>
      <p>{accounts[0]?.username}</p>
    </>
  );
}

export default Profile;
