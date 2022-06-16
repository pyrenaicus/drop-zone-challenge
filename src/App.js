import { useReducer } from "react";
import logo from "./logo.svg";
import { Router, Route, Switch } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import LoginLogout from "./components/LoginLogout";
import DragAndDrop from "./components/DragAndDrop";
import Loading from "./components/Loading";
import UploadButton from './components/UploadButton';

// styles
import "./App.css";

function App() {
    const { isAuthenticated, isLoading, error, getAccessTokenSilently } = useAuth0();
    console.log(getAccessTokenSilently);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_DROP_DEPTH":
        return { ...state, dropDepth: action.dropDepth };
      case "SET_IN_DROP_ZONE":
        return { ...state, inDropZone: action.inDropZone };
      case "ADD_FILE_TO_LIST":
        return { ...state, fileList: state.fileList.concat(action.files) };
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, {
    dropDepth: 0,
    inDropZone: false,
    fileList: [],
  });

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }



  return (
    <div className="container">
      {isAuthenticated ? <DragAndDrop data={data} dispatch={dispatch} /> : null}

      <LoginLogout />
    </div>
  );
}

export default App;
