import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UploadButton = (props) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  // console.log(user);
  const handleOpenPicker = () => {};

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: "https://dev-mhl4n8tk.us.auth0.com/api/v2/",
          scope: "read:current_user read:user_idp_tokens",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
      } catch (e) {}
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <button className="upload-btn" onClick={() => handleOpenPicker()}>
      Upload files
    </button>
  );
};

export default UploadButton;
