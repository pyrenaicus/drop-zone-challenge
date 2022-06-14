import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginLogout = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div class="drop-zone-login">
      <h1 class="heading">Bienvenido a DDrop</h1>
      <div class="subheading">
        Para subir tus archivos de forma simple a drive, puedes hacer Login a
        través de Google.
      </div>

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default LoginLogout;
