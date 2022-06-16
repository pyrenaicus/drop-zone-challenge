import { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

const UploadButtom = () => {
    const [openPicker, data, authResponse] = useDrivePicker();
    const handleOpenPicker = () =>{
	openPicker({
	    clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID,
	    developerKey:"",
	    viewId: "",
	    showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
	});
	console.log("clicked upload")
    };

      useEffect(() => {
    // do anything with the selected/uploaded files
    if (data) {
      data.docs.map((i) => console.log(i));
    }
      }, [data]);
    

    
return       ( <button className="upload-btn" onClick={() => handleOpenPicker()}>
        Subir archivos
      </button>)
}

export default UploadButtom
