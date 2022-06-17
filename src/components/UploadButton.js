import { useEffect } from 'react';
// import useDrivePicker from 'react-google-drive-picker'


const UploadButton = (props) => {
    // const [openPicker, data, authResponse] = useDrivePicker();
    
    const { user, getAccessTokenSilently } = props;
    
    // const handleOpenPicker = () =>{
    // 	openPicker({
    // 	    clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
    // 	    developerKey:"",
    // 	    viewId: "",
    // 	    showUploadView: true,
    //         showUploadFolders: true,
    //         supportDrives: true,
    //         multiselect: true,
    // 	});
    // 	console.log("clicked upload")
    // 		console.log(getAccessTokenSilently)
    // };

    //   useEffect(() => {
    // // do anything with the selected/uploaded files
    // if (data) {
    //   data.docs.map((i) => console.log(i));
    // }
    //   }, [data]);

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

      // setUserMetadata(user_metadata);
    } catch (e) {
      console.log(e.message);
    }
  };

	getUserMetadata();
	console.log(user);
    }, [getAccessTokenSilently, user]);

    
    return       (

	    <button className="upload-btn" onClick={() => {}}>
             Subir archivos
	    </button>

    )
}

export default UploadButton
