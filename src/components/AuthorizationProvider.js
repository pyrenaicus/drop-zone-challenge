import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const AuthorizationProvider = ({ children }) => {
  // const navigate = useNavigate();⁄
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_API_IDENTIFIER;
  const scope =
    "read:current_user update:current_user_metadata read:user_idp_tokens";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      scope={scope}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthorizationProvider;
