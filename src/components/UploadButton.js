import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DriveUploady from "drive-uploady";
import UploadButton from "@rpldy/upload-button";

const MyUploadButton = (props) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  console.log(user);
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
    <DriveUploady
      clientId="644472389920-n7m2sv1maof12hr6r1fab9ameidlno3d.apps.googleusercontent.com"
      scope="https://www.googleapis.com/auth/drive.file"
      gapi={window.parent.gapi}
    >
      <h2>Drive Uploady</h2>

      <UploadButton>Upload to Drive</UploadButton>
      <button className="upload-btn" onClick={() => handleOpenPicker()}>
        Subir archivos
      </button>
    </DriveUploady>
  );
};

export default MyUploadButton;
