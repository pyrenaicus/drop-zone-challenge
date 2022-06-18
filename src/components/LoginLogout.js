import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLogout = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="drop-zone-login">
      <h1 className="heading">Welcome to DDrop</h1>
      <div className="subheading">
        To easily upload your files to Google Drive, please Login with your
        Google account.
      </div>

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default LoginLogout;
